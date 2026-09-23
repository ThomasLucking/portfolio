import { profile } from "@/data";

export function Terminal() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden mb-10 shadow-xl">
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-border bg-muted/40">
        <span
          aria-hidden="true"
          className="w-2.5 h-2.5 rounded-full bg-destructive/60"
        />
        <span
          aria-hidden="true"
          className="w-2.5 h-2.5 rounded-full bg-chart-4/60"
        />
        <span
          aria-hidden="true"
          className="w-2.5 h-2.5 rounded-full bg-chart-3/60"
        />
        <span className="font-mono text-xs text-muted-foreground ml-2">
          guest@{profile.host} - zsh
        </span>
      </div>
      <div className="pt-[22px] px-5 pb-6 font-mono text-sm leading-[1.75]">
        <div>
          <span className="text-muted-foreground">
            <span className="text-primary">guest</span>@{profile.host}:~$
          </span>{" "}
          <span className="text-foreground">whoami</span>
        </div>
        <dl className="grid grid-cols-[96px_1fr] gap-x-4 gap-y-1 mt-4">
          {profile.whoami.map((item) => (
            <div className="contents" key={item.key}>
              <dt className="text-muted-foreground">{item.key}</dt>
              <dd className="m-0">{item.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4">
          <span className="text-muted-foreground">
            <span className="text-primary">guest</span>@{profile.host}:~$
          </span>
          <span
            aria-hidden="true"
            className="inline-block w-2 h-[15px] bg-primary ml-0.5 align-[-2px] animate-blink motion-reduce:animate-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
