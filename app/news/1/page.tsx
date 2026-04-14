export default function NewsDetailPage() {
  return (
    <section className="bg-[#fffffb] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <span className="rounded-full bg-[#333333]/5 px-3 py-1 text-xs font-bold text-[#333333]/80">
            お知らせ
          </span>
          <h1 className="mt-4 text-4xl font-bold text-[#333333]">
            関東学生少林寺連盟ウェブサイトを公開しました
          </h1>
          <p className="mt-2 text-[#333333]/60">2026.05.03</p>
        </div>
        <div className="prose max-w-none rounded-3xl border border-[#333333]/5 bg-white p-8 shadow-sm">
          <p>
            この度、関東学生少林寺連盟の公式ウェブサイトを公開いたしました。
            最新情報や活動報告などを随時更新してまいります。
          </p>
          <p>
            今後とも関東学生少林寺連盟をよろしくお願いいたします。
          </p>
        </div>
        <div className="mt-8 text-center">
          <a
            href="/news"
            className="inline-flex items-center rounded-full bg-[#181b26] px-6 py-3 font-bold text-[#fffffb] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d4af37] hover:text-[#181b26] hover:shadow-lg active:scale-95"
          >
            ニュース一覧に戻る
          </a>
        </div>
      </div>
    </section>
  );
}
