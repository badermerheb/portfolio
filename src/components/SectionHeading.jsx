import Reveal from "./Reveal.jsx";

export default function SectionHeading({ number, title }) {
  return (
    <Reveal className="mb-12 flex items-center gap-4">
      <span className="font-mono text-sm text-accent" aria-hidden="true">
        {number}
      </span>
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </Reveal>
  );
}
