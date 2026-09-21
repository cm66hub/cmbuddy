# CM Buddy — public marketing website (standalone project)

The public cmbuddy.pk marketing site. This is a **standalone** Next.js project at
`C:\web\cmbuddy-website` — it is NOT part of the `C:\web\whatsapp-saas` monorepo. The SaaS
dashboard lives separately (apps/web + apps/api in whatsapp-saas). Modeled on wetarseel.ai
pages but **similar, not exact**, always with CM Buddy branding — never reuse WeTarseel
assets or verbatim copy.

## Stack & commands
- Next.js 15 (App Router), React 19, TypeScript, plain CSS, `lucide-react` icons. No Tailwind.
- Dev: `pnpm dev` — runs on **port 3001** (from this folder; no `--filter` needed — standalone).
- Typecheck: `pnpm typecheck` (empty output = clean). Fix new errors before finishing.
- Verify completed pages: browse `http://localhost:3001/<route>` and expect 200.
- Env: `.env` (gitignored) holds `NEXT_PUBLIC_APP_URL`. A documented `.env.example` is committed.

## Existing routes
Landing, about, privacy, terms, coexistence, omnichannel, features, pricing, faq, contact,
data-deletion, use-cases/ecommerce, use-cases/healthcare, use-cases/education, robots.txt, sitemap.xml.
Home nav anchors: `/#features`, `/#pricing`, `/#industries`, `/#faq` (only work on the home page).

## Structure
- `app/page.tsx` = landing. `components/site/MarketingNav.tsx`, `MarketingFooter.tsx`,
  `components/ui/icons.tsx` are the shared chrome.
- Every page wraps content in `<div className="mkt">` and renders `MarketingNav` +
  `MarketingFooter`, so `--mkt-*` CSS variables (indentity on `.mkt`) are always available.
- `app/layout.tsx` has NO nav/footer — it is only fonts (Sora + Plus Jakarta), metadata
  (title template `%s | CM Buddy`, metadataBase `https://cmbuddy.pk`) and CSS imports.
- Fonts: Sora headings (`--font-sora`), Plus Jakarta body (`--font-jakarta`).

## Styling
- All marketing styles live in `app/globals.css` scoped under `.mkt-*` (also `.mkt-pill-new`,
  `.mkt-stat`, `.mkt-kp`, `.mkt-toc`, `.mkt-table`, `.mkt-mini-card`, `.mkt-post-*`, `.mkt-compare`, etc.).
- Legacy inner pages (features/pricing/faq/contact/data-deletion) still use `landing.css`
  classes (`site-hero`, `site-section`, `cards-grid`, `faq-page`, `contact-page`, `legal-page`)
  inside the `.mkt` wrapper.
- Article/use-case layout: `.mkt-post-hero .mkt-container` = 1140px, `.mkt-post-body` = 1080px,
  hero h1 = 40px. Use `.mkt-post-figure` (.inline), `.mkt-list-figure`, `.mkt-table-wrap` blocks.

## Images
- Use real photos hotlinked from `https://images.unsplash.com/photo-<id>` (plain `<img>`,
  no next/image config). Requires internet at render. Only use IDs previously verified to return 200.

## Links to the app
Nav/footer Log in / Start Free Trial point to the SaaS app via
`process.env.NEXT_PUBLIC_APP_URL` (set in `.env` = `http://localhost:8080` for dev).
Never hardcode linking marketing pages into the SaaS app.

## Brand rules
- Name: CM Buddy. Domain: cmbuddy.pk. Color: `--mkt-primary` = `#075e54`.
- Support email: `support@cmbuddy.pk` — NEVER `hello@cmbuddy.pk`.
- HQ Lahore, Pakistan. Pricing: Starter Rs 12,000/mo, Scale Rs 24,000/mo, Enterprise custom.
- Only use emojis if explicitly requested. Never add code comments unless asked.