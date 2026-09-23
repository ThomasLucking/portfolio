import { profile, type Service } from "@/data";

const services: readonly Service[] = profile.services;

export function Services() {
  return (
    <div className="wid-tree">
      <ul>
        <li>
          <details open>
            <summary>what-i-do/</summary>
            <ul>
              {services.map((group) => (
                <li key={group.name}>
                  <details open={group.open}>
                    <summary>{group.name}/</summary>
                    <ul>
                      {group.files.map((file) => (
                        <li key={file} className="file">{file}</li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}

export default Services;
