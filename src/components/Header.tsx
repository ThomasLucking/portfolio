import { profile } from "@/data";

export function Header() {
  return (
    <header className="mb-10">
      <p className="font-mono text-[13px] text-muted-foreground tracking-[0.04em] mb-1.5">
        ~/{profile.handle}
      </p>
      <h1 className="font-mono font-semibold text-[clamp(26px,6vw,38px)] tracking-[-0.02em]">
        {profile.name}
      </h1>
    </header>
  );
}

export default Header;
