/* ---------------------------------------------------------------------------
   All site content lives here. Edit this file — not the components — to
   update text, links, projects, and skills.

   Placeholders look like {{THIS}}. Any link left as a placeholder (or empty)
   is automatically hidden on the site, and any screenshot left as a
   placeholder renders a styled fallback tile instead of a broken image.
--------------------------------------------------------------------------- */

export const profile = {
  name: "Bader Merheb",
  role: "Full-Stack & AI Automation Engineer",
  tagline:
    "I build full-stack products and the AI automation behind them — from multi-tenant web apps to RAG pipelines running in production.",
  location: "Kesserwan, Lebanon",
  availability: "Open to opportunities",
  education: "B.S. in Computer Science · Lebanese American University · Class of 2025",
  email: "badermerheb1@gmail.com",
  github: "https://github.com/badermerheb",
  linkedin: "https://www.linkedin.com/in/bader-merheb-3b135324a/",
  cvPath: `${import.meta.env.BASE_URL}BaderMerheb_CV.pdf`,
};

export const about = [
  `I'm a Computer Science graduate from the Lebanese American University
   (December 2025) with a focus on building things that actually ship.`,
  `At Murex, on the IS Dev-AI team — first as an intern, then part-time — I
   designed n8n automation workflows and worked on RAG and GraphRAG pipelines,
   handling document processing, embedding generation, indexing, and retrieval
   in a production environment.`,
  `Outside of work I've shipped full products end to end: a multi-tenant salon
   CRM, a personality-based dating platform on web and mobile, and an
   AI-powered CV screening pipeline.`,
  `I care about clean architecture, polished interfaces, and automation that
   quietly does the heavy lifting.`,
];

export const projects = [
  {
    name: "Bewe Partners CRM",
    featured: true,
    description: `A pixel-perfect, multi-tenant CRM that lets salons manage bookings,
      staff, services, and customers from one dashboard. Built with a React +
      TypeScript + TailwindCSS frontend and a FastAPI backend on Supabase
      (PostgreSQL), with row-level security keeping each tenant's data isolated.
      Includes a separate CMS admin portal for provisioning salons and owner
      accounts, deployed on Vercel and Render.`,
    stack: ["React", "TypeScript", "TailwindCSS", "FastAPI", "Supabase", "PostgreSQL"],
    live: "{{LIVE_DEMO_URL}}",
    github: "https://github.com/badermerheb/bewe",
    screenshot: "{{SCREENSHOT}}",
  },
  {
    name: "LikeMinded Mobile",
    featured: true,
    description: `The cross-platform iOS and Android app for LikeMinded, built with
      React Native and TypeScript on the shared FastAPI + Supabase backend.
      Ships with native Google and Apple sign-in, camera-based KYC identity
      verification, a chatbot-driven personality assessment, push notifications,
      and a real-time conversation system.`,
    stack: ["React Native", "TypeScript", "FastAPI", "Supabase", "iOS", "Android"],
    live: "{{LIVE_DEMO_URL}}",
    github: "https://github.com/badermerheb/likeminded-mobile",
    screenshot: "{{SCREENSHOT}}",
  },
  {
    name: "AI Automated CV Checker",
    featured: false,
    description: `An automation pipeline that ingests CV documents, preprocesses their
      content, and stores embeddings in a Qdrant vector database — all
      orchestrated with n8n. Retrieval pipelines match candidates against job
      requirements and feed the relevant context to a chatbot for
      candidate–role fit analysis.`,
    stack: ["n8n", "Qdrant", "RAG", "Embeddings"],
    live: "{{LIVE_DEMO_URL}}",
    github: "{{GITHUB_REPO_URL}}",
    screenshot: "{{SCREENSHOT}}",
  },
  {
    name: "LikeMinded — Web",
    featured: false,
    description: `A personality-driven dating platform that matches people on
      compatibility instead of appearance. Co-developed the React frontend and
      the FastAPI + Supabase backend, including the matching algorithm and a
      full conversation and chat system.`,
    stack: ["React", "FastAPI", "Supabase", "MySQL"],
    live: "{{LIVE_DEMO_URL}}",
    github: "https://github.com/badermerheb/likeminded-frontend",
    screenshot: "{{SCREENSHOT}}",
  },
  {
    name: "Grab n Go",
    featured: false,
    description: `A fully responsive restaurant website with an interactive menu, an
      admin page for managing content, and a user-friendly ordering experience.
      Built with PHP, Laravel, JavaScript, and MySQL.`,
    stack: ["PHP", "Laravel", "JavaScript", "MySQL", "HTML", "CSS"],
    live: "{{LIVE_DEMO_URL}}",
    github: "{{GITHUB_REPO_URL}}",
    screenshot: "{{SCREENSHOT}}",
  },
  {
    name: "Forum Page",
    featured: false,
    description: `A dynamic forum platform supporting threaded discussions with an
      intuitive UX and a scalable backend architecture, built on Laravel and
      PHP.`,
    stack: ["Laravel", "PHP", "HTML"],
    live: "{{LIVE_DEMO_URL}}",
    github: "{{GITHUB_REPO_URL}}",
    screenshot: "{{SCREENSHOT}}",
  },

  /* --- More from GitHub (not on the CV) --- */
  {
    name: "Smoke & Mirrors — Trivia Speakeasy",
    featured: false,
    description: `A real-time multiplayer trivia game with russian-roulette stakes,
      in-game abilities, ranked MMR matchmaking, and a jazz-bar aesthetic.
      React + TypeScript frontend with Socket.IO-powered live play, a Node +
      Express backend, and Supabase (Postgres) for profiles, MMR, and match
      history.`,
    stack: ["React", "TypeScript", "Socket.IO", "Node.js", "Express", "Supabase"],
    live: "{{LIVE_DEMO_URL}}",
    github: "https://github.com/badermerheb/trivia-game",
    screenshot: "{{SCREENSHOT}}",
  },
  {
    name: "Volleyball Ranking System",
    featured: false,
    description: `A full-stack TypeScript app for ranking volleyball players. React 19
      + Vite frontend styled with TailwindCSS, Radix UI, and Framer Motion,
      backed by a lightweight Node server.`,
    stack: ["React", "TypeScript", "Vite", "TailwindCSS", "Radix UI", "Node.js"],
    live: "{{LIVE_DEMO_URL}}",
    github: "https://github.com/badermerheb/volleyball-ranking-system",
    screenshot: "{{SCREENSHOT}}",
  },
  {
    name: "Voice Chat",
    featured: false,
    description: `A real-time voice chat app for the browser, built on WebRTC with an
      Express + Socket.IO signaling server and TURN-server integration for
      reliable peer-to-peer connections.`,
    stack: ["WebRTC", "Socket.IO", "Node.js", "Express", "JavaScript"],
    live: "{{LIVE_DEMO_URL}}",
    github: "https://github.com/badermerheb/voice-chat",
    screenshot: "{{SCREENSHOT}}",
  },
  {
    name: "n8n Social Media Uploader",
    featured: false,
    description: `An n8n automation workflow for publishing content to social media,
      including the hosted landing, privacy, and terms pages required for
      TikTok's developer API approval.`,
    stack: ["n8n", "TikTok API", "HTML"],
    live: "{{LIVE_DEMO_URL}}",
    github: "https://github.com/badermerheb/n8n-social-media-uploader",
    screenshot: "{{SCREENSHOT}}",
  },
  {
    name: "Mini Elden Ring",
    featured: false,
    description: `A miniature Elden Ring–inspired action game built in Unity, with
      gameplay programmed in C#.`,
    stack: ["Unity", "C#"],
    live: "{{LIVE_DEMO_URL}}",
    github: "https://github.com/badermerheb/MiniEldenRing",
    screenshot: "{{SCREENSHOT}}",
  },
];

export const skillGroups = [
  {
    label: "Languages & Frameworks",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "React",
      "React Native",
      "FastAPI",
      "PHP",
      "Laravel",
      "TailwindCSS",
      "HTML",
      "CSS",
    ],
  },
  {
    label: "Tools & Software",
    skills: [
      "n8n",
      "Supabase",
      "Qdrant",
      "Neo4j",
      "MongoDB",
      "MySQL",
      "GitHub",
      "Vercel",
      "Render",
    ],
  },
  {
    label: "Spoken Languages",
    skills: ["Arabic (native)", "English (fluent)", "French (fluent)"],
  },
];

/** True when a value is real content, not an unfilled {{PLACEHOLDER}}. */
export const isFilled = (value) => Boolean(value) && !/\{\{.*\}\}/.test(value);
