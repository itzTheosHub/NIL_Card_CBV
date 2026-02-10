# Claude Session Context

This file tracks project progress for continuity across Claude sessions.

---

## Current Phase: 3 — Create Profile (POST)

**Status:** In Progress

### Completed
- [x] Landing page (header, hero, How It Works, footer)
- [x] Signup page (styled, Supabase auth, shadcn Input/Button)
- [x] Login page (styled, Supabase auth, shadcn Input/Button)
- [x] Static athlete profile page (app/athlete/demo/page.tsx)
- [x] Profile creation form (static, shadcn UI components)
- [x] Dark mode logo swap on all pages
- [x] UI consistency fixes (gradients, footer, unused state)
- [x] Supabase schema: profiles, social_links, content_tags, deliverables, profile_content_tags, profile_deliverables

### In Progress
- Auth routing (login → check profile → route to create or view)
- Wire up create form POST to Supabase

### Remaining
- Responsive styling
- Dark mode: class-based `dark:` variants need system preference detection (consider `next-themes`)

### Form ↔ DB alignment notes
- Form `school` → DB `university`
- Form social `username` → DB `url`
- `email` — pull from auth session, not form
- `graduation_year` — form sends string, DB expects int4
- Missing from form: `profile_photo_url`, `year_in_school`, `is_available`

---

## Phase Summary

| Phase | Name | Status |
|-------|------|--------|
| 0 | Scaffold & CI | 🟡 Mostly Done (CI needs debug) |
| 1 | Static UI | ✅ Done |
| 2 | Data Model & Validation | ✅ Done (Supabase tables created) |
| 3 | Create Profile (POST) | 🟡 In Progress |
| 4 | Fetch Profile (GET) | ⬜ Not Started |
| 5 | Edit Profile (PATCH) | ⬜ Not Started |
| 6 | Polish & Production | ⬜ Not Started |

### Phase 6 Notes
- Extract shared footer into `layout.tsx` (identical across all pages)
- Extract shared header into `components/Header.tsx` with props for nav link variations (landing page has Sign in + Get Started, other pages don't)

---

## Decisions & Notes

- **Branch:** Using `master` (not `main`) - may reconcile later
- **Tech:** Next.js 16, Tailwind CSS v4, Supabase, Vercel, TypeScript
- **Gradients:** Using purple → blue (`from-violet-600 to-blue-500`) consistently
- **Icons:** Using lucide-react for all icons
- **Dark mode:** Full support with `dark:` variants throughout

---

## Session Log

**2025-01-31**
- Completed athlete demo profile page (app/athlete/demo/page.tsx):
  - Header with light/dark mode logo swap (logo.png + logo-dark.png)
  - Profile photo with purple glow ring + pulsing green availability dot
  - Name with BadgeCheck verified icon
  - University line with GraduationCap icon
  - Bio line using flex layout (Junior • Men's Basketball • Division I)
  - 3-column stats grid with dark mode support
  - Social channels section (Instagram, TikTok, X) with platform styling
  - About section with bio paragraph
  - Content focus pill tags using .map() loop pattern
  - Partnership deliverables list with icons
  - Elevated CTA button with gradient + shadow glow + hover effects
  - Footer tagline
- Added modern UI effects:
  - Glassmorphism on all cards (bg-white/80 backdrop-blur-sm)
  - Hover lift animations (hover:-translate-y-1 hover:shadow-xl)
  - Pill tag hover effects (scale + color shift)
  - Smooth transitions (transition-all duration-300)
- Fixed deployment issues:
  - Added lucide-react to package.json dependencies
  - Cleared Next.js cache (.next folder) for logo updates
- Learned: React .map() pattern, Tailwind v4 gradient syntax, glassmorphism, git workflow
- Merged feat/login-page to master and deployed to Vercel

**2025-01-21**
- Completed landing page: added How It Works section and Footer
- Created signup page (app/signup/page.tsx):
  - Supabase auth integration (signUp flow)
  - Styled to match landing page (card layout, gradient button, dark mode)
  - Form validation (required fields, error handling)
  - Loading state on submit button
  - Success message when signup completes
  - Clickable logo linking to home
  - Error clears when user starts typing
- Set up Supabase: created lib/supabase.ts client, configured .env.local
- Committed and pushed to GitHub (master branch)

**2025-01-16**
- Started landing page (app/page.tsx)
- Built header: logo, Sign in link, Get Started button
- Built hero section: headline, subtext, two CTA buttons (Create Your Card, See Example)
- Color scheme: light background, gradient buttons (violet to blue)
- Still to do: How It Works section, Footer, responsive testing

**2025-01-15**
- Project scaffolded with create-next-app
- Restructured to flat directory (moved nested nil-card-cbv/ to root)
- Merged .gitignore files
- AI_CONTRACT.md and README.md preserved
- Created ci.yml for GitHub Actions (not triggering yet - needs debug)
- Deployed to Vercel successfully
- Verified local dev server works (npm run dev)

