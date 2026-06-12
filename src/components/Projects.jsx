import { projects } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-surface-2/50">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading number="02" title="Projects" />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={(i % 2) * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
