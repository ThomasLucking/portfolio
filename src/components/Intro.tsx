import { Download } from "lucide-react";
import { profile } from "@/data";

export function Intro() {
  return (
    <div className="mb-12">
      <p className="text-[15px] leading-[1.75] max-w-[60ch] mb-5">{profile.bio}</p>
      <a
        href={profile.cv.href}
        download={profile.cv.fileName}
        className="inline-flex items-center gap-2 min-h-11 px-4 border border-primary/60 rounded-lg text-sm text-primary no-underline transition-colors duration-150 hover:bg-primary hover:text-primary-foreground"
      >
        <Download aria-hidden="true" className="size-4" />
        {profile.cv.label}
      </a>
    </div>
  );
}

export default Intro;
