import { skillGroups } from "../../data/main";
import { Icon } from "./Icon";

import { SectionHeading } from "./SectionHeading";

export const Skills = () => {
  return (
    <section
      id="habilidades"
      className="border-y border-white/5 bg-[#0e1118] py-24"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="03 / Habilidades"
          title="Mi caja de herramientas."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-white">
                <span className="text-indigo-400">
                  <Icon label={group.label} />
                </span>
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400 transition hover:border-indigo-400/50 hover:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
