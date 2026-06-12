import { useState } from "react";
import useTheme from "../hooks/useTheme.js";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./Icons.jsx";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6" aria-label="Main">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight transition-colors hover:text-accent"
        >
          bader<span className="text-accent">.</span>merheb
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-md p-2.5 text-muted transition-colors hover:bg-surface-2 hover:text-ink"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-md p-2.5 text-muted transition-colors hover:bg-surface-2 hover:text-ink md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line px-6 py-3 md:hidden">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
