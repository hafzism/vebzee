"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

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
  const pathname = usePathname();
  const textColor = inverted ? "var(--text)" : "var(--bg)";
  const isHomeHashLink = pathname === "/" && href.startsWith("/#");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isHomeHashLink) {
      return;
    }

    const targetId = href.slice(2);
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      scroll={!isHomeHashLink}
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
