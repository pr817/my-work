"use client";

import { useState } from "react";
import Image from "next/image";

const tournaments = [
  {
    id: 1,
    title: "関東学生大会2026春",
    date: "2026年4月",
    location: "日本武道館",
    description:
      "第1回関東学生少林寺拳法大会。各大学の代表が一堂に会し、日頃の鍛錬の成果を競います。",
    image: "/IMG_9523.jpg",
  },
  {
    id: 2,
    title: "関東学生大会2026秋",
    date: "2026年10月",
    location: "千葉ポートアリーナ",
    description:
      "秋のシーズン。新チーム体制で臨む後期大会。団体戦・個人戦ともに熱戦が期待されます。",
    image: "/IMG_9523.jpg",
  },
  {
    id: 3,
    title: "関東新人大会2027",
    date: "2027年1月",
    location: "埼玉県立武道館",
    description:
      "1年生主体のフレッシュな大会。これからの連盟を担う若手選手たちの登竜門。",
    image: "/IMG_9523.jpg",
  },
];

export default function TaikaiSection() {
  const [search, setSearch] = useState("");

  const filtered = tournaments.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#181b26] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="mb-10 text-center text-3xl font-bold tracking-widest text-[#fffffb]">
          大会一覧
        </h1>

        {/* 検索バー */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="大会名で検索…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md rounded-xl border border-[#fffffb]/20 bg-white/5 px-4 py-3 text-[#fffffb] placeholder-[#fffffb]/50 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
          />
        </div>

        {/* カード一覧 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border border-[#fffffb]/20 bg-white/5 p-6 shadow-xl transition hover:scale-[1.02]"
            >
              <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="mb-2 text-xl font-bold text-[#fffffb]">
                {t.title}
              </h2>
              <p className="mb-1 text-sm text-[#d4af37]">{t.date}</p>
              <p className="mb-1 text-sm text-[#fffffb]/50">{t.location}</p>
              <p className="text-sm leading-relaxed text-[#fffffb]/70">
                {t.description}
              </p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-[#fffffb]/50">
            該当する大会は見つかりませんでした
          </p>
        )}
      </div>
    </main>
  );
}
