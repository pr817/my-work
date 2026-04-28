// src/components/MissionSection.tsx
"use client";

// ※パスは先ほどHeroSectionで成功したものに合わせてください
import PlaceholderVisual from "app/components/ui/PlaceholderVisual/PlaceholderVisual";

export default function MissionSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-10 rounded-3xl border border-[#333333]/5 bg-white p-8 shadow-xl md:flex-row md:p-12">
        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-[#fffffb] bg-[#181b26]/5 shadow-inner md:h-48 md:w-48">
          <img
            src="/IMG_9523.jpg"
            alt="委員長写真"
            className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="mb-2 text-sm font-bold tracking-widest text-[#d4af37]">
            MISSION & VISION
          </h2>
          <div className="mb-6 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#333333]">Mission</h3>
              <p className="mt-1 text-sm font-semibold text-[#d4af37]">ー関東学生少林寺拳法連盟の存在価値ー</p>
              <p className="mt-2 leading-relaxed text-[#333333]/80">
                関東圏内の大学少林寺拳法部を束ね、他大学同士の交流である「横のつながり」と、全大学のOBOGとの交流である「横のつながり」の双方を提供する柱となる。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333]">Vision</h3>
              <p className="mt-1 text-sm font-semibold text-[#d4af37]">ー関東学生少林寺拳法連盟が目指す姿ー</p>
              <p className="mt-2 leading-relaxed text-[#333333]/80">
                出身や環境を凌駕し、さまざまな人が交流できる唯一無二の環境となり、お互いに協力しあい、時に切磋琢磨しあう、最高の居場所を創造する。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333]">Value</h3>
              <p className="mt-1 text-sm font-semibold text-[#d4af37]">ー関東学生少林寺拳法連盟連盟の価値観ー</p>
              <p className="mt-2 leading-relaxed text-[#333333]/80">
                本音でぶつかり合うからこそ生まれる、大学の垣根を超えた新しい溜まり場。
              </p>
            </div>
          </div>
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
