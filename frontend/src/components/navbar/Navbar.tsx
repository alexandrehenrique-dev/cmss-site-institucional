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
  mobileMenuLabel?: string | undefined;
};

export function Navbar({
  content,
  className = "",
  mobileMenuLabel,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  const titleOk = Boolean(content?.title?.line1 && content?.title?.line2);
  const linksOk = Array.isArray(content?.links) && content.links.length > 0;

  if (!titleOk || !linksOk) return null;

  return (
    <>
      <nav
        aria-label="Navegação principal"
        className={[
          "top-0 left-0 right-0 z-50 w-full",
          "border-b-[3px] border-[var(--accent)]",
          "text-[var(--fg)]",
          "supports-[backdrop-filter]:bg-[var(--glass-bg)]",
          "supports-[backdrop-filter]:backdrop-blur-[var(--glass-backdrop-blur)]",
          "supports-[backdrop-filter]:[backdrop-filter:saturate(var(--glass-backdrop-saturate))_blur(var(--glass-backdrop-blur))]",
          "bg-[var(--glass-bg)]",
          "shadow-[var(--glass-shadow)]",
          className,
        ].join(" ")}
      >
        <Container>
          <div className="flex items-center justify-between gap-3 py-3">
            <BrandLockup
              title={content.title}
              {...(content.logoSrc ? { logoSrc: content.logoSrc } : {})}
            />

            <div className="hidden md:block">
              <NavLinks links={content.links} orientation="horizontal" />
            </div>

            <div className="md:hidden">
              <MobileMenuButton
                isOpen={open}
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </Container>
      </nav>

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        content={content}
        {...(mobileMenuLabel !== undefined ? { menuLabel: mobileMenuLabel } : {})}
      />
    </>
  );
}