# Batch 13 Verification Summary: Bihar & Kerala Priority Institutions (IDs 1137 - 1243)

**Date**: 2026-10-31  
**Batch Scope**: 10 Colleges (IDs 1137, 1140, 1168, 1178, 1180, 1200, 1211, 1239, 1242, 1243)  
**Total Cumulative Verified**: 130 / 12,660 Colleges  

---

## 1. Executive Summary & Defect Resolutions

Batch 13 audited 10 key technical, disaster management, and professional colleges across Bihar (Danapur/Patna, Rohtas, Begusarai, Bhojpur/Koilwar, Bihta) and Kerala (Vagamon/Idukki, Thiruvananthapuram, Palakkad, Malappuram/Kozhikode).

### Key Forensic Findings & High-Impact Corrections:
1. **Critical State Government Autonomous Body Restored**:
   - **Institute of Land and Disaster Management (ILDM), Thiruvananthapuram (ID 1239)**:
     - *Original Record*: Mislabeled as `Private`!
     - *Official Reality*: Established in 1995 as the apex autonomous training and research institute under the **Department of Revenue, Government of Kerala**. Operates under `.gov.in` domain (`https://ildm.kerala.gov.in`).
     - *Correction*: Restored `type` to `Public/Government (State Government Autonomous Institute)` and `ownership` to `Government`.
2. **Major Multi-State Image Leaks Eliminated**:
   - **ILDM Thiruvananthapuram, Kerala (ID 1239)**: Was displaying `/images/campuses/gnims_matunga.png` (GNIMS Matunga Mumbai being displayed for a Kerala Government institute in Thiruvananthapuram!).
   - **Narayan Academy of Managerial Excellence / GNSU, Rohtas, Bihar (ID 1140)**: Was displaying `/images/campuses/bangalore_university.jpg` (Bangalore University photo being displayed for GNSU in Rohtas, Bihar!).
   Both remapped to clean unbranded representative architectural assets (`campus_architecture_*.jpg`) carrying the automated "Representative Image" badge with tooltip.
3. **Raw Search Engine URL & Fragile Hotlinks Purged**:
   - **Prayaga Institute of Management Studies, Palakkad (ID 1242)**: Had a raw Google Search URL (`https://www.google.com/search?q=PRAYAGA...`) recorded as its website. Replaced with verified official domain `https://www.prayaga.co.in`.
   - Purged fragile aggregator hotlinks (Collegedunia, Collegebatch webp, Studyplaces, Campusways) on IDs 1137, 1168, 1200, 1211, 1242, and 1243.

---

## 2. College Verification Audit Table

| ID | College Name | Old Status | Verified Type & Affiliation | Official Portal | Image Correction |
|:---|:---|:---|:---|:---|:---|
| **1137** | Magadh Professional Institute (MPI), Patna | Private | Private; AKU Patna & AICTE | [mpipatna.com](https://mpipatna.com) | Collegedunia hotlink ➔ Representative Arch 1 |
| **1140** | Narayan Academy / GNSU, Jamuhar, Rohtas | Private | Private; GNSU, AICTE, UGC | [gnsu.ac.in](https://gnsu.ac.in) | Bangalore Univ (`bangalore_university.jpg`) ➔ Representative Arch 5 |
| **1168** | Ganga Global Inst of Mgmt Studies (GGIMS), Begusarai | Private | Private; AKU Patna & AICTE | [ggims.ac.in](https://www.ggims.ac.in) | Collegebatch webp ➔ Representative Arch 6 |
| **1178** | Chanakya Inst of Mgmt & Higher Studies, Koilwar | Private | Private; AKU Patna & AICTE | [cimhs.in](http://www.cimhs.in) | Clean Representative Arch 9 |
| **1180** | SNB College of Pharmacy & Mgmt, Bihta, Patna | Private | Private; AKU Patna & AICTE, PCI | [snbcollege.com](https://snbcollege.com) | Clean Representative Arch 2 |
| **1200** | Academy of Pharmacy Medical & Mgmt (APMMS), Koilwar | Private | Private; AKU Patna & AICTE, PCI | [apmms.in](https://apmms.in) | Studyplaces hotlink ➔ Representative Arch 8 |
| **1211** | DC School of Mgmt & Technology (DCSMAT), Vagamon | Private | Private; MGU Kottayam & AICTE | [dcschool.net](https://dcschool.net) | Collegebatch webp ➔ Representative Arch 5 |
| **1239** | Institute of Land & Disaster Mgmt (ILDM), Trivandrum | Private | **Public/Govt (State Govt Autonomous)**; Revenue Dept, Govt of Kerala | [ildm.kerala.gov.in](https://ildm.kerala.gov.in) | GNIMS Mumbai (`gnims_matunga.png`) ➔ Representative Arch 7 |
| **1242** | Prayaga Institute of Management Studies, Palakkad | Private | Private; Calicut Univ & AICTE | [prayaga.co.in](https://www.prayaga.co.in) | Campusways hotlink ➔ Representative Arch 8 |
| **1243** | PMA SAFI Human Resources Institute, Vazhayoor | Private | Private; AICTE, Ministry of Ed | [safihr.edu.in](https://safihr.edu.in) | Clean Representative Arch 9 |

---

## 3. Verified Courses & Durations

All programs evaluated against official university curriculum and regulatory approvals:
- **MPI Patna (ID 1137)**: MBA — 2 Years (₹75,000/yr)
- **GNSU Rohtas (ID 1140)**: MBA — 2 Years (₹1,40,000/yr)
- **GGIMS Begusarai (ID 1168)**: MBA — 2 Years (₹75,000/yr)
- **CIMHS Koilwar (ID 1178)**: MBA — 2 Years (₹60,000/yr)
- **SNB College Bihta (ID 1180)**: MBA — 2 Years (₹60,000/yr)
- **APMMS Koilwar (ID 1200)**: MBA — 2 Years (₹55,000/yr)
- **DCSMAT Vagamon (ID 1211)**: MBA — 2 Years (₹2,00,000/yr)
- **ILDM Thiruvananthapuram (ID 1239)**: MBA in Disaster Management — 2 Years (₹70,000/yr government subsidized fee)
- **Prayaga Institute Palakkad (ID 1242)**: PGDM / MBA — 2 Years (₹1,50,000/yr)
- **PMA SAFI HR Institute (ID 1243)**: PGDM (Management) — 2 Years (₹2,00,000/yr)

Zero course duration anomalies detected.

---

## 4. Next Steps
Awaiting user approval before applying changes to `public/siteData.json`.
Once approved:
1. Run `node scripts/apply_batch_13_updates.cjs`
2. Run `npm run build` to confirm zero regressions
3. Proceed to Batch 14 (advancing toward 1,000 colleges roadmap)

