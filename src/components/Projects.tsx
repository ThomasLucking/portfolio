import { ArrowUpRight } from "lucide-react";
import { profile, type Project } from "@/data";

const linkClass =
  "inline-flex items-center gap-1 min-h-11 text-[13px] text-primary underline-offset-4 hover:underline";

function ProjectCard({ project }: { project: Project }) {
  return (
    // Subgrid rows keep header / pitch / highlight / stack / links aligned across cards in a row.
    <article className="row-span-5 grid grid-rows-subgrid gap-3 p-5 border border-border rounded-lg bg-card">
      <header className="grid gap-3 content-start">
        {project.image && (
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            className="w-full rounded-md border border-border"
          />
        )}
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="text-[15px] font-semibold">{project.name}</h3>
          <span className="text-xs text-muted-foreground">{project.context}</span>
        </div>
      </header>
      <p className="text-sm leading-[1.65]">{project.pitch}</p>
      <p className="text-[13px] leading-[1.65] text-muted-foreground">
        <span className="text-accent">→ </span>
        {project.highlight}
      </p>
      <ul className="flex flex-wrap content-start gap-1.5 list-none m-0 p-0" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="px-2 py-0.5 rounded border border-border bg-muted text-xs"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex gap-5 -mb-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={`${project.name} source code on GitHub (opens in new tab)`}
        >
          github <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            aria-label={`${project.name} live demo (opens in new tab)`}
          >
            live <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <ul className="grid grid-cols-1 min-[640px]:grid-cols-2 gap-3 list-none m-0 p-0">
      {profile.projects.map((project) => (
        <li key={project.name} className="row-span-5 grid grid-rows-subgrid">
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}

export default Projects;
