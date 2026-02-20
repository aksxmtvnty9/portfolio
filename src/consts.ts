// Site configuration
export const SITE = {
  NAME: "Anush Kumar N",
  EMAIL: "anush.kumar.1998@gmail.com",
  DESCRIPTION: "Software Engineer building products that scale",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
} as const;

// Navigation links (Home removed as requested)
export const NAV_LINKS = [
  { href: "/work", text: "Work" },
  { href: "/blog", text: "Blog" },
  { href: "/projects", text: "Projects" },
] as const;
