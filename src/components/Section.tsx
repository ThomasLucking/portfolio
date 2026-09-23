import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
};

export function Section({ id, label, children }: SectionProps) {
  return (
    <section className="mb-11" aria-labelledby={id}>
      <h2
        id={id}
        className="font-mono text-xs text-muted-foreground tracking-[0.06em] mb-4 font-normal"
      >
        <span className="text-primary/60"># </span>
        {label}
      </h2>
      {children}
    </section>
  );
}

export default Section;
