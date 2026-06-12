import { about } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading number="01" title="About" />
        <Reveal>
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {about.map((sentence, i) => (
              <p key={i} className={i === 0 ? "text-ink" : undefined}>
                {sentence}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
