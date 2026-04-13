// src/components/MissionSection.tsx
"use client";

// ※パスは先ほどHeroSectionで成功したものに合わせてください
import PlaceholderVisual from "app/components/ui/PlaceholderVisual/PlaceholderVisual";

export default function MissionSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-10 rounded-3xl border border-[#333333]/5 bg-white p-8 shadow-xl md:flex-row md:p-12">
        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-[#fffffb] bg-[#181b26]/5 shadow-inner md:h-48 md:w-48">
          <PlaceholderVisual
            tone="from-[#394155] via-[#242a38] to-[#10141c]"
            className="h-full w-full grayscale transition-all duration-500 hover:grayscale-0"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="mb-2 text-sm font-bold tracking-widest text-[#d4af37]">
            MISSION & VISION
          </h2>
          <h3 className="mb-6 text-2xl font-bold leading-relaxed text-[#333333] md:text-3xl">
            自己確立と自他共楽の精神で、
            <br className="hidden md:block" />
            社会に貢献する人づくりを。
          </h3>
          <p className="mb-6 leading-relaxed text-[#333333]/80">
            関東学生少林寺連盟は、単なる競技技術の向上にとどまらず、他大学との交流を通じた「横のつながり」、そして社会で活躍する先輩方から学ぶ「縦のつながり」を重視しています。拳禅一如の修行を通じて、時代を牽引する強くて優しいリーダーを社会へ輩出することが我々の使命です。
          </p>
          <div className="border-t border-[#333333]/10 pt-4 text-right">
            <p className="text-sm text-[#333333]/60">
              令和8年度 関東学生少林寺連盟 委員長
            </p>
            <p className="text-lg font-bold text-[#333333]">山田 太郎</p>
          </div>
        </div>
      </div>
    </section>
  );
}
