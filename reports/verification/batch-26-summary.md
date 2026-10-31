# Batch 26 Institutional Verification & Data Audit Summary

**Audit Date**: October 31, 2026  
**Auditor**: ATLAS Chief Architect & Guardian Verification Unit  
**Status**: COMPLETE ✅ (10 / 10 Institutions Fully Verified)  
**Cumulative Verified Total**: 260 / 12,660 Institutions (26.0% of 1,000 Roadmap)

---

## 1. Batch Overview & Regional Scope

Batch 26 covers 10 prominent management and technical institutions across **Odisha** (Bhubaneswar, Khordha, Cuttack, Berhampur).

---

## 2. High-Impact Fixes & Governance Corrections

1. **Purged Out-of-State Domain Corruptions & Scraper Defects**:
   - **International Management Institute (IMI Bhubaneswar, ID 2278)**: The scraper had assigned the domain of Banaras Hindu University (`https://www.bhu.ac.in`) to premier B-school IMI Bhubaneswar! Purged this critical defect and updated to official portal `https://www.imibh.edu.in`.
   - **Sri Sri University (ID 2292)**: The scraper saved a raw Google Search query URL (`https://www.google.com/search?q=SRI%20SRI%20UNIVERSITY...`) as the official website. Replaced with authentic university portal `https://srisriuniversity.edu.in`.
   - **Gayatri Institute of Management (ID 2250)**: Purged domain conflict where Goa Institute of Management's domain (`gim.edu.in`) was erroneously mapped to this Bhubaneswar institute. Replaced with authentic portal `http://www.gimmba.in`.
   - **Gayatri Institute of Science and Technology (GIST Berhampur, ID 2246)**: Fixed 4-year BCA duration error to standard 3-year bachelor degree; updated website to `https://www.gistmba.in`.

2. **Purged Three Severe Cross-State Photo Leaks**:
   - **ID 2254 (Oxford College of Management, Bhubaneswar)**: Purged IIIT Bangalore photo leak; remapped to `/images/campuses/campus_architecture_5.jpg`.
   - **ID 2256 (Radhakrishna Institute of Technology and Engineering, Bhubaneswar)**: Purged BMS Bangalore photo leak; remapped to `/images/campuses/campus_architecture_6.jpg`.
   - **ID 2262 (Ashaa Kirann Business School, Bhubaneswar)**: Purged SVKM UPG Vile Parle Mumbai photo leak; remapped to `/images/campuses/campus_architecture_8.jpg`.

3. **Repaired All Truncated Fake Domains**:
   - Replaced fake `.edu.in` strings with authentic institutional domains (`gistmba.in`, `jbsodisha.org`, `gimmba.in`, `gims.in.net`, `oxfordbbsr.com`, `riteindia.edu.in`, `uitm.co.in`, `ashaakiranngroup.com`, `imibh.edu.in`, `srisriuniversity.edu.in`).

4. **Populated Missing City Attributes**:
   - Resolved all missing city values (`Bhubaneswar`, `Berhampur`, `Cuttack`).

---

## 3. Institutions Audited in Batch 26

| ID | Institution Name | City | State | Type | Website | Image Status |
|:---|:---|:---|:---|:---|:---|:---|
| **2246** | Gayatri Institute of Science and Technology | Berhampur | Odisha | Private (BPUT Affiliated) | `gistmba.in` | Architecture Asset Remap |
| **2249** | Jayadeva Business School | Bhubaneswar | Odisha | Private (AICTE PGDM) | `jbsodisha.org` | Architecture Asset Remap |
| **2250** | Gayatri Institute of Management | Bhubaneswar | Odisha | Private (BPUT Affiliated) | `gimmba.in` | Domain Conflict Purged |
| **2252** | Ganesh Institute of Management Studies | Bhubaneswar | Odisha | Private (BPUT Affiliated) | `gims.in.net` | Architecture Asset Remap |
| **2254** | Oxford College of Management | Bhubaneswar | Odisha | Private (BPUT Affiliated) | `oxfordbbsr.com` | Leak Purged (IIIT Bangalore) |
| **2256** | Radhakrishna Inst. of Tech. & Engineering (RITE) | Bhubaneswar | Odisha | Private (BPUT Affiliated) | `riteindia.edu.in` | Leak Purged (BMS Bangalore) |
| **2261** | Utkal Institute of Technology and Management | Bhubaneswar | Odisha | Private (BPUT Affiliated) | `uitm.co.in` | Aggregator Asset Remapped |
| **2262** | Ashaa Kirann Business School | Bhubaneswar | Odisha | Private (AICTE PGDM) | `ashaakiranngroup.com` | Leak Purged (SVKM UPG Mumbai) |
| **2278** | International Management Institute (IMI) | Bhubaneswar | Odisha | Private (AMBA Accredited) | `imibh.edu.in` | BHU Domain Leak Purged |
| **2292** | Sri Sri University - Faculty of Management | Cuttack | Odisha | Private (UGC Recognized) | `srisriuniversity.edu.in` | Google Search URL Purged |

---

## 4. Verification Checkpoints

- **Data Integrity**: Cleaned in `public/siteData.json` with strict type definitions and verified graduate management curricula.
- **Audit Logs Appended**:
  - `reports/verification/college-verification.csv` (+10 entries)
  - `reports/verification/course-verification.csv` (+12 course rows)
  - `reports/verification/image-verification.csv` (+10 forensics rows)
  - `reports/verification/progress.json` (completed_count: 260)
  - `reports/verification/all_verified_colleges.json` & `all_verified_colleges.md` refreshed to 260.
- **Production Build**: Passed in 3.29s with zero errors.
