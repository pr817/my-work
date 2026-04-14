"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでフォーム送信処理を実装します（後で設定）
    alert("送信機能は現在準備中です。");
  };

  return (
    <section className="bg-[#fffffb] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-[#333333]">
            お問い合わせ
          </h2>
          <p className="text-[#333333]/60">
            ご意見・ご要望・お問い合わせはこちらからお願いします
          </p>
        </div>

        <div className="rounded-3xl border border-[#333333]/5 bg-white p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-[#333333]"
              >
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#333333]/20 bg-[#fffffb] px-4 py-3 text-[#333333] transition-colors focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#333333]"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#333333]/20 bg-[#fffffb] px-4 py-3 text-[#333333] transition-colors focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20"
                placeholder="example@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#333333]"
              >
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-xl border border-[#333333]/20 bg-[#fffffb] px-4 py-3 text-[#333333] transition-colors focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20"
                placeholder="ご意見・ご要望・お問い合わせ内容をご記入ください"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-full bg-[#181b26] px-8 py-4 font-bold text-[#fffffb] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d4af37] hover:text-[#181b26] hover:shadow-lg active:scale-95"
              >
                送信する
              </button>
            </div>
          </form>

          <div className="mt-12 border-t border-[#333333]/10 pt-8">
            <h3 className="mb-4 text-xl font-bold text-[#333333]">
              その他の連絡方法
            </h3>
            <p className="text-[#333333]/70">
              メールでのお問い合わせは{" "}
              <a
                href="mailto:info@example.com"
                className="text-[#d4af37] underline hover:text-[#d4af37]/80"
              >
                info@example.com
              </a>{" "}
              までお願いします。
              <br />
              電話でのお問い合わせは 03-XXXX-XXXX まで（平日 10:00-17:00）。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
