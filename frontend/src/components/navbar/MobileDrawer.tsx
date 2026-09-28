"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { NavbarContent } from "@/types/content";
import { NavLinks } from "./NavLinks";

export type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  content: NavbarContent;
  menuLabel?: string | undefined;
};

export function MobileDrawer({ open, onClose, content, menuLabel }: MobileDrawerProps) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!open || !dialog) return;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    const breakpoint = window.matchMedia("(min-width: 1024px)");
    const onResize = () => { if (breakpoint.matches) onClose(); };
    breakpoint.addEventListener("change", onResize);
    return () => {
      breakpoint.removeEventListener("change", onResize);
      dialog.close();
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  return (
    <dialog id="cmss-mobile-drawer" ref={ref} className="mobile-drawer" aria-label={menuLabel || "Menu"}
      onCancel={onClose} onClose={() => { if (!ref.current?.open) onClose(); }}
      onClick={(event) => { if (event.clientX < event.currentTarget.getBoundingClientRect().left) onClose(); }}>
      <div className="flex items-center justify-between border-b border-[var(--gold-border)] pb-5">
        <span className="font-heading text-3xl institutional-card-title">{menuLabel || "Menu"}</span>
        <button type="button" onClick={onClose} aria-label="Fechar menu" className="grid h-11 w-11 place-items-center rounded-md"><X size={22} /></button>
      </div>
      <NavLinks links={content.links} orientation="vertical" onNavigate={onClose} className="mt-6 gap-5" />
    </dialog>
  );
}
