import Link from "next/link";

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex items-center text-[1.72rem] font-bold leading-none tracking-[-0.045em] sm:text-[1.82rem]"
      style={{ color: inverted ? "var(--text)" : "var(--bg)" }}
      aria-label="Vebzee home"
    >
      <span>VEBZEE</span>
    </Link>
  );
}
