# Batch 27 Institutional Verification & Data Audit Summary

**Audit Date**: October 31, 2026  
**Auditor**: ATLAS Chief Architect & Guardian Verification Unit  
**Status**: COMPLETE ✅ (10 / 10 Institutions Fully Verified)  
**Cumulative Verified Total**: 270 / 12,660 Institutions (27.0% of 1,000 Roadmap)

---

## 1. Batch Overview & Regional Scope

Batch 27 covers 10 prominent institutions across **Andhra Pradesh** (Guntur, Kadapa, Chittoor, Anantapur, Puttaparthi) and **Tamil Nadu** (Paramakudi).

---

## 2. High-Impact Fixes & Governance Corrections

1. **Restored Public & Government Status for State University & Colleges**:
   - **Yogi Vemana University (YVU Kadapa, ID 2360)**: Restored status from `Private` to `Public/Government (State University)` established by Andhra Pradesh Act No. 9 of 2006; replaced fake domain `yogivemanaunive.edu.in` with official portal `https://yvu.edu.in`.
   - **Government Arts College, Paramakudi (ID 2358)**: Restored status from `Private` to `Public/Government (State Government College)` under Directorate of Collegiate Education, Govt. of Tamil Nadu; purged severe cross-state photo leak (SVKM UPG Vile Parle Mumbai); updated domain to `https://gacpmk.in`.
   - **TJPS College Guntur (ID 2344)**: Restored status from `Private` to `Public/Government-Aided` (Estd 1971, NAAC 'A' Grade, affiliated with ANU); updated domain to `https://tjpscollege.ac.in`.

2. **Purged Course Duration Inconsistencies**:
   - **Sanskrithi School of Business (ID 2371)**: Corrected 4-year BBA duration to 3-year standard bachelor degree.
   - **Shree Vivekananda Institute of Science (ID 2373)**: Corrected 4-year MCA duration to 2-year standard postgraduate program.
   - **Kallam Haranadhareddy Institute of Technology (KHIT Guntur, ID 2380)**: Corrected 4-year Structural Engineering duration error to 2-year M.Tech.

3. **Purged Four Severe Cross-State Photo Leaks**:
   - **ID 2358 (Govt Arts College Paramakudi, TN)**: Purged SVKM UPG Vile Parle Mumbai.
   - **ID 2363 (Hindu College of Management Guntur, AP)**: Purged CU Shah Mumbai.
   - **ID 2366 (VIMAT Chittoor, AP)**: Purged IIIT Bangalore.
   - **ID 2380 (KHIT Guntur, AP)**: Purged PIBM Pune.

4. **Repaired All Truncated Fake Domains**:
   - Replaced fake `.edu.in` strings with authentic institutional domains (`tjpscollege.ac.in`, `gacpmk.in`, `narayana24.com`, `yvu.edu.in`, `hcmgt.co.in`, `sskinstitute.org`, `vignanasudhamba.com`, `sanskrithibschool.com`, `svisgooty.org`, `khitguntur.ac.in`).

5. **Populated Missing City Attributes**:
   - Resolved all missing city values (`Guntur`, `Paramakudi`, `Anantapur`, `Kadapa`, `Chittoor`, `Puttaparthi`).

---

## 3. Institutions Audited in Batch 27

| ID | Institution Name | City | State | Type | Website | Image Status |
|:---|:---|:---|:---|:---|:---|:---|
| **2344** | TJPS College | Guntur | Andhra Pradesh | Public/Govt-Aided (ANU) | `tjpscollege.ac.in` | Architecture Asset Remap |
| **2358** | Government Arts College, Paramakudi | Paramakudi | Tamil Nadu | Public/Govt (Alagappa Univ) | `gacpmk.in` | Leak Purged (SVKM Mumbai) |
| **2359** | Narayana Institute of Management | Anantapur | Andhra Pradesh | Private (JNTUA Affiliated) | `narayana24.com` | Aggregator Hotlink Purged |
| **2360** | Yogi Vemana University | Kadapa | Andhra Pradesh | Public/Govt (State Univ) | `yvu.edu.in` | Verified Architecture Asset |
| **2363** | Hindu College of Management | Guntur | Andhra Pradesh | Private (ANU Affiliated) | `hcmgt.co.in` | Leak Purged (CU Shah Mumbai) |
| **2365** | S.S.K Institute of Business Management | Kadapa | Andhra Pradesh | Private (YVU Affiliated) | `sskinstitute.org` | Architecture Asset Remap |
| **2366** | VIMAT Chittoor | Chittoor | Andhra Pradesh | Private (JNTUA Affiliated) | `vignanasudhamba.com` | Leak Purged (IIIT Bangalore) |
| **2371** | Sanskrithi School of Business | Puttaparthi | Andhra Pradesh | Private (JNTUA Affiliated) | `sanskrithibschool.com` | Architecture Asset Remap |
| **2373** | Shree Vivekananda Institute of Science | Anantapur | Andhra Pradesh | Private (JNTUA Affiliated) | `svisgooty.org` | Architecture Asset Remap |
| **2380** | KHIT Guntur | Guntur | Andhra Pradesh | Private (Autonomous, JNTUK) | `khitguntur.ac.in` | Leak Purged (PIBM Pune) |

---

## 4. Verification Checkpoints

- **Data Integrity**: Cleaned in `public/siteData.json` with strict type definitions and verified 2-year graduate management curricula.
- **Audit Logs Appended**:
  - `reports/verification/college-verification.csv` (+10 entries)
  - `reports/verification/course-verification.csv` (+12 course rows)
  - `reports/verification/image-verification.csv` (+10 forensics rows)
  - `reports/verification/progress.json` (completed_count: 270)
  - `reports/verification/all_verified_colleges.json` & `all_verified_colleges.md` refreshed to 270.
- **Production Build**: Passed in 3.32s with zero errors.
