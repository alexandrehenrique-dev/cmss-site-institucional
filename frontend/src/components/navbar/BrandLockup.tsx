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
      aria-label="Ir para a página inicial"
      // força sem underline mesmo com teu base.css
      className={[
        "inline-flex items-center gap-3 rounded-md",
        "!no-underline hover:!no-underline focus:!no-underline active:!no-underline visited:!no-underline",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
        "transition-opacity duration-150 hover:opacity-90",
        className,
      ].join(" ")}
      // reforço extra (CSS puro) pra calar a boca do underline
      style={{ textDecoration: "none" }}
    >
      {logoSrc ? (
        <Image
          src={logoSrc}
          alt="Logo"
          width={56}
          height={56}
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-sm object-contain"
          priority
        />
      ) : (
        <div
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-sm border border-[var(--border)] bg-[var(--surface-2)]"
          aria-hidden="true"
        />
      )}

      <div className="flex flex-col leading-none">
        <span
          className="block text-[var(--accent)]"
          style={{
            fontFamily: "var(--font-heading)",
            // controla tamanho de verdade (mobile -> desktop)
            fontSize: "clamp(1.05rem, 2.2vw, 1.75rem)",
            lineHeight: 1.05,
          }}
        >
          {line1}
        </span>

        <span
          className="block text-[var(--primary)]"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.35rem, 3.0vw, 2.25rem)",
            lineHeight: 1.05,
          }}
        >
          {line2}
        </span>
      </div>
    </Link>
  );
}