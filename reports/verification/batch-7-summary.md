# Batch 7 Verification Summary: Telangana Priority Institutions (IDs 579 - 599)

**Date**: 2026-10-31  
**Batch Scope**: 10 Colleges (IDs 579, 582, 583, 584, 586, 587, 590, 592, 595, 599)  
**Total Cumulative Verified**: 70 / 12,660 Colleges  

---

## 1. Executive Summary & Defect Resolutions

Batch 7 focused on 10 prominent management and university institutes across Telangana (Hyderabad, Secunderabad, Warangal, Medchal-Malkajgiri). Every college was audited against official institutional domains.

### Key Forensic Findings & Corrections:
1. **Critical Ownership / Type Misclassification Fixed**:
   - **NALSAR University of Law (ID 579)**: Originally classified as `Private`. NALSAR is India's premier National Law University (NLU), established as a statutory State University by Andhra Pradesh Act 34 of 1998. Corrected to `Public/Government (State University / National Law University)`.
   - **Institute of Insurance and Risk Management (IIRM) (ID 599)**: Originally classified as `Private`. IIRM was jointly established by the **Insurance Regulatory and Development Authority of India (IRDAI - Govt of India)** and the Government of Telangana. Corrected to `Autonomous Statutory Institution (IRDAI & Govt of Telangana)`.
2. **Major Multi-State Image Leaks Eliminated**:
   - **Fortune School of Business (ID 582)**: Was mapped to `/images/campuses/svkm_upg_vileparle.jpg` (SVKM Usha Pravin Gandhi College in Vile Parle, Mumbai!).
   - **Pannala Ram Reddy College (ID 583)**: Was mapped to `/images/campuses/gnims_matunga.png` (GNIMS Matunga Mumbai!).
   - **Aurora's Business School (ID 587)**: Was mapped to `/images/campuses/atharva_complex_malad.jpg` (Atharva Educational Complex in Malad, Mumbai!).
   All three colleges have been mapped to clean unbranded representative architectural assets (`campus_architecture_*.jpg`) with the automated "Representative Image" badge.
3. **Broken & Fragile Aggregator Hotlinks Purged**:
   - **School of Innovation and Management (ID 584)**: Had fragile hotlink `https://www.collegebatch.com/...296603.webp`. Replaced with `campus_architecture_6.jpg`.
   - **Bharathi Institute of Business Management (ID 592)**: Had fragile hotlink `https://media.getmyuni.com/...`. Replaced with `campus_architecture_3.jpg`.
   - **IIRM Hyderabad (ID 599)**: Had fragile hotlink `https://www.collegebatch.com/...295876.webp`. Replaced with `campus_architecture_8.jpg`.
4. **Typographical & Name Errors Corrected**:
   - ID 583 name corrected from `PANNALA RAM REDDY COLLEGE OF BUSSINESS MANAGEMENT` (double S) to `Pannala Ram Reddy College of Business Management (PRRCBM)`.

---

## 2. College Verification Audit Table

| ID | College Name | Old Status | Verified Type & Affiliation | Official Website | Image Correction |
|:---|:---|:---|:---|:---|:---|
| **579** | DoMS, NALSAR University of Law | Private | **Public/Govt (State Univ / NLU)**; Act 34 of 1998, UGC/BCI | [doms.nalsar.ac.in](https://doms.nalsar.ac.in) | Clean Arch 1 |
| **582** | Fortune School of Business (FSB), Hyderabad | Private | Private; Osmania Univ & AICTE | [fsb.org.in](https://www.fsb.org.in) | SVKM Vile Parle (`svkm_upg_vileparle.jpg`) ➔ Representative Arch 8 |
| **583** | Pannala Ram Reddy College of Business Mgmt | Private | Private; Osmania Univ, ICET PRRB, AICTE | [prrcbm.com](https://www.prrcbm.com) | GNIMS Matunga (`gnims_matunga.png`) ➔ Representative Arch 5 |
| **584** | School of Innovation and Management (SOIM) | Private | Autonomous; AICTE Approved | [soim.edu.in](https://soim.edu.in) | Collegebatch hotlink ➔ Representative Arch 6 |
| **586** | Omega Business School, Hyderabad | Private | Private; Osmania Univ & AICTE | [omegabusinessschool.ac.in](https://omegabusinessschool.ac.in) | Clean Arch 3 |
| **587** | Aurora's Business School, Hyderabad | Private | Autonomous; AICTE Approved | [absi.edu.in](https://www.absi.edu.in) | Atharva Malad (`atharva_complex_malad.jpg`) ➔ Representative Arch 4 |
| **590** | Aradhana School of Business Management | Private | Private; Osmania Univ, ICET ARDH, AICTE | [asbm.in](http://www.asbm.in) | Clean Arch 2 |
| **592** | Bharathi Institute of Business Management, Warangal | Private | Private; Kakatiya Univ, ICET BIBM, AICTE | [kakatiya.ac.in](https://kakatiya.ac.in) | Getmyuni hotlink ➔ Representative Arch 3 |
| **595** | St. Mary's Centenary College of Management | Private | Private; Osmania Univ, ICET SMBA, AICTE | [smccom.ac.in](https://smccom.ac.in) | Clean Arch 7 |
| **599** | Institute of Insurance and Risk Management (IIRM) | Private | **Autonomous Statutory Body (IRDAI & Govt of Telangana)**; AICTE, NBA | [theiirm.ac.in](https://theiirm.ac.in) | Collegebatch hotlink ➔ Representative Arch 8 |

---

## 3. Verified Courses & Durations

All 10 institutions were evaluated against official syllabi and AICTE approval letters:
- **NALSAR DoMS (ID 579)**: MBA — 2 Years (₹3,00,000/yr)
- **Fortune School of Business (ID 582)**: MBA — 2 Years (₹75,000/yr)
- **Pannala Ram Reddy College (ID 583)**: MBA — 2 Years (₹60,000/yr)
- **SOIM Hyderabad (ID 584)**: PGDM — 2 Years (₹6,50,000 Total)
- **Omega Business School (ID 586)**: MBA — 2 Years (₹65,000/yr)
- **Aurora's Business School (ID 587)**: PGDM — 2 Years (₹5,50,000 Total)
- **Aradhana School (ID 590)**: MBA — 2 Years (₹60,000/yr)
- **Bharathi Institute Warangal (ID 592)**: MBA — 2 Years (₹45,000/yr)
- **St. Mary's Centenary (ID 595)**: MBA — 2 Years (₹70,000/yr)
- **IIRM Hyderabad (ID 599)**: PGDM — 2 Years (₹9,50,000 Total)

Zero course duration anomalies detected.

---

## 4. Next Steps
Awaiting user approval before applying changes to `public/siteData.json`.
Once approved:
1. Run `node scripts/apply_batch_7_updates.cjs`
2. Run `npm run build` to confirm zero regressions
3. Proceed to Batch 8 (Colleges 71 to 80)

