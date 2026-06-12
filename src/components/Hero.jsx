import { profile } from "../data.js";
import Reveal from "./Reveal.jsx";
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from "./Icons.jsx";

const iconLinks = [
  { href: profile.github, label: "GitHub", Icon: GitHubIcon, external: true },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon, external: true },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon, external: false },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Introduction">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability} · {profile.location}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="max-w-3xl font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name.split(" ")[0]}{" "}
            <span className="text-accent">{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            <strong className="font-semibold text-ink">{profile.role}.</strong>{" "}
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-4 font-mono text-sm text-muted">{profile.education}</p>
        </Reveal>

        <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
          >
            <DownloadIcon className="h-4 w-4" />
            Download CV
          </a>
          {iconLinks.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-3 text-sm font-medium text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-ink"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
