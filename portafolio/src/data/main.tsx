import appSalon from "../assets/AppSalon.png";
import bienesRaices from "../assets/BienesRaices.png";
import heroesApp from "../assets/HeroApp.png";
import tesloShop from "../assets/TesloShop.png";

export type Project = {
  title: string;
  image: string;
  description: string;
  stack: string[];
  demo?: string;
  code: string;
  featured?: boolean;
  tone: string;
};

export type SkillGroup = { label: string; items: string[] };

export const projects: Project[] = [
  {
    title: "Teslo Shop",
    image: tesloShop,
    description:
      "E-commerce de ropa con catálogo, filtros por género, talla y precio, paginación, detalle de producto, autenticación y panel de administración.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Zustand",
      "NestJS",
      "PostgreSQL",
    ],
    demo: "https://teslo-api-frontend-3.netlify.app",
    code: "https://github.com/ErickAnderson-10/teslo-api-frontend-3",
    featured: true,
    tone: "from-indigo-500/20 via-slate-900 to-slate-950",
  },
  {
    title: "SuperHero Universe",
    image: heroesApp,
    description:
      "Explora y gestiona superhéroes y villanos con búsqueda, filtros avanzados, clasificación, estadísticas y poderes.",
    stack: [
      "React",
      "TypeScript",
      "React Router",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
    ],
    demo: "https://resplendent-biscochitos-3286c2.netlify.app",
    code: "https://github.com/ErickAnderson-10/Heroes-app",
    featured: true,
    tone: "from-cyan-500/20 via-slate-900 to-slate-950",
  },
  {
    title: "AppSalon",
    image: appSalon,
    description:
      "Aplicación de gestión de salón de belleza con servicios, citas, usuarios, autenticación con confirmación por correo y recuperación de contraseña.",
    stack: ["PHP MVC", "MySQL", "Sass", "JavaScript", "Gulp"],
    code: "https://github.com/ErickAnderson-10/App-Salon-MVC",
    tone: "from-amber-500/20 via-slate-900 to-slate-950",
  },
  {
    title: "Bienes Raíces MVC",
    image: bienesRaices,
    description:
      "Aplicación inmobiliaria con autenticación, rutas protegidas y CRUD de propiedades y vendedores.",
    stack: ["PHP POO", "MVC", "MySQL", "SCSS", "JavaScript"],
    code: "https://github.com/ErickAnderson-10/Bienes-Ra-ces-MVC-PHP",
    tone: "from-emerald-500/20 via-slate-900 to-slate-950",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS/Sass",
    ],
  },
  { label: "Backend", items: ["NestJS", "PHP", "REST API", "Spring Boot"] },
  { label: "Bases de datos", items: ["PostgreSQL", "MySQL"] },
  {
    label: "Herramientas",
    items: ["Git", "GitHub", "Docker", "Postman"],
  },
];

export const education = [
  // {
  //   date: "2024 — actualidad",
  //   title: "Ingeniería de Software",
  //   place: "Universidad Tecnológica del Perú · 7.º ciclo",
  //   detail: "Lima, Perú",
  // },
  // {
  //   date: "Formación complementaria",
  //   title: "React: De cero a experto",
  //   place: "Udemy · 46 h",
  //   detail: "Interfaces modernas y mantenibles",
  // },
  // {
  //   date: "Formación complementaria",
  //   title: "Nest: Desarrollo backend escalable con Node",
  //   place: "Udemy",
  //   detail: "APIs REST y arquitectura backend",
  // },
  {
    // date: "Idiomas",
    title: "Inglés intermedio",
    place: "ICPNA",
    detail: "Comunicación técnica y profesional",
  },
];
