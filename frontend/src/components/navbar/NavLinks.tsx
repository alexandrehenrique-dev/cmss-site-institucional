import { NavbarLink } from "@/types/content";
import { NavItem } from "./NavItem";

export type NavLinksProps = {
  links: NavbarLink[];
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
  className?: string;
};

export function NavLinks({
  links,
  orientation = "horizontal",
  onNavigate,
  className = "",
}: NavLinksProps) {
  if (!Array.isArray(links) || links.length === 0) return null;

  const layout =
    orientation === "vertical"
      ? "flex flex-col items-start"
      : "flex flex-row items-center flex-wrap justify-end";

  return (
    <div className={[layout, "gap-10", className].join(" ")}>
      {links.map((link) => (
        <NavItem
          key={link.href}
          href={link.href}
          label={link.label}
          {...(onNavigate ? { onNavigate } : {})}
        />
      ))}
    </div>
  );
}