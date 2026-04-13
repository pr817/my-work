// src/components/NewsSection.tsx
"use client";

import { useState, type ReactNode, useMemo } from "react";
import { ArrowRight } from "lucide-react";
// さっき作ったデータと型をインポート
import { newsData, type NewsCategory } from "app/components/newsDate/newdate";

// このファイルの中だけで使う小さなボタンコンポーネント
function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-300 active:scale-95 ${
        active
          ? "border-[#181b26] bg-[#181b26] text-[#fffffb] shadow-md"
          : "border-transparent bg-white text-[#333333]/60 hover:-translate-y-0.5 hover:bg-[#333333]/5 hover:text-[#333333] hover:shadow-sm"
      }`}
    >
      {children}
    </button>
  );
}

// 日付文字列 "YYYY.MM.DD" を Date オブジェクトに変換するヘルパー
function parseDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day); // month は 0-indexed
}

// これがメインのコンポーネント！外部から使えるようにexport defaultする
function NewsSection() {
  const [activeTab, setActiveTab] = useState<NewsCategory>("all");

  // 表示するニュースをフィルタリング、ソート、スライス
  const displayedNews = useMemo(() => {
    // 1. フィルタリング
    const filtered = newsData.filter(
      (news) => activeTab === "all" || news.category === activeTab,
    );

    // 2. 日付でソート（新しい順）
    const sorted = [...filtered].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime(); // 降順
    });

    // 3. 表示数を制限
    const limit = activeTab === "all" ? 5 : 3;
    return sorted.slice(0, limit);
  }, [activeTab]);

  return (
    <section className="bg-[#333333]/5 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-[#333333]">
              News & Topics
            </h2>
            <p className="text-[#333333]/60">最新情報</p>
          </div>
          <a
            href="/news"
            className="group hidden items-center rounded-full px-4 py-2 font-medium text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37]/10 hover:text-[#d4af37]/80 active:scale-95 md:flex"
          >
            すべて見る{" "}
            <ArrowRight
              size={16}
              className="ml-1 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="hide-scrollbar mb-6 flex gap-2 overflow-x-auto pb-4">
          <TabButton
            active={activeTab === "all"}
            onClick={() => setActiveTab("all")}
          >
            すべて
          </TabButton>
          <TabButton
            active={activeTab === "internal"}
            onClick={() => setActiveTab("internal")}
          >
            加盟校・現役生へ
          </TabButton>
          <TabButton
            active={activeTab === "obog"}
            onClick={() => setActiveTab("obog")}
          >
            OB・OGの方へ
          </TabButton>
        </div>

        <div className="flex flex-col gap-4">
          {displayedNews.map((news) => (
            <a
              href={news.path}
              key={news.id}
              className="group flex cursor-pointer flex-col gap-4 rounded-2xl border border-[#333333]/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:flex-row md:items-center"
            >
              <div className="flex shrink-0 items-center gap-4 md:w-48">
                <span className="text-sm font-medium text-[#333333]/60">
                  {news.date}
                </span>
                <span className="rounded-full bg-[#333333]/5 px-3 py-1 text-xs font-bold text-[#333333]/80 transition-colors group-hover:bg-[#d4af37]/10 group-hover:text-[#d4af37]">
                  {news.tag}
                </span>
              </div>
              <h3 className="line-clamp-2 flex-1 font-medium text-[#333333] transition-colors group-hover:text-[#d4af37]">
                {news.title}
              </h3>
            </a>
          ))}
        </div>

        <a
          href="/news"
          className="mt-8 flex w-full items-center justify-center rounded-xl border border-[#333333]/20 py-3 font-medium text-[#333333]/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#181b26] hover:bg-[#181b26] hover:text-[#fffffb] hover:shadow-lg active:scale-95 md:hidden"
        >
          すべて見る
        </a>
      </div>
    </section>
  );
}

export default NewsSection;
