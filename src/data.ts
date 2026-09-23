import reactIcon from "./svgs/react_light.svg";
import postgresIcon from "./svgs/postgresql (1).svg";
import vueIcon from "./svgs/vue.svg";
import dockerIcon from "./svgs/docker.svg";
import bunIcon from "./svgs/bun.svg";
import laravelIcon from "./svgs/laravel.svg";
import drizzleIcon from "./svgs/drizzle-orm_dark.svg";
import tanstackIcon from "./svgs/tanstack_light.svg";
import typescriptIcon from "./svgs/typescript (1).svg";
import phpIcon from "./svgs/php.svg";
import elysiaIcon from "./svgs/elysiajs.svg";
import tailwindIcon from "./svgs/tailwindcss.svg";
import gmailIcon from "./svgs/get_in_touch/gmail.svg";
import githubIcon from "./svgs/get_in_touch/github_light.svg";
import linkedinIcon from "./svgs/get_in_touch/linkedin.svg";
import discordIcon from "./svgs/get_in_touch/discord.svg";

export type WhoAmI = {
  key: string;
  value: string;
};

export type Skill = {
  name: string;
  icon: string;
  invert?: boolean;
};

export type SkillGroup = {
  label: string;
  skills: readonly Skill[];
};

export type Project = {
  name: string;
  /** one-line pitch */
  pitch: string;
  /** one sentence on something hard you solved / what you did yourself */
  highlight: string;
  /** e.g. "group project", "personal" */
  context: string;
  stack: readonly string[];
  github: string;
  live?: string;
  /** optional screenshot, import it like the svgs above */
  image?: string;
};

export type Contact = {
  kind: "link" | "copy";
  /** platform name, used for accessible labels */
  label: string;
  icon: string;
  invert?: boolean;
  value: string;
  href?: string;
};

export type Command = {
  name: string;
  description: string;
};

export const profile = {
  handle: "thomas",
  name: "Thomas Lucking",
  host: "thomas",

  whoami: [
    { key: "role", value: "Apprentice Developer (CFC, 2nd year)" },
    { key: "base", value: "Leysin, Switzerland" },
    { key: "focus", value: "Laravel · TypeScript" },
    { key: "lang", value: "English (native) · French (fluent)" },
  ] satisfies WhoAmI[],

  bio: "I'm a second-year apprentice building full-stack web apps with Laravel and TypeScript, from project trackers and ticketing systems to a local RAG pipeline. Right now I'm going deeper on Laravel: queues, scheduled jobs and PostgreSQL-backed features like pgvector search.",

  // Drop the PDF at public/cv.pdf — it is copied to the site root on build.
  cv: {
    label: "Download CV",
    href: "cv.pdf",
    fileName: "Thomas-Lucking-CV.pdf",
  },

  projects: [
    {
      name: "Project Tracker",
      pitch:
        "Laravel app where users propose, validate and attach resources to projects.",
      highlight:
        "Scheduled Artisan commands email leaders when a project goes stale: a Monday reminder, then a Wednesday warning to the whole team.",
      context: "group project",
      stack: ["Laravel", "PHP", "Blade", "PostgreSQL", "Docker"],
      github: "https://github.com/jobtrek/laravel-group-project",
    },
    {
      name: "IT Ticket App",
      pitch:
        "Full-stack TypeScript app to create, assign and discuss IT support tickets.",
      highlight:
        "Real-time comments pushed over Bun's native WebSockets, with auth- and admin-guarded route trees in TanStack Router.",
      context: "group project",
      stack: ["Bun", "React", "TanStack Router", "Drizzle ORM", "PostgreSQL"],
      github: "https://github.com/jobtrek/app-tickets-group-1",
    },
    {
      name: "Apprentice Cursus",
      pitch:
        "Grade tracking and training-file tool for apprentices, trainers and coaches.",
      highlight:
        "Apprentices drop a test PDF and their trainers and coaches are notified automatically, replacing a manual email workflow.",
      context: "group project · in progress",
      stack: ["Laravel", "Vue", "Inertia", "TypeScript", "PostgreSQL"],
      github: "https://github.com/jobtrek/apprentice-cursus",
    },
    {
      name: "RAG Laravel",
      pitch:
        "Retrieval-augmented generation running fully locally with Laravel, pgvector and Ollama.",
      highlight:
        "Stores 768-dimension embeddings in pgvector and answers with a local llama3.2:3b model in about 650 ms.",
      context: "personal",
      stack: ["Laravel", "PostgreSQL", "pgvector", "Ollama", "Docker"],
      github: "https://github.com/ThomasLucking/RAG-Laravel",
    },
  ] satisfies Project[],

  skillGroups: [
    {
      label: "Languages",
      skills: [
        { name: "TypeScript", icon: typescriptIcon },
        { name: "PHP", icon: phpIcon },
      ],
    },
    {
      label: "Frameworks",
      skills: [
        { name: "Laravel", icon: laravelIcon },
        { name: "React", icon: reactIcon },
        { name: "TanStack Router", icon: tanstackIcon, invert: true },
        { name: "Vue", icon: vueIcon },
        { name: "Elysia", icon: elysiaIcon },
        { name: "Tailwind CSS", icon: tailwindIcon },
      ],
    },
    {
      label: "Data",
      skills: [
        { name: "PostgreSQL", icon: postgresIcon },
        { name: "Drizzle ORM", icon: drizzleIcon },
      ],
    },
    {
      label: "Tooling",
      skills: [
        { name: "Bun", icon: bunIcon },
        { name: "Docker", icon: dockerIcon },
      ],
    },
  ] satisfies SkillGroup[],

  contacts: [
    {
      kind: "link",
      label: "Email",
      icon: gmailIcon,
      value: "telucking@gmail.com",
      href: "mailto:telucking@gmail.com",
    },
    {
      kind: "link",
      label: "GitHub",
      icon: githubIcon,
      invert: true,
      value: "github.com/ThomasLucking",
      href: "https://github.com/ThomasLucking",
    },
    {
      kind: "link",
      label: "LinkedIn",
      icon: linkedinIcon,
      value: "linkedin.com/in/thomas-lucking-55a20a341",
      href: "https://www.linkedin.com/in/thomas-lucking-55a20a341/",
    },
    {
      kind: "copy",
      label: "Discord",
      icon: discordIcon,
      value: "ThomasLucking",
    },
  ] satisfies Contact[],

  // Commands understood by the interactive terminal.
  commands: [
    { name: "help", description: "list available commands" },
    { name: "whoami", description: "print my profile" },
    { name: "projects", description: "things I've built" },
    { name: "skills", description: "what I work with" },
    { name: "contact", description: "how to reach me" },
    { name: "cv", description: "download my CV" },
    { name: "clear", description: "clear the terminal" },
  ] satisfies Command[],

  footer: "built with Bun + React",
} as const;

export type Profile = typeof profile;
