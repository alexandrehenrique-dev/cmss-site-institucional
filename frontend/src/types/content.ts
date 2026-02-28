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

export type Footer = {
  text: string;
};

export type GlobalContent = {
  navbar: NavbarContent;
  footer: Footer;
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