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
      from?: string; // ex: "var(--primary)"
      via?: string;  // ex: "transparent"
      to?: string;   // ex: "transparent"
      fromOpacity?: number; // 0..1
      viaOpacity?: number;  // 0..1
      toOpacity?: number;   // 0..1
    };

export type HeroOverlay = {
  /** escurece a imagem por baixo (0..1). default: 0.40 */
  dim?: number;

  /** blur na imagem (0 = sem blur). default: 0 */
  blur?: number;

  /** gradiente por cima (opcional) */
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

  /** overlay configurável (gradiente + blur) */
  overlay?: HeroOverlay;
};

export type HeroProps = {
  content: HeroContent;
  className?: string;
};

function clamp01(n: number) {
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

export function Hero({ content, className = "" }: HeroProps) {
  const { title, subtitle, image, cta, overlay } = content;
  if (!title) return null;

  const hasImage = Boolean(image?.src && image?.alt);

  const dim = clamp01(typeof overlay?.dim === "number" ? overlay.dim : 0.4);
  const blur = Math.max(0, typeof overlay?.blur === "number" ? overlay.blur : 0);

  const gradient = overlay?.gradient;
  const useGradient = gradient && gradient.type !== "none";

  // defaults gradiente
  const direction = gradient && gradient.type === "linear" ? (gradient.direction ?? "to-r") : "to-r";
  const from = gradient && gradient.type === "linear" ? (gradient.from ?? "var(--primary)") : "var(--primary)";
  const via = gradient && gradient.type === "linear" ? (gradient.via ?? "transparent") : "transparent";
  const to = gradient && gradient.type === "linear" ? (gradient.to ?? "transparent") : "transparent";

  const fromOpacity = clamp01(gradient && gradient.type === "linear" ? (gradient.fromOpacity ?? 0.7) : 0.7);
  const viaOpacity = clamp01(gradient && gradient.type === "linear" ? (gradient.viaOpacity ?? 0) : 0);
  const toOpacity = clamp01(gradient && gradient.type === "linear" ? (gradient.toOpacity ?? 0) : 0);

  const gradientStyle: React.CSSProperties | undefined = useGradient
    ? {
        backgroundImage: `linear-gradient(${direction.replace("to-", "to ")}, 
          color-mix(in srgb, ${from} ${fromOpacity * 100}%, transparent),
          color-mix(in srgb, ${via} ${viaOpacity * 100}%, transparent),
          color-mix(in srgb, ${to} ${toOpacity * 100}%, transparent)
        )`,
      }
    : undefined;

  return (
    <header
      className={[
        "relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden",
        "min-h-[420px] md:min-h-[520px] lg:min-h-[620px]",
        "bg-[var(--bg)]",
        className,
      ].join(" ")}
    >
      {hasImage && (
        <div className="absolute inset-0">
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

          {/* escurecimento base (dim) */}
          <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${dim})` }} />

          {/* gradiente opcional */}
          {useGradient && <div className="absolute inset-0" style={gradientStyle} />}
        </div>
      )}

      <Container>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-full max-w-3xl py-14 md:py-20 lg:py-24">
            <div className="flex flex-col gap-5">
              <Heading variant="h1" className="text-white">
                {title}
              </Heading>

              {subtitle && (
                <Text variant="muted" className="text-white/90 text-base md:text-lg">
                  {subtitle}
                </Text>
              )}

              {cta?.label && (
                <div className="pt-4 flex justify-center">
                  <CTAButton
                    label={cta.label}
                    variant={cta.variant ?? "primary"}
                    {...(cta.href ? { href: cta.href } : {})}
                    {...(cta.onClick ? { onClick: cta.onClick } : {})}
                    {...(typeof cta.disabled === "boolean" ? { disabled: cta.disabled } : {})}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}