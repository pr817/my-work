"use client";

export default function Footer({ scrollToTop }: { scrollToTop: () => void }) {
  return (
    <footer className="bg-[#181b26] px-4 py-12 text-[#fffffb]/70 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div
          onClick={scrollToTop}
          className="flex cursor-pointer items-center group"
        >
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden p-0 transition-transform duration-300 group-hover:scale-110">
            <img
              src="/5BtNYmeB_400x400-removebg-preview.png"
              alt="関東学生少林寺連盟ロゴ"
              width={60}
              height={60}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="ml-3 text-lg font-bold tracking-widest text-[#fffffb] transition-colors duration-300 group-hover:text-[#d4af37]">
            関東学生少林寺連盟
          </span>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="/contact" className="transition-colors hover:text-[#fffffb]">
            お問い合わせ
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-8 text-center text-xs text-[#fffffb]/50">
        © {new Date().getFullYear()} Kanto Student Shorinji Kempo Federation.
        All Rights Reserved.
      </div>
    </footer>
  );
}
