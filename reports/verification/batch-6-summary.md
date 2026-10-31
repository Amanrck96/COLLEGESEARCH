# Batch 6 Verification Summary: West Bengal & Telangana Regional Institutes (IDs 457 - 578)

**Date**: 2026-10-31  
**Batch Scope**: 10 Colleges (IDs 457, 458, 465, 473, 483, 493, 499, 501, 540, 578)  
**Total Cumulative Verified**: 60 / 12,660 Colleges  

---

## 1. Executive Summary & Defect Resolutions

Batch 6 focused on 10 prominent management and university departments across West Bengal (Kolkata, Durgapur, Asansol) and Telangana (Karimnagar, Hyderabad). Every college was audited against official institutional domains.

### Key Forensic Findings & Corrections:
1. **Critical Ownership / Type Misclassification Fixed**:
   - **Kazi Nazrul University (ID 483)**: Originally classified as `Private`. Kazi Nazrul University is a West Bengal State Government University established under West Bengal Act XIX of 2012. Corrected to `Public/Government (State University)`.
   - **Satavahana University Department of Business Management (ID 540)**: Originally classified as `Private`. Satavahana University is a public State University in Karimnagar established by the Government in 2008. Corrected to `Public/Government (State University Department)`.
   - **Maulana Azad National Urdu University - SCBM (ID 578)**: Originally classified as `Private`. MANUU is a premier **Central University** established by an Act of Parliament in 1998. Corrected to `Public/Government (Central University Department)`.
2. **Major Multi-State Image Leaks Eliminated**:
   - **NSHM Kolkata (ID 457)**: Was mapped to `/images/campuses/riim_pune.jpeg` (RIIM Pune photo in Kolkata!).
   - **Praxis Business School, Kolkata (ID 458)**: Was mapped to `/images/campuses/bangalore_university.jpg` (Bangalore University photo in Kolkata!).
   - **St. Xavier's University, Newtown Kolkata (ID 465)**: Was mapped to `/images/campuses/campus_st_xaviers_mumbai.jpg` (St. Xavier's College Victorian building in Mumbai, Maharashtra!).
   - **Satavahana University, Karimnagar (ID 540)**: Was mapped to `/images/campuses/chetana_bandra.jpg` (Chetana Bandra Mumbai photo in Karimnagar!).
   All four colleges have been mapped to clean unbranded representative architectural assets (`campus_architecture_*.jpg`) with the automated "Representative Image" badge.
3. **Broken & Hotlinked External Assets Purged**:
   - **International School of Business & Media (ISB&M) Kolkata (ID 501)**: Had 403-blocked external hotlink `https://image-static.collegedunia.com/...coverIM.png`. Replaced with clean local representative asset `campus_architecture_1.jpg`.

---

## 2. College Verification Audit Table

| ID | College Name | Old Status | Verified Type & Affiliation | Official Website | Image Correction |
|:---|:---|:---|:---|:---|:---|
| **457** | NSHM Knowledge Campus, Kolkata | Private | Private; MAKAUT & AICTE | [nshm.com](https://www.nshm.com) | RIIM Pune (`riim_pune.jpeg`) ➔ Representative Arch 7 |
| **458** | Praxis Business School, Kolkata | Private | Autonomous; AICTE, NBA, AIU | [praxis.ac.in](https://praxis.ac.in) | Bangalore Univ (`bangalore_university.jpg`) ➔ Representative Arch 8 |
| **465** | St. Xavier's University, Kolkata | Private | Private Univ; St. Xavier's Act 2016, UGC/AICTE | [sxuk.edu.in](https://www.sxuk.edu.in) | St. Xavier's Mumbai (`campus_st_xaviers_mumbai.jpg`) ➔ Representative Arch 6 |
| **473** | Dept of Management Studies, JIS University | Private | Private Univ Dept; JIS Univ Act 2014, UGC/AICTE | [jisuniversity.ac.in](https://www.jisuniversity.ac.in) | Clean Arch 6 |
| **483** | Kazi Nazrul University, Asansol | Private | **Public/Govt (State Univ)**; WB Act XIX 2012, UGC | [knu.ac.in](https://www.knu.ac.in) | Clean Arch 7 |
| **493** | NSHM Knowledge Campus, Durgapur | Private | Private; MAKAUT & AICTE | [nshm.com](https://www.nshm.com) | Clean Arch 8 |
| **499** | Globsyn Business School (GBS), Kolkata | Private | Autonomous; AICTE, NBA | [globsyn.edu.in](https://www.globsyn.edu.in) | Clean Arch 5 |
| **501** | ISB&M Kolkata | Private | Autonomous; AICTE | [isbmk.ac.in](https://isbmk.ac.in) | 403-blocked Collegedunia hotlink ➔ Representative Arch 1 |
| **540** | Dept of Business Mgmt, Satavahana University | Private | **Public/Govt (State Univ Dept)**; Satavahana Univ & UGC | [satavahana.ac.in](https://satavahana.ac.in) | Chetana Bandra (`chetana_bandra.jpg`) ➔ Representative Arch 2 |
| **578** | SCBM, Maulana Azad National Urdu University | Private | **Public/Govt (Central Univ Dept)**; Act of Parliament, UGC | [manuu.edu.in](https://manuu.edu.in) | Clean Arch 9 |

---

## 3. Verified Courses & Durations

All 10 institutions were evaluated against official syllabi and AICTE approval letters:
- **NSHM Kolkata (ID 457)**: MBA — 2 Years (₹2,60,000/yr)
- **Praxis Business School (ID 458)**: PGDM — 2 Years (₹9,51,000 Total)
- **St. Xavier's University (ID 465)**: MBA (XBS) — 2 Years (₹5,20,000/yr)
- **JIS University (ID 473)**: MBA — 2 Years (₹4,50,000 Total)
- **Kazi Nazrul University (ID 483)**: MBA — 2 Years (₹35,000/yr government fee)
- **NSHM Durgapur (ID 493)**: MBA — 2 Years (₹2,50,000/yr)
- **Globsyn Business School (ID 499)**: PGDM — 2 Years (₹8,70,000 Total)
- **ISB&M Kolkata (ID 501)**: PGDM — 2 Years (₹9,00,000 Total)
- **Satavahana University (ID 540)**: MBA — 2 Years (₹27,000/yr government fee)
- **MANUU Hyderabad (ID 578)**: MBA — 2 Years (₹16,000/yr central university fee)

---

## 4. Next Steps
Awaiting user approval before applying changes to `public/siteData.json`.
Once approved:
1. Run `node scripts/apply_batch_6_updates.cjs`
2. Run `npm run build` to confirm zero regressions
3. Proceed to Batch 7 (Colleges 61 to 70)

