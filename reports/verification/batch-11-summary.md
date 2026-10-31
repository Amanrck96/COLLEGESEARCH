# Batch 11 Verification Summary: Haryana NCR & Regional Institutions (IDs 858 - 900)

**Date**: 2026-10-31  
**Batch Scope**: 10 Colleges (IDs 858, 859, 863, 868, 869, 870, 893, 894, 899, 900)  
**Total Cumulative Verified**: 110 / 12,660 Colleges  

---

## 1. Executive Summary & Defect Resolutions

Batch 11 targeted 10 technical, management, and degree colleges across Haryana (Gurugram/Gurgaon, Faridabad, Palwal, Hodal, Karnal, and Rewari). Every institution was audited against official institutional portals and university affiliation records.

### Key Forensic Findings & High-Impact Corrections:
1. **Four Severe Cross-State Mumbai Image Leaks Eliminated**:
   - **Rattan Institute of Management (RIM), Faridabad (ID 859)**: Was displaying `/images/campuses/campus_cu_shah_mumbai.png` (CU Shah College in Mumbai being displayed for an institute in Faridabad, Haryana!).
   - **SOIL School of Business Design, Manesar, Gurugram (ID 869)**: Was displaying `/images/campuses/campus_mgm_navi_mumbai.jpg` (MGM Institute of Health Sciences Navi Mumbai being displayed for SOIL Business School in Manesar!).
   - **JK Institute of Management Technology, Karnal (ID 870)**: Was displaying `/images/campuses/sheila_raheja_bandra.webp` (Sheila Raheja School of Architecture in Bandra, Mumbai being displayed in Karnal, Haryana!).
   - **Saraswati Mahila Mahavidyalaya, Palwal (ID 893)**: Was displaying `/images/campuses/svkm_upg_vileparle.jpg` (SVKM Usha Pravin Gandhi College in Vile Parle, Mumbai being displayed for a women's college in Palwal, Haryana!).
   All four cross-institution leaks were remapped to clean unbranded representative architectural assets (`campus_architecture_*.jpg`) carrying the automated "Representative Image" badge with tooltip.
2. **Purged Fragile & Blocked Aggregator Hotlinks**:
   - **Indraprasth Institute of Management, Gurugram (ID 900)**: Was hotlinking a 403-blocked Collegedunia image.
   - **Delhi Institute / FCEM Faridabad (ID 863)**: Collegedekho hotlink purged.
   - **Pt. L.R. College Faridabad (ID 894)**: Jagranjosh hotlink purged.
   - **Shaheed Capt D K Khola College Rewari (ID 899)**: Studyclap hotlink purged.
3. **Official Websites & Contacts Fully Resolved**:
   - Replaced aggregator placeholder links with verified portals: `rmsbusinessschool.org`, `rimseekri.org.in`, `fcem.in`, `maaomwati.com`, `soil.edu.in`, `jkinstitutes.com`, `smmpalwal.com`, `ptlrcollege.com`, `kholacollege.com`, and `iimgurgaon.com`.

---

## 2. College Verification Audit Table

| ID | College Name | Type & Affiliation | Official Portal | Verified Contact | Image Correction |
|:---|:---|:---|:---|:---|:---|
| **858** | RMS Business School, Gurugram | Private; Gurugram Univ & AICTE | [rmsbusinessschool.org](https://rmsbusinessschool.org) | `+91-9091454647`<br>`info@rmsbusinessschool.org` | Clean Representative Arch 9 |
| **859** | Rattan Institute of Management (RIM), Seekri, Faridabad | Private; MDU Rohtak & AICTE | [rimseekri.org.in](https://rimseekri.org.in) | `+91-8810676939`<br>`info@rimseekri.org.in` | CU Shah Mumbai (`campus_cu_shah_mumbai.png`) ➔ Representative Arch 8 |
| **863** | Delhi Inst of Tech, Mgmt & Res (FCEM), Faridabad | Private; YMCA / MDU & AICTE | [fcem.in](https://www.fcem.in) | `+91-9205129827`<br>`fcemfbd@gmail.com` | Collegedekho hotlink ➔ Representative Arch 7 |
| **868** | Maa Omwati Inst of Mgmt & Tech (MOIMT), Palwal | Private; MDU Rohtak & AICTE | [maaomwati.com](https://www.maaomwati.com) | `+91-9050654655`<br>`administrator1@maaomwati.com` | Clean Representative Arch 4 |
| **869** | SOIL School of Business Design, Manesar, Gurugram | Private; AICTE, Ministry of Ed | [soil.edu.in](https://www.soil.edu.in) | `+91-9717280018`<br>`pgdm@schoolofbusinessdesign.com` | MGM Navi Mumbai (`campus_mgm_navi_mumbai.jpg`) ➔ Representative Arch 3 |
| **870** | JK Institute of Management & Technology (JKIMT), Karnal | Private; Kurukshetra Univ & AICTE | [jkinstitutes.com](https://jkinstitutes.com) | `+91-9355562120`<br>`info@jkinstitutes.com` | Sheila Raheja Mumbai (`sheila_raheja_bandra.webp`) ➔ Representative Arch 6 |
| **893** | Saraswati Mahila Mahavidyalaya (SMM), Palwal | Private; MDU Rohtak, NAAC B+, UGC | [smmpalwal.com](https://www.smmpalwal.com) | `01275-253319`<br>`saraswatipalwal@gmail.com` | SVKM Vile Parle Mumbai (`svkm_upg_vileparle.jpg`) ➔ Representative Arch 8 |
| **894** | Pt. L.R. College of Management, Ballabgarh, Faridabad | Private; MDU Rohtak & AICTE | [ptlrcollege.com](https://ptlrcollege.com) | `+91-9540028827`<br>`ptlrcm@gmail.com` | Jagranjosh hotlink ➔ Representative Arch 1 |
| **899** | Shaheed Capt. D.K. Khola College of Mgmt, Rewari | Private; IGU Meerpur, AICTE, NCTE | [kholacollege.com](https://www.kholacollege.com) | `+91-9416382959`<br>`khola.satish@gmail.com` | Studyclap hotlink ➔ Representative Arch 2 |
| **900** | Indraprasth Institute of Management (IIMG), Gurugram | Private; AICTE, Ministry of Ed | [iimgurgaon.com](http://www.iimgurgaon.com) | `+91-8448894230`<br>`admission@iimgurgaon.com` | Blocked Collegedunia hotlink ➔ Representative Arch 9 |

---

## 3. Verified Courses & Durations

All programs evaluated against official university curriculum and AICTE approvals:
- **RMS Business School (ID 858)**: MBA / PGDM — 2 Years (₹1,50,000/yr)
- **RIM Faridabad (ID 859)**: MBA — 2 Years (₹60,000/yr)
- **FCEM Faridabad (ID 863)**: MBA — 2 Years (₹60,000/yr)
- **MOIMT Palwal (ID 868)**: MBA — 2 Years (₹55,000/yr)
- **SOIL Business Design (ID 869)**: PGDM — 2 Years (₹7,00,000/yr)
- **JKIMT Karnal (ID 870)**: MBA — 2 Years (₹55,000/yr)
- **SMM Palwal (ID 893)**: PG Management/Commerce — 2 Years (₹30,000/yr)
- **Pt. LR College (ID 894)**: MBA — 2 Years (₹70,000/yr)
- **Shaheed Capt Khola College (ID 899)**: MBA — 2 Years (₹50,000/yr); B.Tech / Pharmacy — 4 Years
- **IIMG Gurugram (ID 900)**: PGDM — 2 Years (₹2,75,000/yr)

Zero course duration anomalies detected.

---

## 4. Next Steps
Awaiting user approval before applying changes to `public/siteData.json`.
Once approved:
1. Run `node scripts/apply_batch_11_updates.cjs`
2. Run `npm run build` to confirm zero regressions
3. Proceed to Batch 12

