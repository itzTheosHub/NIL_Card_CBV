# Claude Session Context

This file tracks project progress for continuity across Claude sessions.

---

## Current Phase: 0 — Scaffold & CI

**Status:** In Progress

### Completed
- [x] Create Next.js app (App Router, TypeScript, Tailwind)
- [x] Initialize Git repo
- [ ] Add CI pipeline (lint + build)
- [ ] Deploy base app to Vercel

### Next Up
- Set up CI pipeline (GitHub Actions for lint + build on PR)
- Deploy to Vercel

---

## Phase Summary

| Phase | Name | Status |
|-------|------|--------|
| 0 | Scaffold & CI | 🟡 In Progress |
| 1 | Static UI | ⬜ Not Started |
| 2 | Data Model & Validation | ⬜ Not Started |
| 3 | Create Profile (POST) | ⬜ Not Started |
| 4 | Fetch Profile (GET) | ⬜ Not Started |
| 5 | Edit Profile (PATCH) | ⬜ Not Started |
| 6 | Polish & Production | ⬜ Not Started |

---

## Decisions & Notes

- **Branch:** Using `master` (not `main`) - may reconcile later
- **Tech:** Next.js 15, Tailwind CSS v4, Supabase, Vercel, TypeScript

---

## Session Log

**2025-01-15**
- Project scaffolded with create-next-app
- Restructured to flat directory (moved nested nil-card-cbv/ to root)
- Merged .gitignore files
- AI_CONTRACT.md and README.md preserved

