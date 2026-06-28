# Project Structure

The active codebase lives inside `COLLEGESEARCH/`. The outer `collegesearch/` wrapper directory only contains this subfolder and a stale `api/` script.

```
COLLEGESEARCH/
├── public/
│   └── siteData.json        # Static college + exam data loaded at runtime (source of truth for frontend)
├── src/
│   ├── main.jsx             # React entry point (StrictMode)
│   ├── App.jsx              # Router tree + provider nesting order: Auth → Site → College → Router
│   ├── index.css            # Global styles
│   ├── App.css
│   ├── pages/               # One file per route, lazy-loaded except Home, Colleges, CollegeDetail, NotFound
│   ├── components/          # Shared UI: Header, Footer, Layout, CollegeImg
│   ├── contexts/            # React Context providers (see below)
│   ├── utils/               # geminiApi.js, i18n.js
│   └── data/                # navData.js (static navigation config)
├── server/                  # Express backend (scaffolded, not yet wired to frontend)
│   ├── index.js             # Server entry: middleware, routes, error handler
│   ├── middleware/
│   │   └── authorize.js     # Shared JWT role-based auth middleware
│   ├── routes/              # auth.js, colleges.js, reviews.js, analytics.js, webhooks.js
│   ├── prisma/
│   │   ├── schema.prisma    # DB schema: User, College, Course, Exam, Review, Bookmark, AuditLog
│   │   └── seed.js
│   └── package.json         # Separate package.json — backend is an independent Node project
└── package.json             # Frontend package.json
```

## Context Providers

| Context | File | Responsibility |
|---|---|---|
| `AuthContext` | `contexts/AuthContext.jsx` | Current user session, student list, staff users, activity logs, login/logout, `trackStudentActivity` |
| `CollegeContext` | `contexts/CollegeContext.jsx` | College data (raw + overrides), exams, courses, reviews, pending updates, inaccuracy reports |
| `SiteContext` | `contexts/SiteContext.jsx` | Header/footer nav config, site-wide settings (editable by admin) |

Provider nesting order in `App.jsx`: `AuthProvider` → `SiteProvider` → `CollegeProvider`.

## Data Flow (Frontend)

1. `CollegeContext` fetches `/public/siteData.json` on mount for base data.
2. Admin CRUD operations write overrides to `localStorage` keys: `addedColleges`, `editedColleges`, `deletedColleges`.
3. The `colleges` computed value in `CollegeContext` merges base data + localStorage overrides using `React.useMemo`.
4. All other mutable state (reviews, students, activity logs, exams) also persists to `localStorage`.

## Routing Conventions

- Core routes (high traffic) are **eagerly imported** in `App.jsx`: `/`, `/colleges`, `/colleges/:id`, `*` (NotFound).
- All other pages are **lazy-loaded** with `React.lazy` + `Suspense`.
- Admin routes match `/admin/*` — `Layout` detects this path and renders without Header/Footer.
- College detail uses `/colleges/:id` where `id` matches the numeric college `id` field.

## Backend Route Structure

All API routes are mounted under `/api/`:
- `POST /api/auth/signup`, `POST /api/auth/login`, `GET /api/auth/profile`
- `GET|POST|PUT|DELETE /api/colleges`
- `GET|POST /api/reviews`
- `GET /api/analytics`
- `POST /api/webhooks`

Backend authorization uses `authorize(requiredRole)` middleware from `server/middleware/authorize.js`. Role hierarchy (lowest → highest): `student → viewer → operator → admin → superadmin`.

## Naming Conventions

- **Components / Pages**: PascalCase JSX files (`CollegeDetail.jsx`, `Header.jsx`)
- **Utilities / scripts**: camelCase (`.js` or `.cjs` for CommonJS scripts)
- **Context files**: PascalCase with `Context` suffix (`AuthContext.jsx`)
- **CSS**: Bootstrap utility classes preferred; custom styles in `index.css` / `App.css`
- **IDs**: College IDs are numeric; international default colleges use IDs starting at `90001`
