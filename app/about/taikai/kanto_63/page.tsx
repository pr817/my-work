"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "app/components/ui/Header/Header";
import Footer from "app/components/ui/Footer/Footer";

export default function Kanto63Page() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toggleSidebar = () => {};

  return (
    <div className="min-h-screen bg-[#181b26]">
      <Header toggleSidebar={toggleSidebar} />

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

          <div className="mt-10 flex justify-center gap-6">
            <Link
              href="/about/taikai/kanto_63/result"
              className="rounded-xl border border-[#d4af37] bg-[#181b26] px-6 py-3 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#181b26] transition"
            >
              大会結果
            </Link>
            <Link
              href="/news/2"
              className="rounded-xl border border-[#d4af37] bg-[#181b26] px-6 py-3 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#181b26] transition"
            >
              タイムスケジュール
            </Link>
          </div>
        </div>
      </main>

      <Footer scrollToTop={scrollToTop} />
    </div>
  );
}
