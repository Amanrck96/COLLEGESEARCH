# CollegeSearch360 — Project Architecture

> Generated: 2026-10-31 | Audited by: ATLAS + NOVA + ORION + FORGE + VAULT + SENTINEL + NEXUS

---

## 1. Technology Stack

| Layer | Technology | Notes |
|:---|:---|:---|
| **Frontend Framework** | React 19 + Vite 8 | SPA with lazy-loaded pages |
| **Routing** | React Router DOM v7 | Browser routing, `/colleges/:id` pattern |
| **UI Components** | React Bootstrap v2 + Bootstrap 5 | Responsive layout system |
| **Animation** | Framer Motion v12 | Card entrance animations |
| **Icons** | React Icons v5 | FontAwesome via react-icons |
| **Backend** | Express.js (Node.js) | `server/` directory, port 5000 |
| **Database** | Prisma ORM + SQLite | `server/prisma/` schema |
| **Data Source** | `public/siteData.json` | 12,660 colleges (primary truth) |
| **AI Integration** | Google Gemini API | `src/utils/geminiApi.js` — fallback search |
| **Security** | WireArmor + CSRF + Anti-scrape | Custom middleware in `server/middleware/` |
| **Deployment** | Vercel (frontend) + Node server | `vercel.json` config present |

---

## 2. Directory Structure

```
collegesearch/
├── public/
│   ├── siteData.json              ← 12,660 college records (primary data source)
│   └── images/campuses/           ← 66 local campus image files (68 MB total)
├── src/
│   ├── App.jsx                    ← Routes + Context providers
│   ├── contexts/
│   │   ├── CollegeContext.jsx     ← Data fetching, filtering, state management
│   │   ├── AuthContext.jsx        ← User authentication
│   │   ├── SiteContext.jsx        ← Site-wide configuration
│   │   └── ToastContext.jsx       ← Notification system
│   ├── components/
│   │   ├── CollegeImg.jsx         ← Smart image loading with fallback chain
│   │   ├── Header.jsx / Footer.jsx / Layout.jsx
│   │   ├── BotShield.jsx          ← Bot detection
│   │   ├── DataShield.jsx         ← Data integrity verification UI
│   │   └── CollegeMapView.jsx     ← Google Maps integration
│   ├── pages/
│   │   ├── Colleges.jsx           ← College listing with advanced filters
│   │   ├── CollegeDetail.jsx      ← Individual college detail (9 tabs)
│   │   ├── Home.jsx               ← Landing page with featured colleges
│   │   ├── Admin.jsx              ← Admin CMS dashboard
│   │   ├── Courses.jsx / Exams.jsx / Rankings.jsx
│   │   └── StudentProfilePanel.jsx
│   └── utils/
│       ├── geminiApi.js           ← AI search fallback
│       ├── security.js            ← Input sanitization, CSRF
│       ├── wireArmor.js           ← Payload encryption/decryption
│       └── i18n.js                ← Internationalization
├── server/
│   ├── index.js                   ← Express server entry
│   ├── routes/
│   │   ├── colleges.js            ← CRUD + filtering + search API
│   │   ├── auth.js                ← Login/JWT routes
│   │   ├── reviews.js             ← College reviews API
│   │   ├── analytics.js           ← Event tracking
│   │   ├── uploads.js             ← Image upload handling
│   │   └── system.js              ← Health + system status
│   ├── middleware/
│   │   ├── honeypot.js            ← Anti-scraping traps
│   │   └── wireArmor.js           ← API payload encryption
│   └── prisma/                    ← Database schema + migrations
├── image-audit/                   ← Phase 3 audit deliverables
├── reports/college-audit/         ← Phase 14 engineering reports
└── scripts/                       ← Data processing utilities
```

---

## 3. Data Flow Architecture

```
Browser Request
      ↓
React Router → Page Component
      ↓
CollegeContext.fetchColleges()
      ↓
  [localhost?]
      ├── YES → Express API (port 5000) → siteData.json → Encrypted response
      └── NO  → Static siteData.json fetch → Client-side filter/paginate
      ↓
CollegeImg component
      ↓
  [college.img is local?]
      ├── /images/campuses/*.jpg → Direct serve
      └── http:// URL → Try direct → Proxy (weserv.nl) → Generic fallback
```

---

## 4. College Data Schema (siteData.json)

```json
{
  "id": 123,
  "name": "College Name",
  "shortName": "CN",
  "type": "Private | Government | Autonomous",
  "state": "Maharashtra",
  "location": "Mumbai",
  "address": "Full address string",
  "img": "/images/campuses/filename.jpg | http://...",
  "rating": 4.2,
  "ranking": 45,
  "fees": "₹1,80,000/yr",
  "exams": "CAT, MAT",
  "website": "https://college.edu",
  "phone": "+91-22-1234567",
  "about": "Description...",
  "courses": [
    {
      "title": "MBA",
      "duration": "2 Years",
      "fees": "₹1,50,000/Year",
      "eligibility": "Graduation + CAT/MAT"
    }
  ],
  "facilities": "Library, Hostels, Sports...",
  "topRecruiters": "Google, Microsoft...",
  "averagePackage": "₹8 LPA",
  "featured": true,
  "published": true,
  "_source": "Official Site",
  "_lastSync": "2026-06-06"
}
```

---

## 5. Image Architecture

### Local Campus Images
- **Location**: `public/images/campuses/`
- **Count**: 66 files (68 MB total)
- **Formats**: JPEG (primary), PNG, WEBP, AVIF (2 files disguised as .jpg)
- **Fallback Pool**: 9 unbranded architecture images (`campus_architecture_1-9.jpg`)

### CollegeImg Component Fallback Chain
```
1. college.img (primary assigned image)
   ↓ on error
2. [if http URL] → images.weserv.nl proxy (w=900, q=80)
   ↓ on error
3. CAMPUS_BUILDING_FALLBACKS[hash(college.name) % 40]
   (all unbranded; no institutional signage)
```

---

## 6. Search & Filtering System

### Backend Route (localhost:5000)
- `GET /api/colleges` — paginated + filtered
- `GET /api/colleges/filters` — distinct states/cities/courses
- `GET /api/colleges/:id` — single college detail
- `PUT /api/colleges/:id` — admin update
- Full-text search across: name, location, state, about, exams, courses

### Client-Side Fallback (Vercel/Static)
- Loads full `siteData.json` into memory
- Applies all filters client-side (text, state, city, course, fees, rating, type, hostel, placement)
- Synonym expansion: bangalore=bengaluru, bombay=mumbai, btech=engineering, etc.
- Deterministic pagination

---

## 7. Admin CMS

- **Route**: `/admin/*`
- **Auth**: JWT-based, role: `superadmin | admin | operator`
- **Features**: Add/edit/delete colleges, approve/reject reviews, manage pending data updates, view analytics
- **Data mutations**: Try server sync → fallback to localStorage

