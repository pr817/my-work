"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "app/components/ui/Header/Header";
import Footer from "app/components/ui/Footer/Footer";
import Sidebar from "app/components/sidebar/sidebar";

export default function Kanto63Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="min-h-screen bg-[#181b26]">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="py-30">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="mb-6 text-center text-3xl font-bold tracking-widest text-[#fffffb]">
            第６３回関東学生大会
          </h1>

          <div className="mb-6 flex justify-center">
            <div className="relative h-64 w-full max-w-md overflow-hidden rounded-xl">
              <Image
                src="/DSC04707.jpg"
                alt="第６３回関東学生大会"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-6 text-center">
            <p className="mb-2 text-lg text-[#d4af37]">2026.05.04</p>
            <p className="mb-2 text-xl text-[#fffffb]/70">日本武道館</p>
          </div>

          <p className="mx-auto max-w-lg text-center leading-relaxed text-[#fffffb]/70">
            第63回関東学生少林寺拳法大会。各大学の代表が一堂に会し、日頃の鍛錬の成果を競います。
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/yosen_kanto_63.pdf"
              className="rounded-xl border border-[#d4af37] bg-[#181b26] px-6 py-3 text-[#fffffb] hover:bg-[#d4af37] hover:text-[#fffffb] transition"
            >
              予選結果
            </Link>
            <Link
              href="/honsen_kanto_63.pdf"
              className="rounded-xl border border-[#d4af37] bg-[#181b26] px-6 py-3 text-[#fffffb] hover:bg-[#d4af37] hover:text-[#fffffb] transition"
            >
              本選の結果
            </Link>
            <Link
              href="/sogo_kanto_63.pdf"
              className="rounded-xl border border-[#d4af37] bg-[#181b26] px-6 py-3 text-[#fffffb] hover:bg-[#d4af37] hover:text-[#fffffb] transition"
            >
              関東総合成績
            </Link>
          </div>
        </div>
      </main>

      <Footer scrollToTop={scrollToTop} />
    </div>
  );
}
