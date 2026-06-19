# thecollegecompass — India & Global College Discovery Platform

A React + Vite web application for exploring colleges, comparing institutions, tracking exam dates, and managing admission inquiries. Built with a rich admin console for content moderation and data management.

---

## Live Demo

Start the dev server with:

```bash
npm install
npm run dev
```

The app runs at **http://localhost:5173**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, React Router v7, Framer Motion |
| UI Components | React Bootstrap 5, React Icons |
| State | React Context API + localStorage |
| AI Enrichment | Google Gemini 1.5 Flash API (optional) |
| Maps | Google Maps Embed API (free fallback included) |
| Data Export | xlsx (browser-side Excel generation) |
| Backend (optional) | Node.js + Express + Prisma + PostgreSQL |
| Build Tool | Vite 8 |

---

## What Is Actually Implemented

### ✅ Public-Facing Features

| Feature | Status | Notes |
|---|---|---|
| College listing with search | ✅ Implemented | Keyword + multi-filter sidebar |
| Advanced filters | ✅ Implemented | Country, state, city, course, fee range, placement, rating, hostel, type |
| Pagination (12 per page) | ✅ Implemented | Auto-resets on any filter change |
| AI-powered search fallback | ✅ Implemented | Calls Gemini API if no native results found |
| College detail page | ✅ Implemented | 8 tabs: Overview, Courses, Admissions, Cutoffs, Placements, Reviews, Facilities, Gallery |
| College comparison (up to 3) | ✅ Implemented | Side-by-side table comparison |
| Review submission + moderation | ✅ Implemented | Student reviews go to PENDING queue |
| Exam dates listing | ✅ Implemented | |
| Rankings page | ✅ Implemented | |
| Admissions guide | ✅ Implemented | |
| Scholarships info | ✅ Implemented | |
| Career guidance | ✅ Implemented | |
| Contact form | ✅ Implemented | |
| Google Maps embed | ✅ Implemented | Free embed fallback; optional Embed API key |
| AI content generation | ✅ Implemented | Fills missing overview/placements/facilities via Gemini |
| Internationalization (i18n) | ✅ Implemented | English + Hindi support |
| 404 not-found page | ✅ Implemented | Auto-redirect countdown + attempted path display |

### ✅ Student Portal Features

| Feature | Status | Notes |
|---|---|---|
| Student login | ✅ Implemented | Email + password (localStorage-backed) |
| Activity tracking | ✅ Implemented | Views, saves, searches, apply inquiries tracked per session |
| Bookmark colleges | ✅ Implemented | Persisted in student profile activity |
| Request callback form | ✅ Implemented | Controlled form, logs to student activity |
| Student profile panel | ✅ Implemented | Dashboard showing search history, viewed colleges, saved colleges |

### ✅ Admin Console Features

| Feature | Status | Notes |
|---|---|---|
| Role-based access | ✅ Implemented | 4 roles: Viewer, Operator, Admin, Super Admin |
| College CRUD | ✅ Implemented | Add, edit, delete college profiles |
| Bulk Excel import | ✅ Implemented | Column mapping + validation preview |
| Excel export | ✅ Implemented | Full directory + missing data report |
| Review moderation | ✅ Implemented | Approve / reject student reviews |
| Web crawler simulator | ✅ Implemented | Generates suggested field updates for admin approval |
| Pending updates queue | ✅ Implemented | Admin approves or rejects crawler suggestions |
| Inaccuracy reports | ✅ Implemented | Students flag incorrect info, admins review |
| Duplicate detection + merge | ✅ Implemented | Auto-detect by name+location |
| Activity audit logs | ✅ Implemented | Every admin action logged with timestamp + role |
| Student management | ✅ Implemented | View all student profiles, add notes, filter |
| Staff autofill (demo mode) | ✅ Implemented | One-click demo login for each role |

---

## What Is Not Yet Implemented (Planned)

- **Real backend integration** — The frontend currently reads from `/public/siteData.json` and writes to `localStorage`. The Express + Prisma server in `/server` is scaffolded but not connected to the React app.
- **Multi-user data sync** — Because data lives in browser localStorage, changes are not shared across devices or users.
- **Email/OTP notifications** — Callback and application requests show alerts only; no real email is sent.
- **CRM / Lead management** — Not implemented. Listed as future scope.
- **Inventory, billing, payroll modules** — Not in scope for this project.
- **Real payment gateway** — Not implemented.
- **Push notifications** — Not implemented.

---

## Environment Variables

Create a `.env` file in the project root:

```env
# Required for AI search and content generation
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Google Maps Embed API key
# Without this, the app uses the free maps.google.com embed fallback
VITE_GOOGLE_MAPS_KEY=your_google_maps_key_here

# Backend server (only needed if running the Express server)
FRONTEND_URL=http://localhost:5173
```

Get a free Gemini API key at: https://aistudio.google.com/app/apikey

---

## Project Structure

```
collegesearch/
├── src/
│   ├── pages/           # All page components
│   ├── components/      # Shared UI components (Header, Layout, CollegeImg, etc.)
│   ├── contexts/        # React Context providers (Auth, College, Site)
│   ├── utils/           # Helpers: geminiApi.js, i18n.js
│   └── App.jsx          # Router + provider tree
├── public/
│   └── siteData.json    # Static college + exam dataset (loaded at runtime)
├── server/              # Express backend (scaffolded, not yet connected to frontend)
│   ├── routes/          # colleges, auth, reviews, analytics
│   ├── middleware/      # authorize.js (shared JWT auth)
│   └── prisma/          # Database schema + seed
└── .env                 # Environment variables (not committed)
```

---

## Data Persistence

Currently all data is stored in the browser's `localStorage`. This includes:
- College overrides (edits, additions, deletions made in Admin)
- Student profiles and activity logs
- Reviews, pending updates, and inaccuracy reports
- Exam data and settings

This is intentional for a prototype/demo. Moving to the included Express + Prisma backend would give you persistent, shared storage across users and devices.

---

## Running the Backend (Optional)

```bash
cd server
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev
```

The server starts at **http://localhost:3001**. Note: the React frontend currently does **not** call the backend API — it reads from the static JSON file and localStorage.

---

## License

MIT
