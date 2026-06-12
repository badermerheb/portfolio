import { skillGroups } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading number="03" title="Skills" />
        <div className="space-y-10">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 90}>
              <h3 className="mb-4 font-mono text-xs tracking-widest text-muted uppercase">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
