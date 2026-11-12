import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-7">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          Diseñado y desarrollado por Erick Anderson ·{" "}
          {new Date().getFullYear()}
        </p>
        <a
          href="#inicio"
          className="inline-flex items-center gap-2 hover:text-white"
        >
          Volver arriba <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
};
