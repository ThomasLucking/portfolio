import { profile } from "@/data";

export function Intro() {
  return (
    <p className="text-base leading-[1.65] max-w-[54ch] mb-11">
      {profile.intro.before}
      <span className="block mt-1.5 font-medium italic">{profile.intro.after}</span>
    </p>
  );
}

export default Intro;
