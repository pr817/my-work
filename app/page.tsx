"use client";

import { useState, useEffect } from "react";
import Newssection from "app/components/Newssection/Newssection";
import Sidebar from "app/components/sidebar/sidebar";
import HorizontalNetworkSection from "app/components/HorizontalNetworkSection/HorizontalNetworkSection";
import MissionSection from "app/components/missionsection/missionsection";
import Header from "app/components/ui/Header/Header";
import HistorySection from "app/components/VerticalHistorySection/VerticalHistorySection";
import TestimonialSection from "app/components/TestimonialItem/TestimonialItem";
import CtaSection from "app/components/CtaSection/CtaSection";
import Footer from "app/components/ui/Footer/Footer";
// 外部ファイル化されていた型とデータをファイル内に統合

// ランダム表示する画像のリスト（tatiaiページで使用されている画像を含む）
const HERO_IMAGES = [
  "/DSC03362.jpg",
  "/DSC03443.jpg",
  "/DSC03512.jpg",
  "/DSC04783.jpg",
  "/DSC04980.jpg",
  "/DSC05101.jpg",
  "/DSC00977.jpg",
  "/DSC03780.jpg",
  "/DSC04707.jpg",
  "/DSC05254.jpg",
  "/IMG_3606.jpg",
];

function RandomHeroSection() {
  const [randomImage, setRandomImage] = useState<string | null>(null);

  useEffect(() => {
    // クライアントサイドでのみ実行
    const randomIndex = Math.floor(Math.random() * HERO_IMAGES.length);
    setRandomImage(HERO_IMAGES[randomIndex]);
  }, []);

  if (!randomImage) {
    return (
      <section className="relative h-screen w-full overflow-hidden bg-[#10141c] pt-24">
        <div className="flex h-full items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#d4af37] border-t-transparent"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#10141c] pt-24">
      {/* ランダムに選ばれた画像を表示 */}
      <div className="absolute inset-0">
        <img
          src={randomImage}
          alt="少林寺拳法 学生連盟"
          className="h-full w-full object-cover"
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10141c] via-transparent to-black/30" />
      </div>

      {/* ヒーローコンテンツ */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-6xl">
          <h1 className="mb-6 text-5xl font-black tracking-wider text-white md:text-7xl lg:text-8xl">
            少林寺拳法
            <span className="block text-4xl md:text-6xl lg:text-7xl">
              学生連盟
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/80 md:text-2xl">
            全国の大学で少林寺拳法を修練する学生たちの連盟組織です。
            技と心を磨き、友情を深め、社会に貢献する人材を育成します。
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#about"
              className="rounded-full bg-[#d4af37] px-8 py-4 text-lg font-bold text-black transition-all hover:bg-yellow-500 hover:shadow-2xl"
            >
              活動を見る
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-black"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-px bg-white/50"></div>
      </div>
    </section>
  );
}

export default function ShorinjiFederationTop() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-[#fffffb] font-sans text-[#333333]">
      <Header toggleSidebar={toggleSidebar} scrollToTop={scrollToTop} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main>
        <RandomHeroSection />
        <MissionSection />
        <Newssection />
        <HorizontalNetworkSection />
        <HistorySection />
        <TestimonialSection />
        <CtaSection />
      </main>

      <Footer scrollToTop={scrollToTop} />
    </div>
  );
}
