# Batch 24 Institutional Verification & Data Audit Summary

**Audit Date**: October 31, 2026  
**Auditor**: ATLAS Chief Architect & Guardian Verification Unit  
**Status**: COMPLETE ✅ (10 / 10 Institutions Fully Verified)  
**Cumulative Verified Total**: 240 / 12,660 Institutions (24.0% of 1,000 Roadmap)

---

## 1. Batch Overview & Regional Scope

Batch 24 covers 10 historic and prominent institutions across **Uttarakhand** (Haridwar, Roorkee, Bhimtal/Nainital, Pantnagar, Dehradun) and **Odisha** (Bhubaneswar, Balasore).

---

## 2. High-Impact Fixes & Governance Corrections

1. **Restored Four Premier Public & Central Autonomous Institutions**:
   - **Gurukula Kangri (Deemed to be University, ID 2162)**: Founded in 1902 by Swami Shraddhanand; 100% funded by UGC, Govt of India; restored from `Private` to `Public/Government (Deemed to be University)`; purged severe cross-state photo leak (BMS Bangalore); updated official web domain to `https://www.gkv.ac.in`.
   - **Department of Management Studies, Kumaun University (DMS Bhimtal, ID 2187)**: Restored from `Private` to `Public/Government (State University Department)` under Kumaun University, Nainital; purged severe photo leak (GNIMS Matunga Mumbai); updated domain to `https://dmsbhimtal.com`.
   - **College of Agribusiness Management, GBPUAT Pantnagar (CABM Pantnagar, ID 2191)**: Restored from `Private` to `Public/Government (Constituent College of State Agricultural University)` under iconic G.B. Pant University of Agriculture & Technology (Estd 1960); updated domain to `https://www.cabm.ac.in`.
   - **Institute of Cooperative Management, Dehradun (ICM Dehradun, ID 2197)**: Restored from `Private` to `Public/Government (Autonomous Central Government Institute)` under National Council for Cooperative Training (NCCT), Ministry of Cooperation, Govt. of India; updated domain to `https://icmdehradun.com`.

2. **Purged Six Severe Cross-State Photo Leaks**:
   - **ID 2162 (Gurukula Kangri, Haridwar)**: Purged BMS Bangalore.
   - **ID 2174 (BSMI Roorkee)**: Purged MGM Navi Mumbai.
   - **ID 2187 (DMS Kumaun University Bhimtal)**: Purged GNIMS Matunga Mumbai.
   - **ID 2215 (BITS Balasore, Odisha)**: Purged SVKM UPG Vile Parle Mumbai.
   - **ID 2219 (Capital Institute of Management, Bhubaneswar)**: Purged MS Ramaiah Bangalore.
   - **ID 2220 (Regional College of Management, Bhubaneswar)**: Purged MS Ramaiah Bangalore.

3. **Repaired All Truncated Fake Domains**:
   - Replaced fake `.edu.in` truncated strings with authentic institutional domains (`gkv.ac.in`, `bsigrouprke.in`, `dmsbhimtal.com`, `cabm.ac.in`, `icmdehradun.com`, `thenalanda.com`, `bharatinstitute.org`, `zenithodisha.com`, `cimsbbsr.org`, `rcm.ac.in`).

4. **Populated Missing City Attributes**:
   - Resolved all missing city values (`Haridwar`, `Roorkee`, `Bhimtal`, `Pantnagar`, `Dehradun`, `Bhubaneswar`, `Balasore`).

---

## 3. Institutions Audited in Batch 24

| ID | Institution Name | City | State | Type | Website | Image Status |
|:---|:---|:---|:---|:---|:---|:---|
| **2162** | Gurukula Kangri (Deemed to be University) | Haridwar | Uttarakhand | Public/Govt (Deemed Univ) | `gkv.ac.in` | Leak Purged (BMS Bangalore) |
| **2174** | Bishamber Sahai Management Institute | Roorkee | Uttarakhand | Private (UTU Affiliated) | `bsigrouprke.in` | Leak Purged (MGM Navi Mumbai) |
| **2187** | Dept. of Management Studies, Kumaun Univ. | Bhimtal | Uttarakhand | Public/Govt (State Univ Dept) | `dmsbhimtal.com` | Leak Purged (GNIMS Matunga) |
| **2191** | College of Agribusiness Management, GBPUAT | Pantnagar | Uttarakhand | Public/Govt (Constituent College) | `cabm.ac.in` | Crawler Image Purged |
| **2197** | Institute of Cooperative Management | Dehradun | Uttarakhand | Public/Govt (Central Autonomous) | `icmdehradun.com` | Aggregator Hotlink Purged |
| **2209** | Nalanda Institute of Technology | Bhubaneswar | Odisha | Private (NAAC A+, BPUT) | `thenalanda.com` | Scraper Photo Remapped |
| **2215** | Bharat Institute of Technical Studies | Balasore | Odisha | Private (BPUT Affiliated) | `bharatinstitute.org` | Leak Purged (SVKM UPG Vile Parle) |
| **2216** | Zenith School of Management | Bhubaneswar | Odisha | Private (BPUT Affiliated) | `zenithodisha.com` | Architecture Asset Remap |
| **2219** | Capital Institute of Management and Science | Bhubaneswar | Odisha | Private (BPUT Affiliated) | `cimsbbsr.org` | Leak Purged (Ramaiah Bangalore) |
| **2220** | Regional College of Management (RCM) | Bhubaneswar | Odisha | Private (Autonomous 1982) | `rcm.ac.in` | Leak Purged (Ramaiah Bangalore) |

---

## 4. Verification Checkpoints

- **Data Integrity**: Cleaned in `public/siteData.json` with strict type definitions and verified graduate management curricula.
- **Audit Logs Appended**:
  - `reports/verification/college-verification.csv` (+10 entries)
  - `reports/verification/course-verification.csv` (+12 course rows)
  - `reports/verification/image-verification.csv` (+10 forensics rows)
  - `reports/verification/progress.json` (completed_count: 240)
  - `reports/verification/all_verified_colleges.json` & `all_verified_colleges.md` refreshed to 240.
- **Production Build**: Passed in 3.02s with zero errors.
