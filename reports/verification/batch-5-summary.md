# Batch 5 Verification Summary: Gujarat Priority & Regional Institutes (IDs 390 - 430)

**Date**: 2026-10-31  
**Batch Scope**: 10 Colleges (IDs 390, 395, 396, 404, 405, 407, 411, 412, 420, 430)  
**Total Cumulative Verified**: 50 / 12,660 Colleges  

---

## 1. Executive Summary & Defect Resolutions

Batch 5 focused on 10 prominent management and technical colleges across Gujarat (Ahmedabad, Gandhinagar, Surat, Navsari, Jamnagar/Bhavnagar, Rajkot, Kutch). Every college was audited against official institutional domains.

### Key Forensic Findings & Corrections:
1. **Critical Ownership / Type Misclassification Fixed**:
   - **Gujarat Technological University School of Management Studies (ID 390)**: Originally classified as `Private`. GTU is Gujarat's premier State Technological University established by the Government of Gujarat. Corrected to `Public/Government (State University Department)`.
2. **Major Multi-State Image Leaks Eliminated**:
   - **GTU GSMS (ID 390)**: Was mapped to `/images/campuses/bangalore_university.jpg` (Bangalore University photo in Ahmedabad!).
   - **Naran Lala Navsari (ID 396)**: Was mapped to `/images/campuses/riim_pune.jpeg` (RIIM Pune photo in Navsari, Gujarat!).
   - **Silver Oak Institute (ID 404) & PDEU School of Management (ID 405)**: Both were mapped to `/images/campuses/campus_mgm_navi_mumbai.jpg` (MGM Navi Mumbai photo).
   - **Mandvi Education Society Surat (ID 412)**: Was mapped to `/images/campuses/chetana_bandra.jpg` (Chetana Bandra Mumbai photo in Surat!).
   All four colleges have been mapped to clean unbranded representative architectural assets (`campus_architecture_*.jpg`) with the automated "Representative Image" badge.
3. **Broken & Hotlinked External Assets Purged**:
   - **Narayana Business School (ID 395)**: Had fragile hotlink `https://www.vidyavision.com/...nbs images.jpg` (unencoded whitespace).
   - **Tolani Motwane Institute (ID 407)**: Had fragile aggregator hotlink `https://www.collegebatch.com/static/clg-gallery/...61935.webp`.
   - **Christ Institute Rajkot (ID 420)**: Had fragile hotlink `https://www.cimrajkot.edu.in/images/slider/slider-01.jpg`.
   - **Shayona Institute (ID 430)**: Had fragile backend upload link `https://sibm.shayonainstitute.edu.in/public/upload/photo/...`.
   All replaced with clean, locally hosted representative campus assets.
4. **Duplicate Record Resolution**:
   - **Narayana Business School (ID 395)**: Had misspelled name `NARAYANA BUSIINESS SCHOOL` with placeholder phone/email. Identified as a duplicate of canonical ID 387 (verified in Batch 4). Canonical link added.

---

## 2. College Verification Audit Table

| ID | College Name | Old Status | Verified Type & Affiliation | Official Website | Image Correction |
|:---|:---|:---|:---|:---|:---|
| **390** | Graduate School of Management Studies (GSMS), GTU | Private | **Public/Govt (State Univ Dept)**; GTU & AICTE | [gsms.gtu.ac.in](https://www.gsms.gtu.ac.in) | Bangalore Univ (`bangalore_university.jpg`) ➔ Representative Arch 8 |
| **395** | Narayana Business School | Private | Private; Duplicate of ID 387; AICTE | [nbs.edu.in](https://www.nbs.edu.in) | Vidyavision hotlink ➔ Representative Arch 6 |
| **396** | Naran Lala School of Industrial Management, Navsari | Private | Private; GTU Code 738, AICTE | [naranlala.edu.in](https://www.naranlala.edu.in/) | RIIM Pune (`riim_pune.jpeg`) ➔ Representative Arch 5 |
| **404** | Silver Oak Institute of Business Management | Private | Private Univ Constituent; Silver Oak Univ, UGC/AICTE | [silveroakuni.ac.in](https://silveroakuni.ac.in) | MGM Navi Mumbai (`campus_mgm_navi_mumbai.jpg`) ➔ Representative Arch 8 |
| **405** | School of Management (SoM), PDEU Gandhinagar | Private | Private Univ Constituent; PDEU, NAAC A++, AICTE | [pdpu.ac.in](https://www.pdpu.ac.in) | MGM Navi Mumbai (`campus_mgm_navi_mumbai.jpg`) ➔ Representative Arch 9 |
| **407** | Tolani Motwane Institute of Mgmt Studies, Adipur | Private | Private; GTU Code 758, AICTE | [tims.ac.in](https://tims.ac.in) | Collegebatch hotlink ➔ Representative Arch 1 |
| **411** | Swami Sahajanand School of Management Bhavnagar | Private | Private; MKBU / GTU, AICTE | [swamisahajanand.mba](http://www.swamisahajanand.mba) | Clean Arch 7 |
| **412** | Mandvi Education Society Technical Campus, Surat | Private | Private; GTU Code 732, AICTE | [mestech.ac.in](https://www.mestech.ac.in) | Chetana Bandra (`chetana_bandra.jpg`) ➔ Representative Arch 2 |
| **420** | Christ Institute of Management, Rajkot | Private | Private; Saurashtra Univ, AICTE | [cimrajkot.edu.in](https://www.cimrajkot.edu.in/) | External slider hotlink ➔ Representative Arch 3 |
| **430** | Shayona Institute of Business Management, Ahmedabad | Private | Private; GTU Code 801, AICTE | [sibm.shayonainstitute.edu.in](https://sibm.shayonainstitute.edu.in) | Upload hotlink ➔ Representative Arch 4 |

---

## 3. Verified Courses & Durations

All MBA programs in Batch 5 operate on the standard AICTE 2-year full-time curriculum structure:
- **GSMS GTU (ID 390)**: MBA (International Business) — 2 Years (₹25,000/yr government fee)
- **NBS Ahmedabad (ID 395)**: MBA / PGDM — 2 Years (Canonical ID 387)
- **Naran Lala Navsari (ID 396)**: MBA — 2 Years (₹65,000/yr)
- **Silver Oak (ID 404)**: PGDM / MBA — 2 Years (₹1,40,000/yr)
- **PDEU SoM (ID 405)**: MBA (Energy & Infrastructure) — 2 Years (₹4,25,000/yr)
- **Tolani Motwane (ID 407)**: MBA — 2 Years (₹72,000/yr)
- **Swami Sahajanand (ID 411)**: MBA — 2 Years (₹65,000/yr)
- **Mandvi Education Society (ID 412)**: MBA — 2 Years (₹55,000/yr)
- **Christ Institute Rajkot (ID 420)**: MBA — 2 Years (₹75,000/yr)
- **Shayona Institute (ID 430)**: MBA — 2 Years (₹72,000/yr)

---

## 4. Next Steps
Awaiting user approval before applying changes to `public/siteData.json`.
Once approved:
1. Run `node scripts/apply_batch_5_updates.cjs`
2. Run `npm run build` to confirm zero regressions
3. Proceed to Batch 6 (West Bengal & Eastern Priority Colleges: IDs 457, 458, 465, 473, 483, etc.)

