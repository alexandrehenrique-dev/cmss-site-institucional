import { Menu } from "lucide-react";

export type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center rounded-md p-2",
        "border border-[var(--border)] bg-[var(--surface-1)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
        "hover:[box-shadow:0_0_14px_rgba(211,175,55,0.25)]"
      ].join(" ")}
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isOpen}
      aria-controls="cmss-mobile-drawer"
    >
      <Menu
        className="h-5 w-5 text-[var(--accent)] hover:[text-shadow:0_0_14px_rgba(211,175,55,0.55)]"
      />
    </button>
  );
}