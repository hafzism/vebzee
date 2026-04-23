import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type LinkArrowProps = {
  href: string;
  label: string;
  inverted?: boolean;
};

export function LinkArrow({
  href,
  label,
  inverted = false,
}: LinkArrowProps) {
  const textColor = inverted ? "var(--text)" : "var(--bg)";

  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 pb-3 transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        color: textColor,
        borderBottom: `1px solid ${textColor}`,
      }}
    >
      <span className="text-[1.25rem] font-medium tracking-[-0.04em] sm:text-[1.35rem]">
        {label}
      </span>
      <span
        className="rounded-full p-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        style={{
          color: "var(--primary)",
        }}
      >
        <ArrowUpRight size={22} strokeWidth={2} />
      </span>
    </Link>
  );
}
