import { Menu, Moon, Sun, X } from "lucide-react";

export function Navbar({
  dark,
  setDark,
  mobileOpen,
  setMobileOpen,
}: {
  dark: boolean;
  setDark: (v: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  const links = [
    ["Sobre mí", "#sobre-mi"],
    ["Proyectos", "#proyectos"],
    ["Habilidades", "#habilidades"],
    ["Formación", "#formacion"],
    ["Contacto", "#contacto"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0d12]/80 backdrop-blur-xl dark:bg-[#0b0d12]/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight"
        >
          <span className="text-indigo-400">EA</span>
          <span className="text-slate-400">/</span>
          <span>portfolio</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {label}
            </a>
          ))}
          <button
            aria-label="Cambiar tema"
            onClick={() => setDark(!dark)}
            className="rounded-lg border border-white/10 p-2 text-slate-400 hover:text-white"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
        <button
          className="rounded-lg border border-white/10 p-2 md:hidden"
          aria-label="Abrir menú"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-[#0b0d12] px-5 py-4 md:hidden">
          {links.map(([label, href]) => (
            <a
              onClick={() => setMobileOpen(false)}
              key={href}
              href={href}
              className="block py-3 text-sm text-slate-300"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
