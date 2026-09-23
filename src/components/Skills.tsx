import { profile } from "@/data";

export function Skills() {
  return (
    <dl className="grid gap-4 m-0">
      {profile.skillGroups.map((group) => (
        <div
          key={group.label}
          className="grid gap-2 min-[521px]:grid-cols-[110px_1fr] min-[521px]:items-start"
        >
          <dt className="text-[13px] text-muted-foreground min-[521px]:pt-1.5">
            {group.label}
          </dt>
          <dd className="m-0">
            <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1.5 border border-border rounded-md bg-card"
                >
                  <img
                    src={skill.icon}
                    alt=""
                    width={16}
                    height={16}
                    className={`size-4 shrink-0 object-contain${skill.invert ? " dark:invert" : ""}`}
                  />
                  <span className="text-[13px]">{skill.name}</span>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default Skills;
