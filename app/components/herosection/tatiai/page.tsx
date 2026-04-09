"use client";

import { useEffect, useState } from "react";
// Lucide-reactから必要なアイコンをインポート
import {
  ChevronRight,
  Info,
  FileText,
  Calendar,
  Users,
  Menu,
  X,
} from "lucide-react";
import Header from "app/components/ui/Header/Header";
import Sidebar from "app/components/sidebar/sidebar";
// import Tachiai1 from "public/DSC03362.jpg";

const CATEGORY_DATA = {
  enbu: {
    id: "enbu",
    title: "演武",
    subtitle: "EMBU",
    description:
      "少林寺拳法の技術を二人一組、あるいは単独で構成し表現します。技の正確さ、気迫、そして相手との調和が評価される、芸術性と武道性が融合した競技です。",
    forBeginners:
      "初めての方は、息の合った迫力ある演武の「美しさ」と「力強さ」に注目してみてください。相手を倒すのではなく、共に高め合う精神が表れています。",
    images: ["/DSC04783.jpg", "/DSC04980.jpg", "/DSC05101.jpg"],
    links: [
      { label: "過去の最優秀演武動画", icon: ChevronRight, disabled: true },
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
    images: ["/DSC03362.jpg", "/DSC03443.jpg", "/DSC03512.jpg"],
    links: [{ label: "防具の着用規定・認可リスト", icon: FileText, disabled: false }],
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
      "/DSC00977.jpg",
      "/DSC03780.jpg",
      "/DSC04707.jpg",
      "/DSC05254.jpg",
      "/IMG_3606.jpg",
    ],
    links: [
      { label: "次期大会のエントリーフォーム", icon: Calendar, disabled: false },
      { label: "参加大学一覧・座席表", icon: Users, disabled: false },
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
    // カテゴリが変わったらランダムな画像から開始
    const randomIndex = Math.floor(Math.random() * data.images.length);
    setCurrentImageIndex(randomIndex);

    const slideInterval = setInterval(() => {
      // シンプルに現在のインデックスを+1してループさせるだけ
      setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
    }, 5000); // 5秒間隔

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

  const categoryKeys: CategoryKey[] = ["enbu", "tachiai", "taikai"];
  const orderedKeys = [
    activeCategory,
    ...categoryKeys.filter((key) => key !== activeCategory),
  ];

  return (
    <div className="min-h-screen bg-[#10141c] selection:bg-[#d4af37] selection:text-white">
      {/* 共通ヘッダー */}
      <Header toggleSidebar={toggleSidebar} />

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* スライドショーセクション */}
      <section className="relative h-[65vh] w-full overflow-hidden md:h-[80vh] pt-24">
        {/* スライド画像 */}
        {data.images.map((imgUrl, index) => {
          // 現在のインデックスと一致するかどうかを判定
          const isActive = index === currentImageIndex;

          return (
            <div
              key={imgUrl}
              // opacityのみをトランジション対象にし、z-indexは即時変更
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              style={{
                zIndex: isActive ? 10 : 0,
              }}
            >
              {/* オプション：画像自体がゆっくり拡大するエフェクト（Ken Burns効果）を併用するとよりリッチになります */}
              <img
                src={imgUrl}
                alt={`${data.title}イメージ`}
                className={`h-full w-full object-cover transition-transform duration-[10000ms] ease-linear ${
                  isActive ? "scale-110" : "scale-100"
                }`}
              />
            </div>
          );
        })}

        {/* 下部へのグラデーション遮蔽 */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#10141c] via-transparent to-black/20" />

        {/* カルーセル式タイトルナビゲーション */}
        <div
          className={`absolute bottom-0 left-0 w-full p-6 md:p-16 z-20 transition-all duration-1000 delay-300 ${
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

              let transformStyle = "";
              if (orderedIndex === 0) {
                transformStyle = "left-0 scale-100 opacity-100 z-10";
              } else if (orderedIndex === 1) {
                transformStyle =
                  "left-[45%] md:left-[350px] lg:left-[450px] scale-50 opacity-40 hover:opacity-100 z-0 cursor-pointer";
              } else {
                transformStyle =
                  "left-[75%] md:left-[550px] lg:left-[700px] scale-50 opacity-40 hover:opacity-100 z-0 cursor-pointer";
              }

              return (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={(e) => handleCategoryClick(e, key)}
                  className={`absolute bottom-0 origin-bottom-left flex flex-col items-start transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap ${transformStyle}`}
                >
                  <p
                    className={`mb-1 text-sm font-bold tracking-[0.5em] uppercase transition-colors duration-500 ${isActive ? "text-[#d4af37]" : "text-white/40"}`}
                  >
                    {cat.subtitle}
                  </p>
                  <h1 className="text-6xl md:text-9xl font-black tracking-widest drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)] text-[#fffffb]">
                    {cat.title}
                  </h1>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-24 md:px-12 text-[#fffffb]">
        <div
          className={`grid gap-20 lg:grid-cols-2 transition-all duration-1000 delay-500 ${isPageLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="space-y-12">
            <div>
              <h2 className="mb-8 inline-block text-2xl font-bold tracking-[0.2em] border-b-4 border-[#d4af37] pb-3">
                {data.title}の詳細
              </h2>
              <p className="text-xl leading-relaxed text-[#fffffb]/80 font-medium">
                {data.description}
              </p>
            </div>
            <div className="rounded-3xl bg-[#181b26] p-10 border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <div className="flex items-center gap-4 mb-6 text-[#d4af37]">
                <Info size={28} />
                <h3 className="text-2xl font-bold tracking-wider">
                  見どころガイド
                </h3>
              </div>
              <p className="text-lg leading-loose text-[#fffffb]/70">
                {data.forBeginners}
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <h2 className="text-2xl font-bold tracking-[0.2em] border-b border-[#394155] pb-3 text-[#fffffb]/80">
              関連リソース
            </h2>
            <div className="grid gap-4">
              {data.links.map((link, idx) => {
                const isDisabled = link.disabled === true;
                const LinkWrapper = isDisabled ? 'div' : 'a';
                return (
                  <LinkWrapper
                    key={idx}
                    href={isDisabled ? undefined : "#"}
                    className={`group flex items-center justify-between rounded-2xl bg-white/5 p-6 transition-all border ${
                      isDisabled
                        ? "opacity-50 cursor-not-allowed border-white/5"
                        : "hover:bg-white/10 hover:translate-x-2 border-transparent hover:border-white/10 cursor-pointer"
                    }`}
                    onClick={isDisabled ? (e) => e.preventDefault() : undefined}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        isDisabled
                          ? "bg-[#d4af37]/5 text-[#d4af37]/50"
                          : "bg-[#d4af37]/10 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white"
                      } transition-all`}>
                        <link.icon size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-xl font-semibold tracking-wide ${
                          isDisabled
                            ? "text-[#fffffb]/60"
                            : "text-[#fffffb] group-hover:text-[#d4af37]"
                        } transition-colors`}>
                          {link.label}
                        </span>
                        {isDisabled && (
                          <span className="text-sm text-[#fffffb]/40 mt-1">
                            ※準備中
                          </span>
                        )}
                      </div>
                    </div>
                    {!isDisabled && (
                      <ChevronRight
                        size={24}
                        className="text-white/20 group-hover:text-white transition-colors"
                      />
                    )}
                  </LinkWrapper>
                );
              })}
            </div>
            <div className="mt-16 p-6 rounded-xl bg-gradient-to-br from-[#181b26] to-transparent border-l-2 border-[#d4af37]/50">
              <p className="text-sm text-[#fffffb]/50 leading-relaxed">
                ※このページの情報は現役の学生連盟会員および新入生向けに最適化されています。大会への一般参観については「お知らせ」ページをご確認ください。
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
