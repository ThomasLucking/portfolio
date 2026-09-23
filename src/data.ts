import reactIcon from "./svgs/react_light.svg";
import postgresIcon from "./svgs/postgresql (1).svg";
import vueIcon from "./svgs/vue.svg";
import dockerIcon from "./svgs/docker.svg";
import bunIcon from "./svgs/bun.svg";
import laravelIcon from "./svgs/laravel.svg";
import drizzleIcon from "./svgs/drizzle-orm_light.svg";
import tanstackIcon from "./svgs/tanstack_light.svg";
import typescriptIcon from "./svgs/typescript (1).svg";
import elysiaIcon from "./svgs/elysiajs.svg";
import tailwindIcon from "./svgs/tailwindcss.svg";
import archLinuxIcon from "./svgs/Arch_Linux__Crystal__icon.svg";
import gmailIcon from "./svgs/get_in_touch/gmail.svg";
import githubIcon from "./svgs/get_in_touch/github_light.svg";
import linkedinIcon from "./svgs/get_in_touch/linkedin.svg";
import discordIcon from "./svgs/get_in_touch/discord.svg";

export type WhoAmI = {
  key: string;
  value: string;
};

export type Service = {
  name: string;
  files: readonly string[];
  open?: boolean;
};

export type Skill = {
  name: string;
  icon: string;
  invert?: boolean;
};

export type Contact = {
  kind: "link" | "copy";
  icon: string;
  invert?: boolean;
  value: string;
  href?: string;
};

export const profile = {
  handle: "thomas",
  name: "Thomas Lucking",
  tagline: "portfolio",
  host: "thomas",

  whoami: [
    { key: "name", value: "Thomas Lucking" },
    { key: "base", value: "Leysin, Switzerland" },
    { key: "stack", value: "TypeScript, React, Bun, Laravel" },
    { key: "role", value: "Junior Developer" },
  ] satisfies WhoAmI[],

  intro: {
    before:
      "I build full stack applications in laravel and typescript. I like focusing on maintainability and clean code.",
    after: "Mostly focusing on laravel currently.",
  },

  services: [
    {
      name: "fullstack",
      files: ["typescript.ts", "react.tsx", "elysia.ts"],
      open: true,
    },
    { name: "backend", files: ["bun.ts", "laravel.php", "postgres.sql"] },
    { name: "frontend", files: ["react.tsx", "vue.vue", "tailwind.css"] },
    { name: "database", files: ["postgres.sql", "drizzle.config.ts"] },
    { name: "devops", files: ["Dockerfile"] },
  ] satisfies Service[],

  skills: [
    { name: "TypeScript", icon: typescriptIcon },
    { name: "React", icon: reactIcon },
    { name: "TanStack", icon: tanstackIcon, invert: true },
    { name: "Vue", icon: vueIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Bun", icon: bunIcon },
    { name: "Elysia", icon: elysiaIcon },
    { name: "Laravel", icon: laravelIcon },
    { name: "PostgreSQL", icon: postgresIcon },
    { name: "Drizzle ORM", icon: drizzleIcon, invert: true },
    { name: "Docker", icon: dockerIcon },
    { name: "Arch Linux", icon: archLinuxIcon },
  ] satisfies Skill[],

  contacts: [
    {
      kind: "link",
      icon: gmailIcon,
      value: "telucking@gmail.com",
      href: "mailto:telucking@gmail.com",
    },
    {
      kind: "link",
      icon: githubIcon,
      invert: true,
      value: "Thomas Lucking",
      href: "https://github.com/ThomasLucking",
    },
    {
      kind: "link",
      icon: linkedinIcon,
      value: "Thomas Lucking",
      href: "https://www.linkedin.com/in/thomas-lucking-55a20a341/",
    },
    {
      kind: "copy",
      icon: discordIcon,
      value: "ThomasLucking",
    },
  ] satisfies Contact[],
} as const;

export type Profile = typeof profile;
