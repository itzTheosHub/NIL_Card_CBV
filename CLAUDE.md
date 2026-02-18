# Claude Session Context

This file tracks project progress for continuity across Claude sessions.

---

## Current Phase: 4 — Fetch Profile (GET)

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
- [x] Login routing: check profile exists → route to /profile/[id] or /profile/create
- [x] Create form POST: inserts into profiles, social_links, content_tags, deliverables + junction tables
- [x] Profile view page (`/profile/[id]`): server component, fetches all data from Supabase
- [x] Dynamic social links with platform-specific styling (Instagram/TikTok/X/fallback)
- [x] Dynamic content tags from profile_content_tags junction table
- [x] Dynamic deliverables with icon mapping from iconMap object
- [x] Default profile photo fallback (initials on gradient circle when no photo)
- [x] Clickable social links (constructs full URL from username per platform)
- [x] Fixed missing foreign keys on profile_deliverables and profile_content_tags tables
- [x] Added UPDATE RLS policies on content_tags and deliverables for upsert support
- [x] CI fix: Node 20, Supabase env secrets

- [x] Contact section: ContactSection client component with modal form (app/profile/[id]/ContactSection.tsx)
- [x] Email integration: API route (/api/contact/route.ts) using Resend to send emails to athletes
- [x] Contact form: sender email, subject, message fields with replyTo support
- [x] Success toast notification with green styling and bounce animation
- [x] Fixed TypeScript build errors: Supabase join types cast with `as any` for content_tags and deliverables
- [x] Added RESEND_API_KEY to Vercel environment variables
- [x] Vercel build passing

### In Progress
- Testing and bug fixes

### Remaining
- Responsive styling
- Dark mode: class-based `dark:` variants need system preference detection (consider `next-themes`)
- Profile photo upload (currently no photo upload in create form)

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
| 0 | Scaffold & CI | ✅ Done |
| 1 | Static UI | ✅ Done |
| 2 | Data Model & Validation | ✅ Done (Supabase tables created) |
| 3 | Create Profile (POST) | ✅ Done |
| 4 | Fetch Profile (GET) | 🟡 In Progress |
| 5 | Edit Profile (PATCH) | ⬜ Not Started |
| 6 | Polish & Production | ⬜ Not Started |

### Phase 6 Notes
- Verify domain with Resend and replace `onboarding@resend.dev` with custom sender
- Add `RESEND_API_KEY` to Vercel environment variables
- Extract shared footer into `layout.tsx` (identical across all pages)
- Extract shared header into `components/Header.tsx` with props for nav link variations (landing page has Sign in + Get Started, other pages don't)
- Add `username`/`slug` column to profiles for cleaner URLs (e.g., `/profile/theo-colosimo` instead of UUID)
- Profile photo upload via Supabase Storage
- Remove debug `console.log` statements from create form and profile view page

---

## Decisions & Notes

- **Branch:** Using `master` (not `main`) - may reconcile later
- **Tech:** Next.js 16, Tailwind CSS v4, Supabase, Vercel, TypeScript, Resend (email)
- **Gradients:** Using purple → blue (`from-violet-600 to-blue-500`) consistently
- **Icons:** Using lucide-react for all icons
- **Dark mode:** Full support with `dark:` variants throughout

---

## Session Log

**2026-02-18**
- Built ContactSection client component (app/profile/[id]/ContactSection.tsx):
  - Typed props (ContactProps: email, name) passed from server component
  - useState hooks for isOpen, subject, message, senderEmail, showSuccess
  - Modal with backdrop, stopPropagation to prevent close on card click
  - Form: sender email input, subject input, message textarea
  - handleSend: async fetch to /api/contact POST route with JSON body
  - Success toast: fixed top-center, green styling, CircleCheck icon, animate-bounce, auto-dismiss with setTimeout
- Built API route (app/api/contact/route.ts):
  - Resend integration for sending emails
  - from: onboarding@resend.dev (test sender), replyTo: visitor's email
  - try/catch error handling, NextResponse.json responses
- Replaced static button in page.tsx with <ContactSection /> component
- Fixed TypeScript build errors: Supabase join types (content_tags, deliverables) typed as arrays but return single objects at runtime — used `as any` cast to fix
- Added RESEND_API_KEY to Vercel env vars, confirmed build passes
- Learned: React props vs state, TypeScript type definitions, mailto: limitations, email API services (Resend), fetch with POST/JSON, conditional rendering patterns, toast notifications, event propagation (stopPropagation), camelCase in SDK APIs (replyTo not reply_to), `as any` type assertion for Supabase join type mismatches

**2025-02-09 (continued)**
- Built profile view page (app/profile/[id]/page.tsx):
  - Server component (no "use client"), async function with await params
  - Fetches profiles, social_links, profile_content_tags (with join), profile_deliverables (with join)
  - Platform-specific social link styling using if/else in .map() with curly braces
  - Deliverable icon mapping using iconMap object with keyof typeof cast
  - Default profile photo: initials fallback using .split(" ").map().join("")
  - Clickable social links: constructs full URLs from username (instagram.com/, tiktok.com/@, x.com/)
- Fixed Supabase issues:
  - Missing FK on profile_deliverables (deliverable_id → deliverables.id) — added via ALTER TABLE
  - Missing FK on profile_content_tags (tag_id → content_tags.id) — added via ALTER TABLE
  - Schema cache refresh: NOTIFY pgrst, 'reload schema'
  - Added UPDATE policies on content_tags and deliverables for upsert support
  - Fixed "university" column spelling in profiles table
- Added debug console.log statements to create form handleSubmit (to remove in Phase 6)
- Learned: TypeScript keyof typeof, as keyword for type casting, target="_blank" + rel="noopener noreferrer", PostgREST schema cache, FK relationships for Supabase joins

**2025-02-09**
- Migrated signup/login to shadcn Input/Button components
- Added dark mode logo swap to signup, login, and create form headers
- Fixed UI inconsistencies (button gradient opacity, footer on create form, unused email state)
- Login routing: after auth, queries profiles table → routes to /profile/[id] or /profile/create
- Create form POST: full Supabase integration
  - Inserts into profiles (mapped form fields to DB columns)
  - Inserts social_links via .map() array transform
  - Upserts content_tags (onConflict: "name") → inserts profile_content_tags junction rows
  - Upserts deliverables → inserts profile_deliverables junction rows
  - Error handling with return on each step, redirect on success
- Learned: destructuring with renaming, optional chaining (?.), .map() for array transforms, junction tables, useState vs API responses
- Updated CLAUDE.md: Phase 3 complete, Phase 4 in progress

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

