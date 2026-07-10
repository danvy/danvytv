export const SITE = {
  title: "Danvy.TV",
  url: "https://danvy.tv",
  description: "Head in the clouds, feet on the ground",
  subtitle: "Head in the clouds, feet on the ground",
  author: "Alex Danvy",
  copyright: "© 2025 Alex Danvy",
  defaultTheme: "dark" as "dark" | "light",
  gaId: "G-S3KX1Z9H9S",
  contactEmail: "alex@danvy.tv",
} as const;

export const HOME_INFO = {
  title: "Welcome to my digital space",
  content: "Head in the clouds, feet on the ground",
} as const;

export type NavItem = { name: string; url: string };

export const NAV: NavItem[] = [
  { name: "Home", url: "/" },
  { name: "Posts", url: "/posts" },
  { name: "Links", url: "/links" },
  { name: "About", url: "/about" },
  { name: "Search", url: "/search" },
];

export type SocialItem = { name: string; url: string };

export const SOCIAL: SocialItem[] = [
  { name: "linkedin", url: "https://linkedin.com/in/danvy" },
  { name: "x", url: "https://x.com/danvy" },
  { name: "facebook", url: "https://facebook.com/danvy" },
  { name: "github", url: "https://github.com/danvy" },
];
