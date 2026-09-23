import { useEffect, useRef, useState } from "react";
import { profile } from "@/data";
import type { Contact } from "@/data";

const cardClass =
  "flex items-center gap-3 p-4 min-h-11 w-full border border-border rounded-lg bg-card text-card-foreground text-left no-underline transition-colors duration-150 hover:border-primary/60 hover:bg-muted/50 group";

const actionClass =
  "ml-auto shrink-0 w-[9ch] py-0.5 rounded border text-xs text-center transition-colors duration-150";
const actionIdle =
  "border-border text-muted-foreground group-hover:border-primary/60 group-hover:text-primary";
const actionDone = "border-chart-3 text-chart-3";

function Body({ contact }: { contact: Contact }) {
  return (
    <>
      <img
        src={contact.icon}
        alt=""
        width={20}
        height={20}
        className={`size-5 shrink-0 object-contain${contact.invert ? " dark:invert" : ""}`}
      />
      <span className="min-w-0 flex flex-col">
        <span className="text-xs text-muted-foreground">{contact.label}</span>
        <span className="text-[13px] truncate">{contact.value}</span>
      </span>
    </>
  );
}

function CopyCard({ contact }: { contact: Contact }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.value);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className={`${cardClass} cursor-pointer`}
        aria-label={`Copy ${contact.label} username ${contact.value}`}
      >
        <Body contact={contact} />
        <span aria-hidden="true" className={`${actionClass} ${copied ? actionDone : actionIdle}`}>
          {copied ? "copied!" : "copy"}
        </span>
      </button>
      <span className="sr-only" role="status">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </>
  );
}

function LinkCard({ contact }: { contact: Contact }) {
  const isHttp = contact.href?.startsWith("http");

  return (
    <a
      href={contact.href}
      target={isHttp ? "_blank" : undefined}
      rel={isHttp ? "noopener noreferrer" : undefined}
      className={cardClass}
      aria-label={`${contact.label}: ${contact.value}${isHttp ? " (opens in new tab)" : ""}`}
    >
      <Body contact={contact} />
      <span aria-hidden="true" className={`${actionClass} ${actionIdle}`}>
        {isHttp ? "open ↗" : "mail"}
      </span>
    </a>
  );
}

export function Contacts() {
  return (
    <ul className="grid grid-cols-1 min-[521px]:grid-cols-2 gap-2.5 list-none m-0 p-0">
      {profile.contacts.map((contact) => (
        <li key={contact.label} className="flex min-w-0">
          {contact.kind === "copy" ? (
            <CopyCard contact={contact} />
          ) : (
            <LinkCard contact={contact} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
