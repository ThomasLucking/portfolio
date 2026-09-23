import { useState } from "react";
import { profile } from "@/data";
import type { Contact } from "@/data";

const cardClass =
  "flex items-center gap-3 p-4 min-h-11 w-full border border-border rounded-lg bg-card text-card-foreground text-left no-underline cursor-pointer transition-colors duration-150 hover:border-primary/50 hover:bg-muted/50 group";

function ContactCard({ contact }: { contact: Contact }) {
  const [copied, setCopied] = useState(false);

  if (contact.kind === "copy") {
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(contact.value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch {}
    };

    return (
      <button
        type="button"
        onClick={handleCopy}
        className={cardClass}
        aria-label={`Copy ${contact.value}`}
      >
        <img
          src={contact.icon}
          alt=""
          width={20}
          height={20}
          className={`size-5 shrink-0 object-contain${contact.invert ? " dark:invert" : ""}`}
        />
        <div className="min-w-0 whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="font-mono text-[13.5px]">{contact.value}</span>
        </div>
        <span className="ml-auto pl-2 font-mono text-[11px] text-muted-foreground group-hover:text-primary">
          {copied ? "copied" : "copy"}
        </span>
      </button>
    );
  }

  const isHttp = contact.href?.startsWith("http");

  return (
    <a
      href={contact.href}
      target={isHttp ? "_blank" : undefined}
      rel={isHttp ? "noopener noreferrer" : undefined}
      className={cardClass}
    >
      <img
        src={contact.icon}
        alt=""
        width={20}
        height={20}
        className={`size-5 shrink-0 object-contain${contact.invert ? " dark:invert" : ""}`}
      />
      <div className="min-w-0 whitespace-nowrap overflow-hidden text-ellipsis">
        <span className="font-mono text-[13.5px]">{contact.value}</span>
      </div>
    </a>
  );
}

export function Contacts() {
  return (
    <ul className="grid grid-cols-1 min-[521px]:grid-cols-2 gap-2.5 list-none m-0 p-0">
      {profile.contacts.map((contact) => (
        <li key={contact.value} className="contents">
          <ContactCard contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
