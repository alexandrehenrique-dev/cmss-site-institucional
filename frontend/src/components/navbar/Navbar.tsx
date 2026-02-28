"use client";

import { useState } from "react";
import { NavbarContent } from "@/types/content";
import { BrandLockup } from "./BrandLockup";
import { NavLinks } from "./NavLinks";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileDrawer } from "./MobileDrawer";
import { Container } from "@/components/Container";

export type NavbarProps = {
  content: NavbarContent;
  className?: string;
};

export function Navbar({ content, className = "" }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const titleOk = Boolean(content?.title?.line1 && content?.title?.line2);
  const linksOk = Array.isArray(content?.links) && content.links.length > 0;

  if (!titleOk || !linksOk) return null;

  return (
    <>
      <nav
        aria-label="Navegação principal"
        className={[
          "sticky top-0 z-40",
          "border-b-[3px] border-[var(--accent)]",
          "bg-[var(--bg)] text-[var(--fg)]",
          className,
        ].join(" ")}
      >
        <Container>
          <div className="flex items-center justify-between gap-3 py-3">
            <BrandLockup title={content.title} {...(content.logoSrc ? { logoSrc: content.logoSrc } : {})} />

            {/* Desktop links */}
            <div className="hidden md:block">
              <NavLinks links={content.links} orientation="horizontal" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <MobileMenuButton isOpen={open} onClick={() => setOpen(true)} />
            </div>
          </div>
        </Container>
      </nav>

      <MobileDrawer open={open} onClose={() => setOpen(false)} content={content} />
    </>
  );
}