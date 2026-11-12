import { ArrowDown, ArrowUpRight } from "lucide-react";
import perfil from "../../assets/Perfil.jpg";
export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(99,102,241,.16),transparent_28%),radial-gradient(circle_at_10%_30%,rgba(14,165,233,.08),transparent_24%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1fr_340px] lg:items-center lg:px-8">
        <div>
          <div className="mb-7 flex items-center gap-2 text-sm text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
            Disponible para prácticas y empleos
          </div>
          <p className="mb-4 font-mono text-sm text-indigo-400">Hola, soy</p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-[-.05em] text-white sm:text-6xl lg:text-7xl">
            Erick Anderson
            <br />
            {/* <span className="text-slate-400">Cotito Rojas.</span> */}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Construyo interfaces web bien estructuradas con{" "}
            <span className="text-slate-200">React y TypeScript</span>,
            conectadas a APIs REST.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
            >
              Ver proyectos <ArrowDown size={16} />
            </a>
            <a
              href="#contacto"
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-indigo-400 hover:text-white"
            >
              Contactar
            </a>
            <a
              href="/cv-erick.pdf"
              className="rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:text-white"
            >
              Descargar CV <ArrowUpRight className="ml-1 inline" size={15} />
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[280px] lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-4 rounded-[2rem] border border-indigo-400/10" />
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-slate-900">
            <img
              src={perfil}
              alt="Fotografía de Erick Anderson"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-[#121620] px-4 py-3 font-mono text-xs text-slate-300 shadow-xl">
            <span className="text-emerald-400">&lt;/&gt;</span> frontend.dev
          </div>
        </div>
      </div>
    </section>
  );
};
