"use client";

// このセクションで使うデータと型
type HistoryItem = {
  year: string;
  title: string;
  desc: string;
};

const history: HistoryItem[] = [
  {
    year: "1960年代",
    title: "関東学生少林寺連盟 創設",
    desc: "大学における少林寺拳法普及の足掛かりとして発足。",
  },
  {
    year: "1980年代",
    title: "加盟校の拡大と大会の整備",
    desc: "インカレ等の基礎が作られ、競技レベルが飛躍的に向上。",
  },
  {
    year: "2000年代〜現在",
    title: "社会に貢献するリーダーの輩出",
    desc: "数多くのOB・OGが各界で活躍。盤石な支援基盤を確立。",
  },
];

export default function VerticalHistorySection() {
  return (
    <section className="relative overflow-hidden bg-[#181b26] px-4 py-24 text-[#fffffb] sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 className="mb-2 text-sm font-bold tracking-widest text-[#d4af37]">
            HISTORY & ALUMNI
          </h2>
          <h3 className="mb-6 text-3xl font-bold md:text-4xl">縦のつながり</h3>
          <p className="mb-8 leading-relaxed text-[#fffffb]/70">
            半世紀以上の歴史が紡いできた、世代を超えた強固なネットワーク。社会の第一線で活躍するOB・OGの存在と、協賛企業様からの手厚いサポートが、現役学生の活動と成長を強力に後押しします。
          </p>

          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-[#d4af37] before:to-transparent md:before:mx-auto md:before:translate-x-0">
            {history.map((item) => (
              <div
                key={item.year}
                className="group relative flex items-center justify-between transition-transform duration-300 hover:-translate-y-1 md:justify-normal md:odd:flex-row-reverse"
              >
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-[#181b26] bg-[#d4af37] text-[#181b26] shadow-lg transition-transform group-hover:scale-110 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
                <div className="w-[calc(100%-4rem)] rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition-colors group-hover:border-[#d4af37]/50 md:w-[calc(50%-3rem)]">
                  <span className="mb-1 block text-sm font-bold text-[#d4af37]">
                    {item.year}
                  </span>
                  <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                  <p className="text-sm text-[#fffffb]/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm">
            <h4 className="mb-4 flex items-center text-xl font-bold">
              <span className="mr-3 h-6 w-1.5 rounded-full bg-[#d4af37]" />
              OB・OG・協賛の皆様へ
            </h4>
            <p className="mb-6 text-sm text-[#fffffb]/60">
              連盟の更なる発展のため、寄付や協賛を受け付けております。皆様の温かいご支援が、次世代のリーダー育成に直結します。
            </p>
            <a
              href="/support/sponsor"
              className="block w-full rounded-xl bg-[#d4af37] py-3 text-center font-bold text-[#181b26] shadow-lg transition-colors active:scale-95 hover:bg-[#fffffb]"
            >
              ご支援・協賛について
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 grayscale opacity-50 transition-all duration-500 hover:grayscale-0">
            <div className="flex h-20 cursor-pointer items-center justify-center rounded-xl bg-white/10 text-sm font-bold tracking-widest transition-colors hover:bg-white/20">
              SPONSOR 1
            </div>
            <div className="flex h-20 cursor-pointer items-center justify-center rounded-xl bg-white/10 text-sm font-bold tracking-widest transition-colors hover:bg-white/20">
              SPONSOR 2
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
