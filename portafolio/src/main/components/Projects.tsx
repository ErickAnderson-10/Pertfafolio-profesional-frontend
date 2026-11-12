import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import { projects } from "../../data/main";
import { SectionHeading } from "./SectionHeading";

export const Projects = () => {
  return (
    <section id="proyectos" className="py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="02 / Proyectos"
          title="Lo que he construido."
          copy="Una selección de proyectos donde el diseño, la lógica y los datos trabajan juntos."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-2xl border border-white/10 bg-[#11151e] transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 ${project.featured ? "md:col-span-1" : ""}`}
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={`Captura del proyecto ${project.title}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Degradado para mejorar la transición visual */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#11151e]/70 to-transparent" />

                {/* Nombre del proyecto */}
                <div className="absolute bottom-4 left-5 font-mono text-xs text-white/80">
                  /projects/{project.title.toLowerCase().replaceAll(" ", "-")}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.demo && (
                      <a
                        aria-label={`Ver demo de ${project.title}`}
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-indigo-400"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                    <a
                      aria-label={`Ver código de ${project.title}`}
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-indigo-400"
                    >
                      <GitBranch size={17} />
                    </a>
                  </div>
                </div>
                <p className="mt-3 min-h-20 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4 text-sm">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-indigo-400 hover:text-indigo-300"
                    >
                      Demo <ArrowUpRight className="ml-1 inline" size={14} />
                    </a>
                  )}
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white"
                  >
                    Código <ArrowUpRight className="ml-1 inline" size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Las demos están en hosting gratuito y pueden tardar unos segundos en
          cargar.
        </p>
      </div>
    </section>
  );
};
