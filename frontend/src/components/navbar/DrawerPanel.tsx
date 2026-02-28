import { ReactNode } from "react";

export type DrawerPanelProps = {
  children: ReactNode;
  open: boolean;
};

export function DrawerPanel({ children, open }: DrawerPanelProps) {
  return (
    <div
      className={[
        "absolute right-0 top-0 h-full w-[min(86vw,340px)]",
        "border-l border-[var(--border)]",
        "bg-[var(--bg)] text-[var(--fg)]",
        "p-4",
        "transition-transform duration-200 ease-out",
        open ? "translate-x-0" : "translate-x-full",
      ].join(" ")}
      role="dialog"
      aria-label="Menu"
      aria-hidden={!open}
    >
      {children}
    </div>
  );
}