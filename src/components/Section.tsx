import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
};

export function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} className="mb-12 scroll-mt-6" aria-labelledby={`${id}-heading`}>
      <h2
        id={`${id}-heading`}
        className="font-mono text-[13px] text-muted-foreground tracking-[0.04em] mb-4 font-normal"
      >
        <span className="text-primary"># </span>
        {label}
      </h2>
      {children}
    </section>
  );
}

export default Section;
