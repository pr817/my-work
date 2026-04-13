// src/components/Sidebar.tsx
"use client";

import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

// サイドバー用の型定義
type SidebarSubItem = {
  label: string;
  path: string;
  disabled?: boolean;
};

// サイドバーの中の各メニュー項目（アコーディオン）を作るコンポーネント
// Sidebarコンポーネント内だけで使うので export は不要
function SidebarItem({
  title,
  subItems,
}: {
  title: string;
  subItems: SidebarSubItem[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#333333]/10 py-2 last:border-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between py-3 text-lg font-bold text-[#333333] transition-colors hover:text-[#d4af37]"
      >
        {title}
        <ChevronDown
          size={20}
          className={`text-[#333333]/40 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 pb-3 pl-4">
          {subItems.map((item) => (
            <li key={item.label}>
              {item.disabled ? (
                <span className="flex cursor-not-allowed select-none items-center py-1 text-[#333333]/30">
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#333333]/10" />
                  {item.label}
                  <span className="ml-2 rounded-sm bg-[#333333]/5 px-1.5 py-0.5 text-[10px] font-bold text-[#333333]/40">
                    準備中
                  </span>
                </span>
              ) : (
                <a
                  href={item.path}
                  className="group flex items-center py-1 text-[#333333]/80 transition-colors hover:text-[#d4af37]"
                >
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#333333]/20 transition-colors group-hover:bg-[#d4af37]" />
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// これがメインのサイドバーコンポーネント
// 他のファイルで使えるように export default する
export default function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <>
      {/* 背景の黒い半透明部分 */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={toggleSidebar}
      />
      {/* サイドバー本体 */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-80 transform bg-[#fffffb] shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            type="button"
            onClick={toggleSidebar}
            className="rounded-full p-2 transition-all duration-300 hover:scale-105 hover:bg-[#333333]/5 active:scale-95"
            aria-label="メニューを閉じる"
          >
            <X size={24} className="text-[#333333]/70" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-6">
          <SidebarItem
            title="ニュース"
            subItems={[
              { label: "最新のお知らせ", path: "/news" },
              { label: "大会結果", path: "/news/results", disabled: true },
              { label: "プレスリリース", path: "/news/press", disabled: true },
            ]}
          />
          {/* ...（他のSidebarItemも同様に配置）... */}
          <SidebarItem
            title="大会情報"
            subItems={[
              {
                label: "年間スケジュール",
                path: "/competition/schedule",
                disabled: true,
              },
              {
                label: "エントリー方法",
                path: "/competition/entry",
                disabled: true,
              },
              {
                label: "過去の記録",
                path: "/competition/archive",
                disabled: true,
              },
            ]}
          />
          <SidebarItem
            title="連盟について"
            subItems={[
              { label: "組織図", path: "/about/organization", disabled: true },
              { label: "加盟校一覧", path: "/about/schools" },
            ]}
          />
          <SidebarItem
            title="加盟・支援"
            subItems={[
              { label: "新入生・高校生へ", path: "/support/join" },
              {
                label: "OB・OGの皆様へ",
                path: "/support/alumni",
                disabled: true,
              },
              { label: "ご協賛のお願い", path: "/support/sponsor" },
            ]}
          />
        </nav>
      </div>
    </>
  );
}
