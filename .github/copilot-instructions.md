# Copilot Instructions for thecollegecompass

## Quick Start Commands

### Frontend (in root directory)
```bash
npm install              # Install dependencies
npm run dev              # Dev server at http://localhost:5173 with hot reload
npm run build            # Production build → dist/
npm run lint             # ESLint check (no auto-fix by default)
npm run preview          # Preview production build locally
```

### Backend (in COLLEGESEARCH/server/)
```bash
npm install
npm run dev              # Nodemon dev server at http://localhost:5000 (or $PORT env var)
npm start                # Production start
npx prisma migrate dev   # Apply database migrations
npx prisma db seed       # Seed initial test data
```

## High-Level Architecture

**thecollegecompass** is a React + Vite college discovery platform for India/global institutions. It's currently a **frontend-first prototype** using localStorage for persistence.

### Frontend Data Flow
1. **CollegeContext** loads static college + exam data from `/public/siteData.json` on mount
2. Admin CRUD operations write overrides to localStorage keys: `addedColleges`, `editedColleges`, `deletedColleges`
3. A computed `colleges` value in CollegeContext merges base data + localStorage overrides via `useMemo`
4. All other mutable state (reviews, students, activity logs, exams) also persists to localStorage

### Context Providers (Nesting Order Matters)
- **AuthContext** → Current user session, student list, staff users, activity logs, login/logout, `trackStudentActivity`
- **SiteContext** → Header/footer navigation, site-wide settings
- **CollegeContext** → College data, exams, courses, reviews, pending updates, inaccuracy reports

Nesting order in `App.jsx`: `AuthProvider` → `SiteProvider` → `CollegeProvider` → `Router`

### Page Loading Strategy
- **Eagerly loaded** (high traffic): Home, Colleges, CollegeDetail, NotFound
- **Lazy-loaded** (via React.lazy + Suspense): All other pages (Exams, Reviews, Admin, etc.)
- **Admin routes** mount under `/admin/*` — Layout detects this and renders without Header/Footer
- **College detail** uses `/colleges/:id` where `id` matches the numeric college ID field

### Backend Status
The Express + Prisma server in `COLLEGESEARCH/server/` is **scaffolded but not wired to the frontend**. Frontend currently:
- Reads from `/public/siteData.json` (static)
- Writes all changes to `localStorage` (not shared across devices/users)

## Key Conventions

### Naming
- **Components / Pages**: PascalCase JSX files (`CollegeDetail.jsx`, `Header.jsx`)
- **Utilities / scripts**: camelCase (`.js` or `.cjs` for CommonJS)
- **Context files**: PascalCase with `Context` suffix (`AuthContext.jsx`)
- **College IDs**: Numeric. International default colleges use IDs starting at `90001`

### Component Patterns
- Use `useContext(CollegeContext)` to access colleges, reviews, exams, pending updates
- Use `useContext(AuthContext)` for current user, activity tracking, login/logout
- Call `trackStudentActivity()` when students perform searches, views, bookmarks, applies
- Bootstrap utilities preferred for styling; custom styles in `index.css` / `App.css`

### Styling & Animations
- Bootstrap 5 utility classes for layout/spacing
- Framer Motion for complex animations (motion components, AnimatePresence)
- Custom CSS in `index.css` for component-specific overrides
- ESLint ignores PascalCase and `motion` variables (see rule in eslint.config.js)

### Admin Features
- Role hierarchy: `student → viewer → operator → admin → superadmin`
- Roles control access to CRUD, review moderation, audit logs, etc.
- Admin routes detected by URL pattern `/admin/*` and render without Header/Footer
- Review moderation: students submit, admins approve/reject (status: PENDING/APPROVED/REJECTED)
- Audit logs: every admin action logged with timestamp + role

### AI Features (Optional)
- Gemini 1.5 Flash API integration via `src/utils/geminiApi.js`
- Two use cases:
  - `generateMissingDetails()` — fills missing college overview/placements/facilities
  - `aiSearchColleges()` — fallback search when native results are empty
- Requires `VITE_GEMINI_API_KEY` in `.env`
- Free fallback: placeholder text if API key missing/disabled

### i18n Support
- English + Hindi support via `src/utils/i18n.js`
- Use translation utility when rendering user-facing text in pages/components

### Data Persistence
- All changes (college edits, reviews, students, activity) go to localStorage
- Keys: `addedColleges`, `editedColleges`, `deletedColleges`, `collegeReviews`, `pendingUpdates`, `inaccuracyReports`, `students`, `activityLogs`
- localStorage limits: ~5-10MB depending on browser; current dataset fits comfortably

### API Routes Structure (Backend, Not Yet Wired)
- `POST /api/auth/signup`, `POST /api/auth/login`, `GET /api/auth/profile`
- `GET|POST|PUT|DELETE /api/colleges`
- `GET|POST /api/reviews`
- `GET /api/analytics`
- Uses `authorize(requiredRole)` middleware from `server/middleware/authorize.js`

## Environment Variables

Create a `.env` file in the root (never committed):
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here      # Optional: AI features
VITE_GOOGLE_MAPS_KEY=your_google_maps_key_here    # Optional: Google Maps Embed API
FRONTEND_URL=http://localhost:5173                # Backend CORS origin
```

Get a free Gemini key: https://aistudio.google.com/app/apikey

## Project Structure Overview

```
COLLEGESEARCH/
├── public/siteData.json          # Static college + exam data (source of truth)
├── src/
│   ├── main.jsx                  # React entry point
│   ├── App.jsx                   # Router + provider nesting
│   ├── pages/                    # One file per route (lazy-loaded except core pages)
│   ├── components/               # Shared UI: Header, Footer, Layout, CollegeImg
│   ├── contexts/                 # Auth, College, Site providers
│   ├── utils/                    # geminiApi.js, i18n.js
│   ├── data/                     # navData.js (static navigation config)
│   └── index.css, App.css        # Global + app-specific styles
├── server/                       # Express backend (scaffolded, not connected)
│   ├── index.js                  # Server entry + middleware
│   ├── routes/                   # auth, colleges, reviews, analytics, webhooks
│   ├── middleware/               # authorize.js (JWT + role-based auth)
│   ├── prisma/                   # schema.prisma, seed.js
│   └── package.json              # Independent backend dependencies
├── vite.config.js                # Vite configuration
├── eslint.config.js              # Flat config with React plugins
└── package.json                  # Frontend dependencies
```

## Testing & Validation

The project currently has:
- **No unit/integration tests** — validation is manual
- **ESLint** for code quality (rules in eslint.config.js)
- **Vite dev server** includes HMR for quick iteration

To validate changes:
1. `npm run lint` — check for ESLint violations
2. `npm run dev` — test in dev server (HMR)
3. `npm run build` — ensure production build succeeds
4. Browser: navigate to affected pages and test manually

## Common Patterns

### Adding a New Page
1. Create `src/pages/YourPage.jsx` (PascalCase)
2. Add route in `App.jsx` (eager load if high-traffic; lazy load otherwise)
3. Import contexts as needed: `useContext(CollegeContext)`, `useContext(AuthContext)`
4. Call `trackStudentActivity()` if tracking user interactions

### Modifying College Data
1. Fetch from `useContext(CollegeContext).colleges` (already merged with overrides)
2. To edit: call college context methods (e.g., `addCollege()`, `editCollege()`, `deleteCollege()`)
3. Changes auto-persist to localStorage

### Admin Role-Based Rendering
Use `currentUser.role` from `AuthContext` to conditionally render admin features. Roles: `student`, `viewer`, `operator`, `admin`, `superadmin`.

### Adding Animations
Use Framer Motion `motion` components and `AnimatePresence` wrapper. ESLint rule allows `motion` variables.

## Notes for Future Development

- **Backend Integration**: To connect the Express backend, update API calls in contexts/pages to fetch from `/api/*` instead of `siteData.json`
- **Real Persistence**: Switch from localStorage to Prisma queries once backend is wired
- **Email Notifications**: Currently disabled (callback/inquiry forms log to localStorage only)
- **Testing**: Consider adding Vitest + React Testing Library when test coverage needed
