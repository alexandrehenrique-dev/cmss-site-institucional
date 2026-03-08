export type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type NavbarLink = {
  label: string;
  href: string;
};

export type NavbarTitle = {
  line1: string;
  line2: string;
};

export type NavbarContent = {
  title: NavbarTitle;
  logoSrc?: string;
  links: NavbarLink[];
};

export type SocialPlatform = "youtube" | "instagram" | "tiktok" | "facebook";

export type FooterSocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type FooterContent = {
  foundedYear: number;
  traditionText: string; // ex: "{years} anos de tradição e cultura"
  socialLinks?: FooterSocialLink[];
  copyrightText: string;
};

export type GlobalContent = {
  navbar: NavbarContent;
  footer: FooterContent;
};

export type Hero = {
  title: string;
  subtitle: string;
  image: Image;
};

export type Section = {
  title: string;
  text?: string;
  items?: string[];
};

export type PageContent = {
  hero: Hero;
  sections?: Section[];
};

export type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  description?: string;
};

export type GalleryAutoplay = {
  enabled: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;
};

export type GalleryVariant = "carousel" | "timeline";

export type GalleryProps = {
  items: GalleryItem[];
  initialIndex?: number;
  aspectRatio?: string;
  className?: string;

  /** Controlado (opcional) */
  index?: number;
  onChangeIndex?: (next: number) => void;

  /** comportamento */
  loop?: boolean;
  autoplay?: GalleryAutoplay;

  /** render */
  variant?: GalleryVariant;
};

export type EventImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type EventCardProps = {
  title: string;
  date?: string;
  location?: string;
  description?: string;
  image?: EventImage;
  className?: string;
};

export type SplitMediaSection = {
  title: string;
  text: string;
  image: Image;
};

export type InstitutionalCardItem = {
  title: string;
  text?: string;
  values?: string[];
};

export type InstitutionalCardsContent = {
  title?: string;
  items: InstitutionalCardItem[];
};

export type SupportIconName = "financial" | "institutional" | "materials" | "default";

export type SupportCardItem = {
  title: string;
  text?: string;
  icon?: SupportIconName;
  copyLabel?: string;
  copyValue?: string;
};

export type SupportCardsContent = {
  title?: string;
  items: SupportCardItem[];
};

export type ContactInfoItemData = {
  label: string;
  value: string;
  type: "email" | "phone" | "address" | "link";
  href?: string;
  secondaryValue?: string;
};

export type ContactFormLabels = {
  title?: string;
  description?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  ctaLabel?: string;
  disabledNote?: string;
};

export type ContactSectionContent = {
  infoTitle?: string;
  infoItems: ContactInfoItemData[];
  formLabels?: ContactFormLabels;
};

export type HeroCTA = {
  label: string;
  href?: string;
};

export type HeroContent = {
  title: string;
  subtitle?: string;
  image?: Image;
  cta?: HeroCTA;
  forceGoldTitle?: boolean;
};

export type EventListContent = {
  title: string;
  items: EventCardProps[];
};

export type HomePageContent = {
  hero: HeroContent;
  events: EventListContent;
  secondaryHero: HeroContent;
};