"use client";

import { useState } from "react";
import Header from "app/components/ui/Header/Header";
import Footer from "app/components/ui/Footer/Footer";
import Sidebar from "app/components/sidebar/sidebar";
import TaikaiSection from "app/components/taikaisection/page";

export default function ArchivePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <main className="py-30">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <TaikaiSection />
        <Footer scrollToTop={scrollToTop} />

      <main/>
    </>
  );
}
