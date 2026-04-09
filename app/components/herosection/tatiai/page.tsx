"use client";

import { useEffect, useState } from "react";
// Lucide-reactから必要なアイコンをインポート
import { ChevronRight, Info, FileText, Calendar, Users } from "lucide-react";

// ▼ ご自身のHeaderコンポーネントのパスに合わせて調整してください ▼
// 例: import Header from "@/components/Header";
// ※ ここでは一般的なNext.jsのエイリアス設定を想定しています。
import Header from "app/components/ui/Header/Header";
import Sidebar from "app/components/sidebar/sidebar";

/**
 * 各カテゴリ（演武・立合い・大会）のデータ定義
 * 実際には外部のJSONファイルなどに切り出しても管理しやすいです。
 */
const CATEGORY_DATA = {
  enbu: {
    id: "enbu",
    title: "演武",
    subtitle: "EMBU",
    description:
      "少林寺拳法の技術を二人一組、あるいは単独で構成し表現します。技の正確さ、気迫、そして相手との調和が評価される、芸術性と武道性が融合した競技です。",
    forBeginners:
      "初めての方は、息の合った迫力ある演武の「美しさ」と「力強さ」に注目してみてください。相手を倒すのではなく、共に高め合う精神が表れています。",
    images: [
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=1920",
      "https://images.unsplash.com/photo-1582266255745-9e509426a5a3?auto=format&fit=crop&q=80&w=1920",
    ],
    links: [
      { label: "最新の演武構成ルール", icon: FileText },
      { label: "過去の最優秀演武動画", icon: ChevronRight },
    ],
  },
  tachiai: {
    id: "tachiai",
    title: "立合い",
    subtitle: "TACHIAI",
    description:
      "防具を着用し、実戦形式で技の攻防を競い合います。日々の修練で培った技術と精神力を、予測不能な状況下でいかに発揮できるかが試されます。",
    forBeginners:
      "単なる喧嘩ではなく、厳格なルールの下で行われる「安全な実戦」です。相手の動きを読み、一瞬の隙を突くスピード感が見どころです。",
    images: [
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&q=80&w=1920",
      "https://images.unsplash.com/photo-1552072092-2f9b14016940?auto=format&fit=crop&q=80&w=1920",
    ],
    links: [
      { label: "立合い評価基準の改定について", icon: Info },
      { label: "防具の着用規定・認可リスト", icon: FileText },
    ],
  },
  taikai: {
    id: "taikai",
    title: "大会",
    subtitle: "TAIKAI",
    description:
      "全国の加盟大学が集い、日々の修練の成果を競い合う最大の舞台です。個人の技術向上だけでなく、大学間の垣根を越えた交流と絆を深める場でもあります。",
    forBeginners:
      "会場の熱気と、各大学の応援の盛り上がりは必見です。競技だけでなく、開会式や閉会式での連帯感にも、学生連盟ならではの魅力が詰まっています。",
    images: [
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1920",
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1920",
    ],
    links: [
      { label: "次期大会のエントリーフォーム", icon: Calendar },
      { label: "参加大学一覧・座席表", icon: Users },
    ],
  },
};

type CategoryKey = keyof typeof CATEGORY_DATA;

export default function CategoryDetailPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("tachiai");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Header用の関数（必要に応じて中身を実装してください）

  /**
   * 1. URLのハッシュ変更を監視し、表示カテゴリを切り替える
   */
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as CategoryKey;
      if (CATEGORY_DATA[hash]) {
        setActiveCategory(hash);
      }
    };

    handleHashChange();
    setIsPageLoaded(true);

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const data = CATEGORY_DATA[activeCategory];

  /**
   * 2. スライドショー制御
   * カテゴリ切り替え時にランダムな画像から開始し、5秒ごとにループ
   */
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * data.images.length);
    setCurrentImageIndex(randomIndex);

    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [activeCategory, data.images.length]);

  /**
   * 3. カルーセルをクリックした時の処理
   */
  const handleCategoryClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: CategoryKey,
  ) => {
    e.preventDefault();
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 表示順の計算（アクティブなものを常に0番目=左端に）
  const categoryKeys: CategoryKey[] = ["enbu", "tachiai", "taikai"];
  const orderedKeys = [
    activeCategory,
    ...categoryKeys.filter((key) => key !== activeCategory),
  ];

  return (
    <div className="min-h-screen bg-[#10141c]  selection:bg-[#d4af37] selection:text-white">
      {/* 共通ヘッダー */}
      <Header toggleSidebar={toggleSidebar} />
      　　　　　　
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* スライドショーセクション */}
      <section className="relative h-[60vh] w-full overflow-hidden md:h-[75vh]">
        {/* スライド画像 */}
        {data.images.map((imgUrl, index) => (
          <div
            key={imgUrl}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentImageIndex
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          >
            <img
              src={imgUrl}
              alt={`${data.title}イメージ`}
              className="h-full w-full object-cover transition-transform duration-[10000ms] ease-linear transform scale-110"
            />
          </div>
        ))}

        {/* 下部へのグラデーション遮蔽 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10141c] via-transparent to-black/20" />

        {/* カルーセル式タイトルナビゲーション */}
        <div
          className={`absolute bottom-0 left-0 w-full p-6 md:p-16 z-20 text-[#fffffb]/80 transition-all duration-1000 delay-300 ${
            isPageLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto relative h-24 md:h-32">
            {categoryKeys.map((key) => {
              const cat = CATEGORY_DATA[key];
              const orderedIndex = orderedKeys.indexOf(key);
              const isActive = orderedIndex === 0;

              // 位置・サイズの算出
              let posStyle = "";
              if (orderedIndex === 0) {
                posStyle = "left-0 scale-100 opacity-100 z-10";
              } else if (orderedIndex === 1) {
                posStyle =
                  "left-[45%] md:left-[350px] lg:left-[450px] scale-50 opacity-40 hover:opacity-100 z-0 cursor-pointer";
              } else {
                posStyle =
                  "left-[75%] md:left-[550px] lg:left-[700px] scale-50 opacity-40 hover:opacity-100 z-0 cursor-pointer";
              }

              return (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={(e) => handleCategoryClick(e, key)}
                  className={`absolute bottom-0 origin-bottom-left flex flex-col items-start transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] whitespace-nowrap ${posStyle}`}
                >
                  <p
                    className={`mb-1 text-sm font-bold tracking-[0.4em] transition-colors ${isActive ? "text-[#d4af37]" : "text-[#fffffb]/50"}`}
                  >
                    {cat.subtitle}
                  </p>
                  <h1 className="text-5xl md:text-8xl font-black tracking-widest drop-shadow-2xl">
                    {cat.title}
                  </h1>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      {/* 詳細情報セクション */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <div
          className={`grid gap-16 md:grid-cols-2 text-[#fffffb] transition-all duration-1000 delay-500 ${
            isPageLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* 概要 (左側) */}
          <div className="space-y-10">
            <div>
              <h2 className="mb-6 inline-block text-2xl text-[#fffffb] font-bold tracking-widest border-b-2 border-[#d4af37] pb-2">
                {data.title}について
              </h2>
              <p className="text-lg leading-loose text-[#fffffb]/80">
                {data.description}
              </p>
            </div>
            <div className="rounded-2xl bg-[#181b26] p-8 border border-[#394155]/50 shadow-xl">
              <div className="flex items-center gap-3 mb-4 text-[#d4af37]">
                <Info size={24} />
                <h3 className="text-xl font-bold">はじめて見る方へ</h3>
              </div>
              <p className="leading-relaxed text-[#fffffb]/70">
                {data.forBeginners}
              </p>
            </div>
          </div>

          {/* 実務・既存向けリンク (右側) */}
          <div className="space-y-8">
            <h2 className="text-2xl text-[#fffffb]/80 font-bold tracking-widest border-b border-[#394155] pb-2">
              関連ドキュメント
            </h2>
            <div className="space-y-4">
              {data.links.map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group flex items-center justify-between rounded-xl bg-[#181b26] p-5 transition-all hover:bg-[#394155] hover:translate-x-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-[#d4af37]/10 p-2 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white transition-colors">
                      <link.icon size={22} />
                    </div>
                    <span className="text-lg font-medium text-[#fffffb]">
                      {link.label}
                    </span>
                  </div>
                  <ChevronRight
                    size={20}
                    className=" text-[#fffffb]/80 group-hover:text-[#fffffb] transition-colors"
                  />
                </a>
              ))}
            </div>
            <div className="mt-12 rounded-lg border-l-4 border-[#394155] bg-white/5 p-4 text-sm text-[#fffffb]/40 italic">
              ※各大学の担当者は定期的に最新の配布資料を確認してください。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
