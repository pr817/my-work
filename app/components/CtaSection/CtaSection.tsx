"use client";

import { ArrowRight } from "lucide-react";
// ※共通コンポーネントのパスはご自身の環境に合わせてください
import PlaceholderVisual from "app/components/ui/PlaceholderVisual/PlaceholderVisual";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#181b26] py-24">
      <div className="absolute inset-0">
        <PlaceholderVisual
          tone="from-[#394155] via-[#242a38] to-[#10141c]"
          className="h-full w-full grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181b26] via-[#181b26]/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-between gap-10 px-4 text-center md:flex-row md:text-left sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-[#fffffb] md:text-5xl">
            あなたの挑戦が、
            <br />
            <span className="text-[#d4af37]">新しい歴史</span>になる。
          </h2>
          <p className="mb-8 text-lg text-[#fffffb]/80">
            初心者からのスタートも、更なる高みを目指す修練も。関東学生少林寺連盟は、共に成長できる仲間と環境を用意してあなたを待っています。
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-4 sm:flex-row md:w-auto md:flex-col">
          <a
            href="/support/join"
            className="group flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 text-lg font-bold text-[#181b26] shadow-lg shadow-[#d4af37]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#fffffb] active:scale-95"
          >
            加盟・入会のご案内
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="/contactspace"
            className="group flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/16 px-8 py-4 text-lg font-bold text-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/24 active:scale-95"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
