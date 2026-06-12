import { isFilled } from "../data.js";
import Reveal from "./Reveal.jsx";
import { GitHubIcon, ArrowUpRightIcon } from "./Icons.jsx";

/** "Bewe Partners CRM" -> "BP" — used by the screenshot fallback tile. */
const initials = (name) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

export default function ProjectCard({ project, delay = 0 }) {
  const { name, description, stack, live, github, screenshot, featured } = project;
  const hasLive = isFilled(live);
  const hasGithub = isFilled(github);
  const hasScreenshot = isFilled(screenshot);

  return (
    <Reveal
      as="article"
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
    >
      {/* Screenshot — or a styled fallback tile until one is added */}
      <div className="relative aspect-video overflow-hidden border-b border-line bg-surface-2">
        {hasScreenshot ? (
          <img
            src={screenshot}
            alt={`Screenshot of ${name}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="bg-dots flex h-full w-full items-center justify-center">
            <span className="font-display text-5xl font-bold text-accent/50 transition-colors duration-300 group-hover:text-accent/80">
              {initials(name)}
            </span>
          </div>
        )}
        {featured && (
          <span className="absolute top-3 left-3 rounded-full border border-accent/30 bg-bg/85 px-2.5 py-1 font-mono text-[11px] text-accent backdrop-blur-sm">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight">{name}</h3>

        <p className="flex-1 text-sm leading-relaxed text-muted">{description}</p>

        <ul className="flex flex-wrap gap-2" aria-label={`Tech stack for ${name}`}>
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(hasLive || hasGithub) && (
          <div className="mt-1 flex flex-wrap gap-3 border-t border-line pt-4">
            {hasLive && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-xs font-semibold text-bg transition-transform hover:-translate-y-0.5"
              >
                Live Demo
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            )}
            {hasGithub && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3.5 py-2 text-xs font-medium text-muted transition-colors hover:border-accent/50 hover:text-ink"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}
