import Image from "next/image";
import { CTAButton, CTAButtonVariant } from "@/components/CTAButton";
import { Container } from "@/components/Container";
import { Heading, Text } from "@/components/Typography";

export type HeroCTA = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: CTAButtonVariant;
  disabled?: boolean;
};

export type HeroOverlayGradient =
  | { type: "none" }
  | {
      type: "linear";
      direction?: "to-r" | "to-l" | "to-b" | "to-t";
      from?: string;
      via?: string;
      to?: string;
      fromOpacity?: number;
      viaOpacity?: number;
      toOpacity?: number;
    };

export type HeroOverlay = {
  dim?: number;
  blur?: number;
  gradient?: HeroOverlayGradient;
};

export type HeroContent = {
  title: string;
  subtitle?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  cta?: HeroCTA;
  overlay?: HeroOverlay;
  forceGoldTitle?: boolean;
};

export type HeroProps = {
  content: HeroContent;
  className?: string;
  secondary?: boolean;
};

function clamp01(n: number) {
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

export function Hero({ content, className = "", secondary = false }: HeroProps) {
  const { title, subtitle, image, cta, overlay, forceGoldTitle = false } = content;
  if (!title) return null;

  const hasImage = Boolean(image?.src && image?.alt);

  const dim = clamp01(typeof overlay?.dim === "number" ? overlay.dim : 0.4);
  const blur = Math.max(0, typeof overlay?.blur === "number" ? overlay.blur : 0);

  const gradient = overlay?.gradient;
  const useGradient = gradient?.type !== "none";

  return (
    <section
      className={[
        "hero relative w-full overflow-hidden",
        secondary ? "hero-secondary" : "hero-primary",
        "bg-[var(--bg)]",
        className,
      ].join(" ")}
    >
      {hasImage ? (
        <div className="hero-media absolute inset-0">
          <Image
            src={image!.src}
            alt={image!.alt}
            fill
            priority
            sizes="100vw"
            className={[
              "object-cover object-[50%_25%]",
              blur > 0 ? "scale-105" : "",
            ].join(" ")}
            style={blur > 0 ? { filter: `blur(${blur}px)` } : undefined}
          />

          <div
            className="hero-dim absolute inset-0"
            style={{ background: `rgba(0,0,0,${dim})` }}
          />

          {useGradient ? (
            <div className="hero-edge-blend absolute inset-0" />
          ) : null}

          <div className="hero-aged-overlay absolute inset-0" />
        </div>
      ) : null}

      <Container>
        <div
          className={[
            "hero-layout relative z-10 flex flex-col items-center justify-center text-center",
            secondary ? "hero-secondary" : "hero-primary",
          ].join(" ")}
        >
          <div className="hero-copy w-full max-w-4xl py-16 md:py-20">
            <div className="hero-copy-inner flex flex-col gap-5">
              <Heading
                as={secondary ? "h2" : "h1"}
                variant="h1"
                className={[
                  hasImage || forceGoldTitle ? "hero-heading" : "institutional-card-title",
                  "[text-shadow:0_0_12px_rgba(211,175,55,0.35),0_0_22px_rgba(211,175,55,0.18)]",
                  "dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)]",
                  "dark:[text-shadow:0_1px_0_rgba(255,255,255,0.04),0_0_12px_rgba(211,175,55,0.22)]",
                ].join(" ")}
              >
                {title}
              </Heading>

              {subtitle ? (
                <Text
                  variant="muted"
                  className="text-base text-white/95 md:text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
                >
                  {subtitle}
                </Text>
              ) : null}

              {cta?.label ? (
                <div className="hero-action flex justify-center pt-4">
                  <CTAButton
                    label={cta.label}
                    variant={cta.variant ?? "primary"}
                    {...(cta.href ? { href: cta.href } : {})}
                    {...(cta.onClick ? { onClick: cta.onClick } : {})}
                    {...(typeof cta.disabled === "boolean"
                      ? { disabled: cta.disabled }
                      : {})}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}