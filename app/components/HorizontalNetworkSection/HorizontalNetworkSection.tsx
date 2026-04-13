// src/components/HorizontalNetworkSection.tsx
"use client";

import { ArrowRight } from "lucide-react";
// ※パスはご自身の環境に合わせてください
import PlaceholderVisual from "app/components/ui/PlaceholderVisual/PlaceholderVisual";

// このセクションで使うデータと型
type ActivityItem = {
  title: string;
  desc: string;
  tone: string;
  empty?: boolean;
};

const activities: ActivityItem[] = [
  {
    title: "全日本学生大会",
    desc: "全国の拳士が集う最高峰の舞台",
    tone: "from-[#394155] via-[#202633] to-[#10141c]",
  },
  {
    title: "関東学生新人大会",
    desc: "大学から始めた初心者も輝ける登竜門",
    tone: "from-[#d0ae68] via-[#8a6328] to-[#543815]",
  },
  {
    title: "合同合宿・技術交流会",
    desc: "大学の垣根を越えて技術と絆を深める",
    tone: "from-[#efe5d1] via-[#d1b68a] to-[#9d7844]",
    empty: true,
  },
];

export default function HorizontalNetworkSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-2 text-sm font-bold tracking-widest text-[#d4af37]">
          NETWORK
        </h2>
        <h3 className="text-3xl font-bold text-[#333333] md:text-4xl">
          横のつながり
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-[#333333]/70">
          競技の枠組みを超え、加盟校同士が切磋琢磨し合える環境。一生の財産となる同期や他大学の仲間たちとのコミュニティがここにあります。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {activities.map((item) => (
          <div key={item.title} className="group cursor-pointer">
            <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
              <PlaceholderVisual
                tone={item.tone}
                empty={item.empty}
                className="h-full w-full grayscale-[30%] transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181b26]/80 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
            </div>
            <h4 className="mb-2 text-xl font-bold text-[#333333] transition-colors group-hover:text-[#d4af37]">
              {item.title}
            </h4>
            <p className="text-sm text-[#333333]/70">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="/about/schools"
          className="group inline-flex items-center rounded-full px-6 py-3 font-bold text-[#181b26] transition-colors hover:bg-[#333333]/5 hover:text-[#d4af37] active:scale-95"
        >
          加盟校一覧とネットワークを見る
          <ArrowRight
            size={20}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}
