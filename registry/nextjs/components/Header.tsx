import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center cursor-pointer group">
            <div className="w-12 h-12 bg-[#181b26] rounded-full flex items-center justify-center overflow-hidden p-1 transition-transform duration-300 group-hover:scale-110 shadow-md">
              <Image
                src="/5BtNYmeB_400x400-removebg-preview.png"
                alt="関東学生少林寺連盟ロゴ"
                width={40}
                height={40}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <span className="ml-3 text-xl font-bold tracking-widest text-[#333333] transition-colors duration-300 group-hover:text-[#d4af37]">
              関東学生少林寺連盟
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[#333333]/74 md:flex">
            <Link
              href="/about"
              className="transition-colors hover:text-[#d4af37]"
            >
              連盟について
            </Link>
            <Link
              href="/tournaments"
              className="transition-colors hover:text-[#d4af37]"
            >
              大会情報
            </Link>
            <Link
              href="/news"
              className="transition-colors hover:text-[#d4af37]"
            >
              お知らせ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
