// src/components/ui/PlaceholderVisual.tsx

export default function PlaceholderVisual({
  tone,
  className,
  empty = false,
  label = "テスト",
}: {
  tone: string;
  className?: string;
  empty?: boolean;
  label?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br ${tone} ${
        className ?? ""
      }`}
      aria-hidden="true"
    >
      {!empty && (
        <span className="text-center text-2xl font-bold tracking-[0.28em] text-[#fffffb] drop-shadow-[0_4px_16px_rgba(0,0,0,0.28)]">
          {label}
        </span>
      )}
    </div>
  );
}
