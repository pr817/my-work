// Next.js の型（metadata用）
import type { Metadata } from "next";

// Googleフォントを最適化読み込み
import { Geist, Geist_Mono } from "next/font/google";

// グローバルCSS（サイト全体に適用）
import "./globals.css";

/**
 * 通常フォント（サンセリフ）
 * CSS変数 --font-geist-sans として登録
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * 等幅フォント（コード用など）
 * CSS変数 --font-geist-mono として登録
 */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * サイト全体のメタ情報（SEO）
 * <title> や meta description に反映される
 */
export const metadata: Metadata = {
  title: "少林寺拳法 学生連盟",
  description: "少林寺拳法 学生連盟 公式サイト",
  verification: {
    google: "diDWY_16wSbmb_Lr1WZ9VXgE_I12A4wh4DX1euNSNT0",
  },
};

/**
 * RootLayout
 * 全ページ共通のレイアウト
 *
 * children = 各ページの中身がここに入る
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // サイトの言語設定（日本語）
    <html lang="ja">
      {/* フォント変数をbodyに適用 */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
