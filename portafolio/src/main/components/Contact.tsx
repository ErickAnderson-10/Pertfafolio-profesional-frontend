import { Mail, ContactRound, GitBranch, Check, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

export const Contact = () => {
  const [sent, setSent] = useState(false);
  return (
    <section
      id="contacto"
      className="border-t border-white/5 bg-[#0e1118] py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="05 / Contacto"
            title="¿Hablamos?"
            copy="Estoy abierto a oportunidades laborales, prácticas y proyectos freelance donde pueda aportar valor."
          />
          <div className="space-y-4 text-sm">
            <a
              href="mailto:erickanderson130@gmail.com"
              className="flex items-center gap-3 text-slate-400 hover:text-white"
            >
              <Mail size={17} className="text-indigo-400" />
              erickanderson130@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/erick-anderson-dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-400 hover:text-white"
            >
              <ContactRound size={17} className="text-indigo-400" />
              linkedin.com/in/erick-anderson-dev
            </a>
            <a
              href="https://github.com/ErickAnderson-10"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-400 hover:text-white"
            >
              <GitBranch size={17} className="text-indigo-400" />
              github.com/ErickAnderson-10
            </a>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-5 rounded-2xl border border-white/10 bg-[#11151e] p-6 sm:p-8"
        >
          <label className="block text-sm text-slate-300">
            Nombre
            <input
              required
              name="name"
              className="mt-2 w-full rounded-lg border border-white/10 bg-white/[.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
              placeholder="Tu nombre"
            />
          </label>
          <label className="block text-sm text-slate-300">
            Correo
            <input
              required
              type="email"
              name="email"
              className="mt-2 w-full rounded-lg border border-white/10 bg-white/[.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
              placeholder="tu@correo.com"
            />
          </label>
          <label className="block text-sm text-slate-300">
            Mensaje
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/[.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </label>
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
            type="submit"
          >
            {sent ? (
              <>
                <Check size={16} />
                Mensaje preparado
              </>
            ) : (
              <>
                <Send size={16} />
                Enviar mensaje
              </>
            )}
          </button>
          {sent && (
            <p className="text-xs text-emerald-400">Gracias por tu mensaje</p>
          )}
        </form>
      </div>
    </section>
  );
};
