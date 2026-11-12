import { SectionHeading } from "./SectionHeading";

export const About = () => {
  return (
    <section
      id="sobre-mi"
      className="border-y border-white/5 bg-[#0e1118] py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <SectionHeading eyebrow="01 / Sobre mí" title="Código con intención." />
        <div className="space-y-5 text-lg leading-8 text-slate-400">
          <p>
            Soy estudiante de{" "}
            <strong className="font-medium text-slate-200">
              Ingeniería de Software
            </strong>{" "}
            , actualmente en el 7.º ciclo.
          </p>
          <p>
            Cuento con conocimientos en frontend, backend y bases de datos
            utilizando diferentes tecnologías.
          </p>
          <p>
            Busco proyectos y oportunidades para seguir creciendo como
            programador.
          </p>
        </div>
      </div>
    </section>
  );
};
