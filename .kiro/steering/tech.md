# Tech Stack

## Frontend
| Concern | Choice |
|---|---|
| Framework | React 19 (JSX, functional components, hooks only) |
| Build tool | Vite 8 |
| Routing | React Router v7 (`BrowserRouter`, `Routes`, `Route`) |
| UI / CSS | React Bootstrap 5 + Bootstrap 5 CSS |
| Animations | Framer Motion (`motion`, `AnimatePresence`) |
| Icons | react-icons |
| State | React Context API + `localStorage` (no Redux / Zustand) |
| AI search | Google Gemini 1.5 Flash via `src/utils/geminiApi.js` |
| i18n | Custom utility in `src/utils/i18n.js` (English + Hindi) |
| Data export | `xlsx` library (browser-side Excel generation) |
| Location data | `country-state-city` package |
| Scroll detection | `react-intersection-observer` |

## Backend (scaffolded, not connected to frontend)
| Concern | Choice |
|---|---|
| Runtime | Node.js (ESM — `"type": "module"`) |
| Framework | Express 4 |
| ORM | Prisma 5 |
| Database | SQLite (dev) via `server/prisma/dev.db` |
| Auth | JWT (`jsonwebtoken`) + bcrypt (`bcryptjs`) |
| Security | `helmet`, `express-rate-limit`, CORS restricted to `FRONTEND_URL` |
| Dev server | `nodemon` |

## Environment Variables
Stored in `.env` at the project root (never committed).

| Variable | Purpose |
|---|---|
| `VITE_GEMINI_API_KEY` | Gemini AI search / content generation |
| `VITE_GOOGLE_MAPS_KEY` | Google Maps Embed API (optional; free fallback exists) |
| `FRONTEND_URL` | Backend CORS origin (default: `http://localhost:5173`) |
| `JWT_SECRET` | JWT signing secret for backend |

Prefix frontend env vars with `VITE_` so Vite exposes them to the browser.

## Common Commands

### Frontend (run from `COLLEGESEARCH/`)
```bash
npm install          # install dependencies
npm run dev          # dev server → http://localhost:5173
npm run build        # production build → dist/
npm run preview      # preview production build
npm run lint         # ESLint check
```

### Backend (run from `COLLEGESEARCH/server/`)
```bash
npm install
npx prisma migrate dev   # apply DB migrations
npx prisma db seed       # seed initial data
npm run dev              # nodemon dev server → http://localhost:3001 (or PORT env)
npm start                # production start
```
