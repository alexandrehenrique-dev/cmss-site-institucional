import Link from "next/link";
import Image from "next/image";
import { NavbarTitle } from "@/types/content";

export type BrandLockupProps = {
  title: NavbarTitle;
  logoSrc?: string;
  className?: string;
};

export function BrandLockup({ title, logoSrc, className = "" }: BrandLockupProps) {
  const line1 = title?.line1 ?? "";
  const line2 = title?.line2 ?? "";

  return (
    <Link
      href="/"
      className={[
        "inline-flex items-center gap-3 rounded-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
        className,
      ].join(" ")}
      aria-label="Ir para a página inicial"
    >
      {logoSrc ? (
        <Image
          src={logoSrc}
          alt="Logo"
          width={44}
          height={44}
          className="rounded-sm"
          priority
        />
      ) : (
        <div
          className="h-11 w-11 rounded-sm border border-[var(--border)] bg-[var(--surface-2)]"
          aria-hidden="true"
        />
      )}

      <div className="leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
        <div className="text-[var(--accent)] font-semibold text-sm md:text-base">
          {line1}
        </div>
        <div className="text-[var(--primary)] font-bold text-base md:text-lg">
          {line2}
        </div>
      </div>
    </Link>
  );
}