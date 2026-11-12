import { Code2, Terminal, Database, Layers3 } from "lucide-react";

interface Props {
  label: string;
}

export const Icon = ({ label }: Props) =>
  label === "Frontend" ? (
    <Code2 size={17} />
  ) : label === "Backend" ? (
    <Terminal size={17} />
  ) : label === "Bases de datos" ? (
    <Database size={17} />
  ) : (
    <Layers3 size={17} />
  );
