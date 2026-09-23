import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent, type ReactNode } from "react";
import { profile } from "@/data";

type Entry = {
  id: number;
  command: string;
  output: ReactNode;
};

const commandNames: readonly string[] = profile.commands.map((c) => c.name);
const quickCommands = ["help", "projects", "contact", "cv"];

const linkClass = "text-primary underline-offset-4 hover:underline";

function Prompt() {
  return (
    <span className="text-muted-foreground shrink-0">
      <span className="text-primary">guest</span>@{profile.host}:~$
    </span>
  );
}

function KeyValue({ rows }: { rows: readonly { key: string; value: ReactNode }[] }) {
  return (
    <dl className="grid grid-cols-[72px_1fr] sm:grid-cols-[96px_1fr] gap-x-4 gap-y-1 m-0">
      {rows.map((row) => (
        <div className="contents" key={row.key}>
          <dt className="text-muted-foreground">{row.key}</dt>
          <dd className="m-0 min-w-0 break-words">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function downloadCv() {
  const a = document.createElement("a");
  a.href = profile.cv.href;
  a.download = profile.cv.fileName;
  a.click();
}

function run(command: string): ReactNode | "clear" {
  switch (command) {
    case "":
      return null;
    case "help":
      return (
        <KeyValue
          rows={profile.commands.map((c) => ({ key: c.name, value: c.description }))}
        />
      );
    case "whoami":
      return <KeyValue rows={profile.whoami} />;
    case "projects":
      return (
        <div className="grid gap-1">
          <KeyValue
            rows={profile.projects.map((p, i) => ({
              key: String(i + 1).padStart(2, "0"),
              value: (
                <>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {p.name}
                  </a>{" "}
                  <span className="text-muted-foreground">— {p.pitch}</span>
                </>
              ),
            }))}
          />
          <a href="#projects" className={`${linkClass} w-fit`}>
            ↓ details below
          </a>
        </div>
      );
    case "skills":
      return (
        <KeyValue
          rows={profile.skillGroups.map((g) => ({
            key: g.label.toLowerCase(),
            value: g.skills.map((s) => s.name).join(" · "),
          }))}
        />
      );
    case "contact":
      return (
        <KeyValue
          rows={profile.contacts.map((c) => ({
            key: c.label.toLowerCase(),
            value: c.href ? (
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={linkClass}
              >
                {c.value}
              </a>
            ) : (
              c.value
            ),
          }))}
        />
      );
    case "cv":
      downloadCv();
      return (
        <span>
          downloading{" "}
          <a href={profile.cv.href} download={profile.cv.fileName} className={linkClass}>
            {profile.cv.fileName}
          </a>
          …
        </span>
      );
    case "clear":
      return "clear";
    default:
      return (
        <span>
          zsh: command not found: {command}. try <span className="text-primary">help</span>
        </span>
      );
  }
}

export function Terminal() {
  const [entries, setEntries] = useState<Entry[]>([
    { id: 0, command: "whoami", output: run("whoami") },
  ]);
  const [input, setInput] = useState("");
  const history = useRef<string[]>([]);
  const historyIndex = useRef(-1);
  const nextId = useRef(1);
  const interacted = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el && interacted.current) el.scrollTop = el.scrollHeight;
  }, [entries]);

  const execute = (raw: string) => {
    const command = raw.trim().toLowerCase();
    interacted.current = true;
    if (command) history.current.unshift(command);
    historyIndex.current = -1;
    setInput("");

    const output = run(command);
    if (output === "clear") {
      setEntries([]);
      return;
    }
    setEntries((prev) => [...prev, { id: nextId.current++, command, output }]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    execute(input);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      const max = history.current.length - 1;
      const next =
        e.key === "ArrowUp"
          ? Math.min(historyIndex.current + 1, max)
          : Math.max(historyIndex.current - 1, -1);
      historyIndex.current = next;
      setInput(next === -1 ? "" : history.current[next]!);
    } else if (e.key === "Tab" && input) {
      const match = commandNames.find((name) => name.startsWith(input.toLowerCase()));
      if (match) {
        e.preventDefault();
        setInput(match);
      }
    }
  };

  const focusInput = () => {
    if (!window.getSelection()?.toString()) inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className="mb-10">
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-xl focus-within:border-primary/60">
        <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-border bg-muted/40">
          <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-chart-4/60" />
          <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-chart-3/60" />
          <span className="text-xs text-muted-foreground ml-2">guest@{profile.host} - zsh</span>
        </div>
        <div
          ref={scrollRef}
          onClick={focusInput}
          className="max-h-[420px] overflow-y-auto pt-5 px-4 sm:px-5 pb-5 text-[13px] sm:text-sm leading-[1.75]"
        >
          <div role="log" aria-live="polite" aria-label="Terminal output" className="grid gap-4">
            {entries.map((entry) => (
              <div key={entry.id}>
                <div className="flex flex-wrap gap-x-2">
                  <Prompt />
                  <span>{entry.command}</span>
                </div>
                {entry.output && <div className="mt-2">{entry.output}</div>}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className={`flex gap-2 ${entries.length ? "mt-4" : ""}`}>
            <label htmlFor="terminal-input" className="contents">
              <Prompt />
              <span className="sr-only">Terminal command, type help to list commands</span>
            </label>
            <input
              ref={inputRef}
              id="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="send"
              placeholder="type help"
              className="flex-1 min-w-0 bg-transparent border-0 p-0 text-base sm:text-sm text-foreground caret-primary placeholder:text-muted-foreground focus:outline-none"
            />
          </form>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-muted-foreground">
        <span>try:</span>
        {quickCommands.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => execute(name)}
            className="min-h-8 px-2.5 rounded border border-border bg-card text-foreground cursor-pointer transition-colors duration-150 hover:border-primary/60 hover:text-primary"
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Terminal;
