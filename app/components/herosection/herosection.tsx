"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

type HeroPanel = {
  id: number;
  label: string;
  tone: string;
  linkPath: string; // タッチした際の遷移先URL用
  imageUrl: string; // 画像URL用
};

const heroPanels: HeroPanel[] = [
  {
    id: 0,
    label: "演武",
    tone: "from-[#394155] via-[#242a38] to-[#10141c]",
    linkPath: "/components/herosection/enbu",
    imageUrl: "/DSC05101.jpg",
  },
  {
    id: 1,
    label: "立合評価法",
    tone: "from-[#d0ae68] via-[#8f6a2f] to-[#4f3513]",
    linkPath: "/components/herosection/tatiai/",
    imageUrl: "/DSC03362.jpg",
  },
  {
    id: 2,
    label: "大会",
    tone: "from-[#efe7d7] via-[#d6be95] to-[#b28c54]",
    linkPath: "/components/herosection/taikai",
    imageUrl: "/DSC04707.jpg",
  },
];

export default function HeroSection() {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
  const [expandedPanel, setExpandedPanel] = useState<number | null>(null);
  const [isColorFading, setIsColorFading] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const loadedTimer = window.setTimeout(() => {
      setIsHeroLoaded(true);
    }, 300); // 少し遅延を追加してフェードイン効果を明確に
    const fadeTimer = window.setTimeout(() => {
      setIsColorFading(true);
    }, 2000);
    const interactiveTimer = window.setTimeout(() => {
      setIsInteractive(true);
    }, 2000);

    return () => {
      window.clearTimeout(loadedTimer);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(interactiveTimer);
    };
  }, []);

  return (
    <section className="group/hero relative flex h-screen w-full overflow-hidden bg-[#181b26]">
      <div className="absolute inset-0 z-0 flex h-full w-full">
        {heroPanels.map((panel, index) => {
          const isHovered = hoveredPanel === index;
          const isExpanded = expandedPanel === index;
          const isAnyExpanded = expandedPanel !== null;

          let flexClass = "flex-1";
          if (isAnyExpanded) {
            flexClass = isExpanded ? "flex-[10]" : "flex-[0]";
          } else if (hoveredPanel !== null) {
            flexClass = isHovered ? "flex-[2.5]" : "flex-[0.5]";
          }

          return (
            <a
              key={panel.id}
              href={isInteractive ? panel.linkPath : "#"}
              className={`relative h-full overflow-hidden border-r border-[#181b26]/50 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] last:border-0 ${flexClass} ${
                isInteractive ? "cursor-pointer" : "cursor-default"
              }`}
              onMouseEnter={() =>
                isInteractive && !isAnyExpanded && setHoveredPanel(index)
              }
              onMouseLeave={() =>
                isInteractive && !isAnyExpanded && setHoveredPanel(null)
              }
            >
              <div
                className={`absolute inset-0 h-full w-full transition-all duration-[1500ms] ${
                  !isColorFading || isHovered || isExpanded
                    ? "scale-105 grayscale-0"
                    : "scale-100 grayscale"
                } ${
                  !isColorFading || isExpanded
                    ? "opacity-100"
                    : isHovered
                      ? "opacity-90"
                      : "opacity-60"
                }`}
              >
                {/* 背景となる写真 */}
                <img
                  src={panel.imageUrl:"/IMG_9523.jpg",
                  }
                  alt={panel.label}
                  className="h-full w-full object-cover"
                />
                {/* 写真の上に元のトーン（グラデーション）を半透明で重ねて深みを出す */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${panel.tone} opacity-60 mix-blend-multiply`}
                />
              </div>

              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isExpanded
                    ? "bg-black/20"
                    : "bg-gradient-to-t from-[#181b26]/90 via-[#181b26]/20 to-transparent"
                }`}
              />

              <div
                className={`absolute bottom-8 left-0 w-full text-center transition-all duration-500 delay-100 ${
                  isAnyExpanded ? "translate-y-4 opacity-0" : "translate-y-0"
                }`}
                style={{
                  opacity: isHeroLoaded && !isAnyExpanded ? 1 : 0,
                  transition: "opacity 1s ease-out, transform 0.5s ease-out",
                }}
              >
                <span
                  className={`font-bold tracking-[0.3em] text-[#fffffb] transition-all duration-500 ${
                    isHovered
                      ? "text-2xl drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                      : "text-lg text-[#fffffb]/60"
                  }`}
                >
                  {panel.label}
                </span>
              </div>

              {isExpanded && (
                <div
                  className="absolute top-8 right-8 z-30 rounded-full bg-black/50 p-2 text-white shadow-lg transition hover:bg-black/80"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setExpandedPanel(null);
                  }}
                >
                  <X size={28} />
                </div>
              )}
            </a>
          );
        })}
      </div>

      <div
        className={`pointer-events-none absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 delay-1000 ${
          isHeroLoaded && expandedPanel === null
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-95 opacity-0"
        }`}
      >
        <h1 className="mb-6 text-4xl font-bold tracking-widest text-[#fffffb] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:text-6xl lg:text-7xl">
          少林寺を
          <span className="text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            世界
          </span>
          へ
        </h1>
        <p className="px-4 text-center text-lg font-medium tracking-wider text-[#fffffb]/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:text-xl">
          縦横の絆を紡ぎ、次世代のリーダーを育成する
        </p>
      </div>
    </section>
  );
}
