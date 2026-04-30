import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // 管理者メールアドレス（環境変数から取得、なければデフォルト）
    const adminEmail = process.env.ADMIN_EMAIL || "pr@kantogs.org";
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPassword) {
      console.error("Missing SMTP environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // 管理者へのメール
    await transporter.sendMail({
      from: `"Contact Form" <${smtpUser}>`,
      to: adminEmail,
      subject: `新しいお問い合わせ: ${name}`,
      text: `
名前: ${name}
メールアドレス: ${email}
メッセージ:
${message}
      `,
      html: `
<h2>新しいお問い合わせ</h2>
<p><strong>名前:</strong> ${name}</p>
<p><strong>メールアドレス:</strong> ${email}</p>
<p><strong>メッセージ:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // 自動返信メール（送信者へ）
    await transporter.sendMail({
      from: `"Contact Form" <${smtpUser}>`,
      to: email,
      subject: "お問い合わせを受け付けました",
      text: `
${name} 様

お問い合わせいただきありがとうございます。
以下の内容で受け付けました。

名前: ${name}
メールアドレス: ${email}
メッセージ:
${message}

内容を確認し、折り返しご連絡させていただきます。
しばらくお待ちください。
      `,
      html: `
<h2>お問い合わせを受け付けました</h2>
<p>${name} 様</p>
<p>お問い合わせいただきありがとうございます。<br>
以下の内容で受け付けました。</p>
<ul>
<li><strong>名前:</strong> ${name}</li>
<li><strong>メールアドレス:</strong> ${email}</li>
<li><strong>メッセージ:</strong> ${message.replace(/\n/g, "<br>")}</li>
</ul>
<p>内容を確認し、折り返しご連絡させていただきます。<br>
しばらくお待ちください。</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
