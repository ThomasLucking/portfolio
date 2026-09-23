import { profile } from "@/data";

export function Footer() {
  return (
    <footer className="font-mono text-[13px] text-muted-foreground border-t border-border pt-5">
      © {new Date().getFullYear()} · {profile.footer}
    </footer>
  );
}

export default Footer;
