import { profile } from "@/data";

export function Skills() {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 list-none m-0 p-0">
      {profile.skills.map((skill) => (
        <li
          key={skill.name}
          className="flex items-center gap-3 p-4 min-h-11 border border-border rounded-lg bg-card transition-colors duration-150 hover:border-primary/50 hover:bg-muted/50"
        >
          <img
            src={skill.icon}
            alt=""
            width={22}
            height={22}
            className={`size-[22px] shrink-0 object-contain${skill.invert ? " dark:invert" : ""}`}
          />
          <span className="font-mono text-[13.5px] truncate">{skill.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Skills;
