import Link from "next/link";
import { Youtube, Instagram, Facebook, Music2 } from "lucide-react";
import type { FooterSocialLink } from "@/types/content";

function Icon({ platform }: { platform: FooterSocialLink["platform"] }) {
  const cls = "w-5 h-5";
  switch (platform) {
    case "youtube":
      return <Youtube className={cls} />;
    case "instagram":
      return <Instagram className={cls} />;
    case "facebook":
      return <Facebook className={cls} />;
    case "tiktok":
      // Lucide não tem TikTok oficial; Music2 é placeholder aceitável no MVP
      return <Music2 className={cls} />;
  }
}

export function FooterSocialLinks({ links }: { links: FooterSocialLink[] }) {
  if (!Array.isArray(links) || links.length === 0) return null;

  return (
    <nav aria-label="Redes sociais">
      <ul className="flex items-center justify-center gap-4">
        {links.map((l) => (
          <li key={`${l.platform}-${l.href}`}>
            <Link
              href={l.href}
              target="_blank"
              rel="noreferrer"
              aria-label={l.label}
              title={l.label}
              className={[
                "inline-flex items-center justify-center",
                "rounded-md p-2",
                "text-[var(--accent)]",
                "transition",
                "hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(211,175,55,0.35)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
              ].join(" ")}
            >
              <Icon platform={l.platform} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}