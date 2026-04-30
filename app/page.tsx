"use client";

import { useState } from "react";
import Newssection from "app/components/Newssection/Newssection";
import Sidebar from "app/components/sidebar/sidebar";
import HeroSection from "app/components/herosection/herosection";
import HorizontalNetworkSection from "app/components/HorizontalNetworkSection/HorizontalNetworkSection";
import MissionSection from "app/components/missionsection/missionsection";
import Header from "app/components/ui/Header/Header";
import HistorySection from "app/components/VerticalHistorySection/VerticalHistorySection";
import TestimonialSection from "app/components/TestimonialItem/TestimonialItem";
import CtaSection from "app/components/CtaSection/CtaSection";
import Footer from "app/components/ui/Footer/Footer";
import Taikaisec from "app/components/taikaisection/page";
// 外部ファイル化されていた型とデータをファイル内に統合
export default function ShorinjiFederationTop() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-[#fffffb] font-sans text-[#333333]">
      <Header toggleSidebar={toggleSidebar} scrollToTop={scrollToTop} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main>
        <HeroSection />
        <MissionSection />
        <Newssection />
        <Taikaisec />
        <CtaSection />
      </main>

      <Footer scrollToTop={scrollToTop} />
    </div>
  );
}
