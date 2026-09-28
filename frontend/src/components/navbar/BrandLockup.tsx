import Link from "next/link";
import Image from "next/image";
import { NavbarTitle } from "@/types/content";
import { Heading } from "../Typography";

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
      className={[
        "inline-flex min-w-0 items-center gap-2.5 rounded-md",
        "!no-underline hover:!no-underline focus:!no-underline active:!no-underline visited:!no-underline",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
        "opacity-90 transition-opacity duration-150 hover:opacity-100",
        className,
      ].join(" ")}
      style={{ textDecoration: "none" }}
    >
      {logoSrc ? (
        <div className="relative h-11 w-11 shrink-0 sm:h-12 sm:w-12">
          <div
            className={[
              "absolute inset-0 rounded-full",
              "bg-[radial-gradient(circle,rgba(211,175,55,0.28)_0%,rgba(211,175,55,0.14)_38%,transparent_72%)]",
              "blur-[6px] scale-[1.18]",
              "pointer-events-none",
            ].join(" ")}
            aria-hidden="true"
          />

          <div
            className={[
              "relative h-full w-full rounded-full overflow-hidden",
              "bg-transparent",
              "shadow-[0_4px_14px_rgba(0,0,0,0.18)]",
            ].join(" ")}
          >
            <Image
              src={logoSrc}
              alt="Logo"
              fill
              className="object-cover"
              sizes="56px"
              priority
            />
          </div>
        </div>
      ) : (
        <div
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-[var(--border)] bg-[var(--surface-2)]"
          aria-hidden="true"
        />
      )}

      <div className="flex flex-col leading-none">
        <Heading
          as="span"
          variant="h3"
          className="block !text-[clamp(0.85rem,2vw,1rem)] text-[var(--muted)]"
        >
          {line1}
        </Heading>

        <Heading
          as="span"
          variant="h2"
          className="block !text-[clamp(1.4rem,3vw,1.8rem)] institutional-card-title"
        >
          {line2}
        </Heading>
      </div>
    </Link>
  );
}