"use client";

import { useEffect } from "react";
import { NavbarContent } from "@/types/content";
import { DrawerBackdrop } from "./DrawerBackdrop";
import { DrawerPanel } from "./DrawerPanel";
import { NavLinks } from "./NavLinks";
import { BrandLockup } from "./BrandLockup";

export type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  content: NavbarContent;
};

export function MobileDrawer({ open, onClose, content }: MobileDrawerProps) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      id="cmss-mobile-drawer"
      className={[
        "fixed inset-0 z-50 md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      <DrawerBackdrop open={open} onClick={onClose} />

      <DrawerPanel open={open}>
        <div className="flex flex-col gap-4">
          <BrandLockup
            title={content.title}
            {...(content.logoSrc ? { logoSrc: content.logoSrc } : {})}
          />

          <div className="h-px bg-[var(--border)]" />

          <NavLinks
            links={content.links}
            orientation="vertical"
            onNavigate={onClose}
            className="gap-0"
          />
        </div>
      </DrawerPanel>
    </div>
  );
}