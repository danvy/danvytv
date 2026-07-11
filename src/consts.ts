export const SITE = {
  title: "Danvy.TV",
  url: "https://danvy.tv",
  description:
    "Alex Danvy, CEO of Altoviz, personal website including its bio, blog posts and social networks links",
  subtitle: "Head in the clouds, feet on the ground",
  author: "Alex Danvy",
  defaultTheme: "dark" as "dark" | "light",
  gaId: "G-S3KX1Z9H9S",
  contactEmail: "alex@danvy.tv",
  ogImage: "/ogimage.png",
  themeColor: "#37383e",
  tileColor: "#000000",
} as const;

export const HOME_INFO = {
  title: "Alex Danvy",
  content: "Head in the clouds, feet on the ground",
} as const;

export type NavItem = { name: string; url: string };

export const NAV: NavItem[] = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "About", url: "/about" },
  { name: "Links", url: "/links" },
  { name: "Archives", url: "/archives" },
  { name: "Search", url: "/search" },
];

export type SocialItem = { name: string; url: string };

export const SOCIAL: SocialItem[] = [
  { name: "linkedin", url: "https://linkedin.com/in/danvy" },
  { name: "x", url: "https://x.com/danvy" },
  { name: "facebook", url: "https://facebook.com/danvy" },
  { name: "instagram", url: "https://instagram.com/adanvy" },
  { name: "github", url: "https://github.com/danvy" },
];
