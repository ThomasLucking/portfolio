import { profile } from "@/data";

export function Footer() {
  return (
    <footer className="font-mono text-xs text-muted-foreground border-t border-border pt-5">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}

export default Footer;
