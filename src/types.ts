// Type definitions

export interface Site {
  NAME: string;
  EMAIL: string;
  DESCRIPTION: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
}

export interface Social {
  name: string;
  url: string;
}

export interface NavLink {
  href: string;
  text: string;
}
