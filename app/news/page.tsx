"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { newsData, type NewsCategory } from "../news-data";
import Header from "../components/ui/Header/Header";
import Sidebar from "../components/sidebar/sidebar";

const ITEMS_PER_PAGE = 10;

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<NewsCategory>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Header用の関数（必要に応じて中身を実装してください）

  const filteredNews = newsData.filter(
    (news) => activeTab === "all" || news.category === activeTab,
  );
  const totalPages = Math.max(
    1,
    Math.ceil(filteredNews.length / ITEMS_PER_PAGE),
  );
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleTabChange = (category: NewsCategory) => {
    setActiveTab(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#10141c] font-sans  text-[#333333]">
      {/* 共通ヘッダー */}
      <Header toggleSidebar={toggleSidebar} />
      　　　　　　
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="mx-auto max-w-4xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <h1 className="mb-2 text-sm font-bold tracking-widest text-[#d4af37]">
            NEWS & TOPICS
          </h1>
          <h2 className="text-3xl font-bold text-[#ffff] md:text-4xl">
            最新情報
          </h2>
        </div>

        <div className="rounded-3xl border border-[#333333]/5 bg-white p-6 shadow-xl opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards] md:p-12">
          <div className="hide-scrollbar mb-8 flex gap-2 overflow-x-auto border-b border-[#333333]/10 pb-4">
            <TabButton
              active={activeTab === "all"}
              onClick={() => handleTabChange("all")}
            >
              すべて
            </TabButton>
            <TabButton
              active={activeTab === "internal"}
              onClick={() => handleTabChange("internal")}
            >
              加盟校・現役生へ
            </TabButton>
            <TabButton
              active={activeTab === "obog"}
              onClick={() => handleTabChange("obog")}
            >
              OB・OGの方へ
            </TabButton>
          </div>

          <div className="flex flex-col gap-4">
            {paginatedNews.map((news) => (
              <Link
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
                <ArrowRight
                  size={20}
                  className="hidden text-[#333333]/20 transition-all group-hover:translate-x-1 group-hover:text-[#d4af37] md:block"
                />
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition-colors ${
                      currentPage === page
                        ? "bg-[#181b26] text-white"
                        : "border border-transparent bg-white text-[#333333]/60 hover:border-[#333333]/10 hover:bg-[#333333]/5"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <footer className="bg-[#181b26] py-8 text-center text-xs text-[#fffffb]/50">
        © {new Date().getFullYear()} Kanto Student Shorinji Kempo Federation.
      </footer>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

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
