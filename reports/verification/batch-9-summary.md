# Batch 9 Verification Summary: Tamil Nadu & Uttar Pradesh Priority Institutions (IDs 656 - 731)

**Date**: 2026-10-31  
**Batch Scope**: 10 Colleges (IDs 656, 658, 660, 661, 669, 671, 675, 721, 722, 731)  
**Total Cumulative Verified**: 90 / 12,660 Colleges  

---

## 1. Executive Summary & Defect Resolutions

Batch 9 focused on 10 prominent management and technical colleges across Tamil Nadu (Chennai, Coimbatore, Namakkal, Vellore/Ranipet) and Uttar Pradesh (Ghaziabad, Lucknow). Every college was audited against official institutional domains.

### Key Forensic Findings & Corrections:
1. **Critical Ownership / Type Misclassification Fixed**:
   - **Government Arts and Science College, RK Nagar, Chennai (ID 658)**: Originally mislabeled as `Private`. This is an official **State Government College** established and funded by the Directorate of Collegiate Education, Government of Tamil Nadu. Corrected to `Public/Government (State Government College)` with subsidized tuition (~₹8,000/year).
2. **Major Multi-State Image Leaks Eliminated**:
   - **Government Arts and Science College, RK Nagar, Chennai (ID 658)**: Was displaying `/images/campuses/bunts_sangha_mumbai.jpeg` (Bunts Sangha College in Kurla, Mumbai being shown in Chennai, Tamil Nadu!).
   - **International Institute for Special Education (IISE), Lucknow (ID 731)**: Was displaying `/images/campuses/svkm_upg_vileparle.jpg` (SVKM Usha Pravin Gandhi College in Vile Parle, Mumbai being shown in Lucknow, Uttar Pradesh!).
   Both remapped to clean unbranded representative architectural assets (`campus_architecture_*.jpg`) with the automated "Representative Image" badge.
3. **Broken & Fragile Aggregator Hotlinks Purged**:
   - Replaced fragile aggregator hotlinks on VIIMS Tiruchengode (ID 656), SKCET Coimbatore (ID 669), TNCE Coimbatore (ID 671), DG Vaishnav College Chennai (ID 675), and SITM Lucknow (ID 722) with clean, high-availability local representative assets.

---

## 2. College Verification Audit Table

| ID | College Name | Old Status | Verified Type & Affiliation | Official Website | Image Correction |
|:---|:---|:---|:---|:---|:---|
| **656** | VIIMS, Tiruchengode | Private | Private; Anna Univ & AICTE, NAAC | [viims.ac.in](https://viims.ac.in) | Studyclap hotlink ➔ Representative Arch 8 |
| **658** | Government Arts and Science College, RK Nagar, Chennai | Private | **Public/Govt (State Govt College)**; Univ of Madras, Govt of TN | [gascrknagar.co.in](https://gascrknagar.co.in) | Bunts Sangha Mumbai (`bunts_sangha_mumbai.jpeg`) ➔ Representative Arch 7 |
| **660** | Sree Saraswathi Thyagaraja College (STC), Pollachi | Private | Private; Bharathiar Univ (Autonomous), NAAC A+, AICTE | [stc.ac.in](https://www.stc.ac.in) | Clean Arch 4 |
| **661** | Global Business School, Melvisharam | Private | Private; Thiruvalluvar Univ & AICTE | [globalbschool.co.in](https://www.globalbschool.co.in) | Clean Arch 5 |
| **669** | SKCET, Coimbatore | Private | Private; Anna Univ (Autonomous), NAAC A Grade, AICTE | [skcet.ac.in](https://www.skcet.ac.in) | Campusoption hotlink ➔ Representative Arch 3 |
| **671** | Tamilnadu College of Engineering (TNCE), Coimbatore | Private | Private; Anna Univ & AICTE, NAAC | [tnce.ac.in](https://tnce.ac.in) | Yuvamind hotlink ➔ Representative Arch 1 |
| **675** | DG Vaishnav College (Autonomous), Chennai | Private | Private; Univ of Madras (Autonomous), NAAC A++, AICTE | [dgvaishnavcollege.edu.in](https://www.dgvaishnavcollege.edu.in) | Joonsquare hotlink ➔ Representative Arch 2 |
| **721** | Jaipuria Institute of Management, Indirapuram, Ghaziabad | Private | Private; AKTU & AICTE, NAAC A Grade | [jaipuriamba.edu.in](https://jaipuriamba.edu.in) | Clean Arch 7 |
| **722** | Saroj Institute of Technology & Management (SITM), Lucknow | Private | Private; AKTU & AICTE, Code 123 | [sitmlko.org](https://sitmlko.org) | Collegebatch hotlink ➔ Representative Arch 8 |
| **731** | IISE, Lucknow | Private | Private; AKTU & AICTE, NAAC | [iiseindia.com](https://www.iiseindia.com) | SVKM Vile Parle Mumbai (`svkm_upg_vileparle.jpg`) ➔ Representative Arch 9 |

---

## 3. Verified Courses & Durations

All 10 institutions were evaluated against official syllabi and AICTE approval letters:
- **VIIMS Tiruchengode (ID 656)**: MBA — 2 Years (₹50,000/yr)
- **GASC RK Nagar (ID 658)**: MBA — 2 Years (₹8,000/yr government fee)
- **STC Pollachi (ID 660)**: MBA — 2 Years (₹60,000/yr)
- **Global Business School (ID 661)**: MBA — 2 Years (₹45,000/yr)
- **SKCET Coimbatore (ID 669)**: MBA — 2 Years (₹60,000/yr)
- **TNCE Coimbatore (ID 671)**: MBA — 2 Years (₹50,000/yr)
- **DG Vaishnav College (ID 675)**: MBA — 2 Years (₹65,000/yr)
- **Jaipuria Ghaziabad (ID 721)**: MBA — 2 Years (₹4,50,000 Total)
- **SITM Lucknow (ID 722)**: MBA — 2 Years (₹65,000/yr)
- **IISE Lucknow (ID 731)**: MBA — 2 Years (₹70,000/yr)

Zero course duration anomalies detected.

---

## 4. Next Steps
Awaiting user approval before applying changes to `public/siteData.json`.
Once approved:
1. Run `node scripts/apply_batch_9_updates.cjs`
2. Run `npm run build` to confirm zero regressions
3. Proceed to Batch 10 (Colleges 91 to 100 — reaching the 100-college milestone)

