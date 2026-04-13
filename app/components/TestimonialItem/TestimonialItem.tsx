"use client";

// ※共通コンポーネントのパスはご自身の環境に合わせてください
import PlaceholderVisual from "app/components/ui/PlaceholderVisual/PlaceholderVisual";

type TestimonialItem = {
  role: string;
  name: string;
  univ: string;
  comment: string;
  tone: string;
  empty?: boolean;
};

const testimonials: TestimonialItem[] = [
  {
    role: "大学から始めた現役部員",
    name: "佐藤 健太",
    univ: "〇〇大学 3年",
    comment:
      "武道未経験でしたが、充実したサポート体制と他大学の仲間との合同練習のおかげで、今は自信を持って大会に出場しています。",
    tone: "from-[#3a4256] via-[#202633] to-[#10141c]",
  },
  {
    role: "連盟運営委員",
    name: "鈴木 美咲",
    univ: "△△大学 4年",
    comment:
      "大会の裏方として何百人もの規模のイベントを動かす経験は、社会に出る前の大きな自信と、他大学の親友をもたらしてくれました。",
    tone: "from-[#cfac67] via-[#8a6328] to-[#543815]",
  },
  {
    role: "連盟OB (商社勤務)",
    name: "高橋 誠",
    univ: "平成30年卒",
    comment:
      "学連での『自他共楽』の精神や、立場の違う人たちをまとめた経験が、現在のビジネスの現場でも私のコアスキルとして活きています。",
    tone: "from-[#e6dbc3] via-[#d0b383] to-[#9c7842]",
    empty: true,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#fffffb] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-2 text-sm font-bold tracking-widest text-[#d4af37]">
            VOICES
          </h2>
          <h3 className="text-3xl font-bold text-[#333333] md:text-4xl">
            参加者の声
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative cursor-pointer rounded-3xl border border-[#333333]/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute top-6 right-8 text-6xl font-serif text-[#d4af37] opacity-20 transition-transform group-hover:scale-110">
                &quot;
              </div>
              <p className="relative z-10 mb-8 min-h-[5rem] leading-relaxed text-[#333333]/80">
                {testimonial.comment}
              </p>
              <div className="flex items-center gap-4 border-t border-[#333333]/10 pt-6">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <PlaceholderVisual
                    tone={testimonial.tone}
                    empty={testimonial.empty}
                    className="h-full w-full grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold text-[#d4af37]">
                    {testimonial.role}
                  </p>
                  <p className="text-sm font-bold text-[#333333]">
                    {testimonial.name}
                    <span className="ml-1 font-normal text-[#333333]/60">
                      {testimonial.univ}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
