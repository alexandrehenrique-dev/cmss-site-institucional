export type NavLink = {
  label: string;
  href: string;
};

export type Navbar = {
  title: string;
  links: NavLink[];
};

export type Footer = {
  text: string;
};

export type GlobalContent = {
  navbar: Navbar;
  footer: Footer;
};

export type Hero = {
  title: string;
  subtitle: string;
  image: string;
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