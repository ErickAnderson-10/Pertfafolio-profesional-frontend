interface Props {
  eyebrow: string;
  title: string;
  copy?: string;
}

export const SectionHeading = ({ eyebrow, title, copy }: Props) => {
  return (
    <div className="mb-12">
      <p className="mb-3 font-mono text-xs uppercase tracking-[.2em] text-indigo-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">{copy}</p>
      )}
    </div>
  );
};
