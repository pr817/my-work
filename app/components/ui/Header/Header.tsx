"use client";

import { useEffect, useState } from "react";

import { Menu } from "lucide-react";

export default function Header({
  toggleSidebar,
  scrollToTop,
}: {
  toggleSidebar: () => void;
  scrollToTop?: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleLogoClick = () => {
    const isHomePage = window.location.pathname === "/";
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-md transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* ロゴ・タイトル部分：
              クリックでホーム（ヒーローセクション）へ戻る処理
          */}
          <div
            onClick={handleLogoClick}
            className="flex cursor-pointer items-center group"
          >
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden p-0 transition-transform duration-300 group-hover:scale-110">
              <img
                src="/5BtNYmeB_400x400-removebg-preview.png"
                alt="関東学生少林寺連盟ロゴ"
                width={60}
                height={60}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="ml-3 text-lg font-bold tracking-widest text-[#333333] transition-colors duration-300 group-hover:text-[#d4af37] md:text-xl">
              関東学生少林寺連盟
            </span>
          </div>

          <button
            type="button"
            onClick={toggleSidebar}
            className="rounded-lg p-2 transition-all duration-300 hover:scale-105 hover:bg-[#333333]/5 active:scale-95 focus:outline-none"
            aria-label="メニューを開く"
          >
            <Menu size={28} className="text-[#333333]" />
          </button>
        </div>
      </div>
    </header>
  );
}
