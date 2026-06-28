# Product: thecollegecompass

India & Global college discovery platform for students exploring higher education options.

## Core Purpose
Help students find, compare, and apply to colleges. Provide admissions info, exam dates, rankings, reviews, and career guidance — primarily for the Indian market with some international listings.

## Key User Types
- **Students** — browse/search colleges, bookmark, compare, submit reviews, request callbacks
- **Admins / Staff** — manage college data, moderate reviews, approve updates, manage student profiles
  - Roles: VIEWER → OPERATOR → ADMIN → SUPERADMIN (hierarchical access)

## Key Features
- College listing with multi-filter search (country, state, city, course, fees, rating, type, etc.)
- AI-powered search fallback via Google Gemini 1.5 Flash when native results return nothing
- College detail pages with 8 tabs: Overview, Courses, Admissions, Cutoffs, Placements, Reviews, Facilities, Gallery
- Side-by-side college comparison (up to 3)
- Exam dates, rankings, scholarships, career guidance pages
- Admin console: CRUD for colleges, bulk Excel import/export, review moderation, web crawler update queue, audit logs, student management
- English + Hindi i18n support

## Current State
Frontend reads from `/public/siteData.json` and writes to `localStorage`. This is intentional prototype behaviour. The Express + Prisma backend in `/server` is scaffolded but **not yet connected** to the React frontend.
