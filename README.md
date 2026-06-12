# Bader Merheb — Portfolio

Single-page developer portfolio. React 19 + Vite 7 + TailwindCSS 4, fully static — no backend.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # serve the production build locally
```

## Editing content

**All text, links, projects, and skills live in [`src/data.js`](src/data.js).** You should
rarely need to touch the components.

- **Placeholders** look like `{{LIVE_DEMO_URL}}`, `{{GITHUB_REPO_URL}}`, `{{SCREENSHOT}}`.
  Any link left as a placeholder (or empty string) is **automatically hidden** on the site,
  and a placeholder screenshot renders a styled fallback tile — so the site never shows a
  broken button or image.
- **Screenshots:** drop image files into `public/screenshots/` (create the folder), then set
  e.g. `screenshot: "/screenshots/bewe.png"` on the project in `src/data.js`. 16:9 images
  (~1280×720) look best.
- **Theme:** colors and fonts are CSS variables at the top of [`src/index.css`](src/index.css).

## Placeholders to fill before going live

In `src/data.js`:

| Project | `live` | `github` |
| --- | --- | --- |
| Bewe Partners CRM | `{{LIVE_DEMO_URL}}` | ✅ already set |
| LikeMinded Mobile | `{{LIVE_DEMO_URL}}` (App Store / TestFlight / APK link) | ✅ already set |
| AI Automated CV Checker | `{{LIVE_DEMO_URL}}` (or leave to hide) | `{{GITHUB_REPO_URL}}` |
| LikeMinded — Web | `{{LIVE_DEMO_URL}}` | ✅ already set |
| Grab n Go | `{{LIVE_DEMO_URL}}` (or leave to hide) | `{{GITHUB_REPO_URL}}` |
| Forum Page | `{{LIVE_DEMO_URL}}` (or leave to hide) | `{{GITHUB_REPO_URL}}` |
| Smoke & Mirrors — Trivia Speakeasy | `{{LIVE_DEMO_URL}}` (or leave to hide) | ✅ already set |
| Volleyball Ranking System | `{{LIVE_DEMO_URL}}` (or leave to hide) | ✅ already set |
| Voice Chat | `{{LIVE_DEMO_URL}}` (or leave to hide) | ✅ already set |
| n8n Social Media Uploader | `{{LIVE_DEMO_URL}}` (or leave to hide) | ✅ already set |
| Mini Elden Ring | `{{LIVE_DEMO_URL}}` (or leave to hide) | ✅ already set |

Screenshots are optional — any project left as `{{SCREENSHOT}}` shows a styled monogram
tile instead, which is a deliberate design element, not a broken state.

**Note:** the downloadable CV at `public/BaderMerheb_CV.pdf` contains your phone number.
The site itself never shows it, but anyone can download the PDF — swap in a phone-free
version of the CV if you want to keep the number private.

## Deploy to Vercel (free)

### Option A — GitHub + Vercel dashboard (recommended)

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/badermerheb/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New → Project**,
   and import the repo.
3. Vercel auto-detects Vite — accept the defaults (build command `vite build`, output
   directory `dist`) and click **Deploy**.
4. Done. Every push to `main` redeploys automatically. Add a custom domain under
   **Project → Settings → Domains** if you have one.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```
