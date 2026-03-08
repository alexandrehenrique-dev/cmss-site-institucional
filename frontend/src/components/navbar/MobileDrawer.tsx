"use client";

import { useEffect } from "react";
import { NavbarContent } from "@/types/content";
import { NavLinks } from "./NavLinks";

export type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  content: NavbarContent;
  menuLabel?: string | undefined;
};

export function MobileDrawer({
  open,
  onClose,
  content,
  menuLabel,
}: MobileDrawerProps) {
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
        "fixed inset-0 z-[60] md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Fechar menu"
        onClick={onClose}
        className={[
          "absolute inset-0",
          "bg-[var(--glass-overlay)] backdrop-blur-sm",
          open ? "opacity-100" : "opacity-0",
          "transition-opacity duration-300",
        ].join(" ")}
      />

      <aside
        className={[
          "absolute right-0 top-0 h-full w-[min(86vw,360px)]",
          "border-l border-[var(--glass-border)]",
          "bg-[var(--glass-bg)] text-[var(--fg)]",
          "shadow-[var(--glass-shadow)]",
          "supports-[backdrop-filter]:[backdrop-filter:saturate(var(--glass-backdrop-saturate))_blur(var(--glass-backdrop-blur))]",
          "transition-transform duration-300 [transition-timing-function:cubic-bezier(.16,1,.3,1)]",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex h-full flex-col gap-4 px-6 py-6">
          {menuLabel?.trim() ? (
            <div className="border-b border-[var(--glass-border)] pb-4">
              <span className="institutional-card-title text-2xl leading-none">
                {menuLabel}
              </span>
            </div>
          ) : null}

          <NavLinks
            links={content.links}
            orientation="vertical"
            onNavigate={onClose}
            className="gap-0"
          />
        </div>
      </aside>
    </div>
  );
}