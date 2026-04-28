"use client";

import Image from "next/image";

const schedule = [
  { time: "9:30", label: "予選開始" },
  { time: "12:30", label: "開会式" },
  { time: "13:00", label: "本選開始" },
  { time: "16:50", label: "閉会式" },
];

export default function TaikaiSchedulePage() {
  return (
    <main className="min-h-screen bg-[#181b26] py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="mb-10 text-center text-3xl font-bold tracking-widest text-[#fffffb]">
          関東学生大会
          <span className="text-[#d4af37]"> タイムスケジュール</span>
        </h1>
        <div className="rounded-2xl border border-[#fffffb]/20 bg-white/5 p-8 shadow-xl">
          <div className="mb-8 flex justify-center">
            <div className="relative h-48 w-full max-w-md overflow-hidden rounded-xl">
              <Image
                src="/IMG_9523.jpg"
                alt="大会イメージ"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <ul className="space-y-6">
            {schedule.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center border-b border-[#fffffb]/10 pb-4 last:border-b-0"
              >
                <span className="w-24 text-right text-xl font-bold text-[#d4af37] tabular-nums">
                  {item.time}
                </span>
                <span className="ml-6 h-full w-0.5 bg-[#d4af37]" />
                <span className="ml-6 text-lg font-medium text-[#fffffb]/90">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-center text-sm text-[#fffffb]/50">
          ※ 時間は目安です。進行状況により前後する場合がございます。
        </p>
      </div>
    </main>
  );
}
