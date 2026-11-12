import { education } from "../../data/main";
import { SectionHeading } from "./SectionHeading";

export const Education = () => {
  return (
    <section id="formacion" className="py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="04 / Idiomas" title="Siempre aprendiendo." />
        <div className="relative ml-2 border-l border-white/10 pl-8">
          {education.map((item) => (
            <div key={item.title} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[2.15rem] top-1 h-3 w-3 rounded-full border-2 border-indigo-400 bg-[#0b0d12]" />
              {/* <p className="mb-2 font-mono text-xs text-indigo-400">
                {item.date}
              </p> */}
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.place}</p>
              <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
