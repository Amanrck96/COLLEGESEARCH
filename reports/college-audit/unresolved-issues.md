# Unresolved Issues & Observations — CollegeSearch360

> Generated: 2026-10-31 | Auditor: AUDITOR + SENTINEL + VAULT

---

## 1. Duplicate Institution Record: SIBM Pune

* **Record A**: ID 165 — `Symbiosis Institute of Business Management (SIBM Pune)` (Pune, Maharashtra)
* **Record B**: ID 233 — `Symbiosis Institute of Business Management (SIBM Pune)` (Pune, Maharashtra)
* **Observation**: ID 233 contains enriched administrative contact information (phone, email, affiliation, hostel details), whereas ID 165 is the primary referenced entity in earlier bookmarks.
* **Resolution Recommendation**: Merge analytics and review history from ID 233 into ID 165 and soft-deprecate ID 233 with an HTTP 301 redirect in `server/routes/colleges.js`. Both records currently remain intact to avoid breaking existing user bookmarks.

---

## 2. Image Asset Format Mismatches (Harmless Runtime Warnings)

The following local image files are valid and render in modern browsers, but their container format does not match their file extension:
* `kv_imis_coimbatore.jpg` (AVIF container named .jpg)
* `nagindas_khandwala_malad.jpg` (AVIF container named .jpg)
* `alkesh_dinesh_mody_mumbai.jpg` (WEBP container named .jpg)
* `delhi_technological_university.jpg` (WEBP container named .jpg)
* `weschool_matunga_mumbai.jpeg` (WEBP container named .jpeg)
* **Recommendation**: Batch transcode to standard progressive JPEG using Sharp/Jimp during the next scheduled static asset release pipeline.

---

## 3. Image Files Exceeding 4 MB (Performance Optimization Recommendation)

* `campus_trinity_pune.png` (10.38 MB)
* `koshys_bangalore.jpg` (8.21 MB)
* `sir_jj_art_mumbai.jpg` (6.00 MB)
* `svims_wadala_mumbai.jpeg` (4.02 MB)
* **Recommendation**: Optimize to <300 KB WebP format to enhance Core Web Vitals (LCP) on mobile networks.

---

## 4. Fee Transparency: Courses Marked "Contact College for Current Fees"

* **Count**: 342 course offerings across 81,421 courses.
* **Status**: Appropriately marked per prompt instruction: *"If fees cannot be verified, display: Contact College for Current Fees"*.
* **Recommendation**: Institutional admission desk inquiry pipeline to collect updated fee structures for 2026-2027.
