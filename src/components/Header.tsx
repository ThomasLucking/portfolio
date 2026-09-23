import { profile } from "@/data";

export function Header() {
  return (
    <header className="mb-12">
      <p className="font-mono text-[13px] text-muted-foreground tracking-[0.08em] uppercase mb-1.5">
        ~/{profile.handle}
      </p>
      <h1 className="font-mono font-semibold text-[clamp(28px,5vw,38px)] tracking-[-0.02em]">
        {profile.name} <span className="text-muted-foreground font-normal">// {profile.tagline}</span>
      </h1>
    </header>
  );
}

export default Header;
