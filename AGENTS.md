## Learned User Preferences

- Prefers updating existing files over creating new ones unless explicitly asked for a new file.
- Wants large/disruptive changes (e.g., framework upgrades) done on a separate branch rather than the current working branch.
- Maintains a per-session changelog at `sam-changelog.markdown`; update it as part of substantive work.
- Wants the marketing site to feel hand-crafted and distinctive (bold typography, asymmetry, scroll/micro-interactions); avoid generic AI-template aesthetics.
- Communicates terse, action-oriented requests; proceed with sensible defaults instead of asking many clarifying questions.
- Frequently invokes `/frontend-design` and `/ui-ux-pro-max` skills for visual/UX work — read and follow them when triggered.
- Gate experimental/alternative UX behind a `DEV_MODE`-style env flag so it never ships to production by default.
- Do NOT defer Cabinet Grotesk or substitute Arial/`Cabinet Grotesk Fallback` — load via blocking `@import` at the top of `app/globals.css` (original setup).
- Until pricing is finalized, omit specific fee/Pro dollar amounts (e.g. 1.5%, $199); lead payments/pricing copy with value and benefits, not bare fee language.
- On real phones, `/demo` must hide the iPhone SVG bezel (no phone-in-phone) while keeping demo shell dimensions and `cqw` typography unchanged.

## Learned Workspace Facts

- Project is the Tabby marketing site; Tabby is a bill-splitting iOS/Android app (scan receipt, claim items, escrow payments, virtual card tap-to-pay).
- Tabby is pre-launch: expected Q4 2026 launch on iOS + Android simultaneously, US-only at launch; closed beta with public waitlist on the site.
- Tabby (this project) is NOT affiliated with the Middle East BNPL company of the same name — the help agent must clarify if asked.
- Stack: Next.js 16 (App Router), React 19, Tailwind 4, framer-motion v12 using the `motion` import; package manager is pnpm (`pnpm-lock.yaml`).
- Root GitHub repo is `https://github.com/Chisick-Enterprises/tabby-landing`; production domain is `splittabby.com` (NOT `gettabby.app`); Vercel project is `tabby-site` under team `tabby-app` (project id `prj_EgDt8usZZeV5VpfKzMmgqv2bWTVT`) — confirm `.vercel/project.json` before `vercel env`/`vercel --prod`.
- PostHog proxy: client init in `components/PostHogProvider.tsx`; events route through same-origin `/ingest/*` rewrites in `next.config.mjs` to `us.i.posthog.com`. Do NOT set `NEXT_PUBLIC_POSTHOG_HOST` in prod — it bypasses the proxy and (if pointed at `us.posthog.com`) breaks ingestion.
- Primary branch is `main`; prepare changes to merge there unless told otherwise.
- Help-agent chatbot in `components/HelpAgent.tsx` (Tabby mascot launcher); chat API in `app/api/chat/route.ts`; system prompt in `lib/agent-prompt.ts`; scope-locked to Tabby topics; backend uses Vercel AI Gateway model `openai/gpt-oss-120b` via the `ai` SDK; API key in gitignored `.env*` / Vercel env.
- Vercel BotID protects POST `/api/chat` and `/api/waitlist` (`instrumentation-client.ts` + `checkBotId()` in route handlers).
- Interactive demo in `components/demo/InteractiveDemo.tsx`: below `md`, `PhoneShell` hides iPhone SVG bezel; demo text scales via `cqw` on `.demo-phone-shell` — preserve shell width/aspect when changing layout.
- Display font is Cabinet Grotesk via blocking `@import` at the top of `app/globals.css` (not `next/font`, not Arial fallback).
- Scroll-driven hero sections in `components/sections/StickyStack.tsx` and `components/sections/FlipStatement.tsx`; site header must not overlap these on laptop viewports.
- Legal pages (`app/privacy`, `app/terms`, `app/security`, `components/LegalPage.tsx`) are out of scope unless explicitly asked.
