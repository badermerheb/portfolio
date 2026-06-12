import { profile } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons.jsx";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-surface-2/50">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading number="04" title="Contact" />
        <Reveal className="max-w-2xl">
          <p className="text-lg leading-relaxed text-muted">
            I'm currently open to full-time roles and interesting projects. If you're
            building something worth building — or just want to talk full-stack or AI
            automation — my inbox is always open.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-8 inline-flex items-center gap-3 font-display text-xl font-semibold tracking-tight transition-colors hover:text-accent sm:text-2xl"
          >
            <MailIcon className="h-6 w-6 text-accent" />
            {profile.email}
            <span
              className="block h-px max-w-0 bg-accent transition-all duration-300 group-hover:max-w-12"
              aria-hidden="true"
            />
          </a>

          <div className="mt-8 flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg border border-line bg-surface p-3 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-ink"
            >
              <GitHubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-lg border border-line bg-surface p-3 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-ink"
            >
              <LinkedInIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
