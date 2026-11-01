# Batch 51 Verification Summary: Premier Management & Apex Engineering Institutes

## Overview
- **Batch Number**: 51
- **Colleges Processed**: 10 (IDs 67, 68, 69, 70, 71, 72, 73, 74, 75, 76)
- **Cumulative Verified Total**: 510 / 1,000 Target (51.0%)
- **Verification Status**: Complete & Applied to `public/siteData.json`
- **Build Verification**: Zero Errors (`vite v8.0.1 built in 1.82s`)

---

## Institutional Audits & Defect Remediation

### 1. Sine International Institute of Technology (SIIT Jaipur) — ID 67
- **Location**: Balawala-Lakhna Road, Via Sanganer Bazar, Jaipur - 302029, Rajasthan
- **Classification**: Private (Engineering College)
- **Defects Remediated**:
  - Replaced third-party external scraper image URL with verified architecture asset.
  - Audited RTU Kota engineering curricula and REAP admissions.

### 2. SR International Institute of Technology (SRIIT Hyderabad) — ID 68
- **Location**: Rampally Dayara, Keesara Mandal, Medchal-Malkajgiri, Hyderabad - 501301, Telangana
- **Classification**: Private (Engineering College)
- **Defects Remediated**:
  - Verified Keesara Mandal campus; audited JNTUH B.Tech CSE, IT, and ECE curricula.

### 3. Indian Institute of Management and Commerce (IIMC Hyderabad) — ID 69
- **Location**: 6-1-91, Adj. to Telephone Bhavan, Khairatabad, Hyderabad - 500004, Telangana
- **Classification**: Private (Autonomous Degree College)
- **Defects Remediated**:
  - Purged photo leak: scraper assigned `/images/campuses/bunts_sangha_mumbai.jpeg` (Bunts Sangha Mumbai) to IIMC Hyderabad in Khairatabad! Assigned verified architecture asset.
  - Updated official website to `iimchyderabad.com`; audited Osmania University commerce curricula.

### 4. Meerut International Institute of Technology (MIIT Meerut) — ID 70
- **Location**: Subharti Puram, NH-58, Delhi-Haridwar Bypass Road, Meerut - 250005, Uttar Pradesh
- **Classification**: Private (Technical Institute)
- **Defects Remediated**:
  - Verified NH-58 Bypass Meerut campus; audited AKTU engineering curricula.

### 5. Nagpur Institute of Technology Polytechnic (NIT Polytechnic Nagpur) — ID 71
- **Location**: Survey No. 13/2, Mahurzari, Near Fetri, Katol Road, Nagpur - 441501, Maharashtra
- **Classification**: Private (Polytechnic College)
- **Defects Remediated**:
  - Corrected misclassification: was erroneously set to Public/Government (is a private institute run by Shri Sai Shikshan Sanstha).
  - Purged photo leak: scraper assigned VNIT Nagpur engineering campus image! Assigned verified architecture asset.
  - Audited MSBTE diploma engineering curricula.

### 6. Nagpur Institute of Technology Graduate School of Management (NIT GSM Nagpur) — ID 72
- **Location**: Survey No. 13/2, Mahurzari, Katol Road, Nagpur - 441501, Maharashtra
- **Classification**: Private (Management Institute)
- **Defects Remediated**:
  - Corrected misclassification: was erroneously set to Public/Government.
  - Replaced external image URL with verified architecture asset; updated website to official `nit.edu.in`.

### 7. Indian Institute of Management Mumbai (IIM Mumbai) — ID 73
- **Location**: Vihar Lake Road, Near The Residence Hotel, Powai, Mumbai - 400087, Maharashtra
- **Classification**: Institute of National Importance (Ministry of Education, Govt. of India, IIM Act 2017)
- **Defects Remediated**:
  - Corrected critical misclassification: restored statutory Institute of National Importance status (was erroneously labeled "Private").
  - Purged photo leak: scraper assigned `/images/campuses/weschool_matunga.jpeg` (Welingkar Matunga) to IIM Mumbai in Powai! Assigned verified architecture asset.
  - Audited flagship MBA, MBA in Operations & Supply Chain Management (OSCM), and Sustainability Management (SM).

### 8. NIT Calicut (National Institute of Technology Calicut) — ID 74
- **Location**: Calicut Mukkam Road, Kattangal, Kettangal, Kozhikode - 673601, Kerala
- **Classification**: Institute of National Importance (NIRF #25 Engineering)
- **Defects Remediated**:
  - Replaced third-party external scraper image URL with verified local architecture asset.
  - Structured flagship B.Tech CSE, ECE, and M.Tech engineering programs replacing generic MBA scrapings.

### 9. IIT Kharagpur (Indian Institute of Technology Kharagpur) — ID 75
- **Location**: Kharagpur - 721302, Paschim Medinipur District, West Bengal
- **Classification**: Institute of National Importance (NIRF #5 Engineering / First IIT in India)
- **Defects Remediated**:
  - Purged severe photo leak: scraper assigned `/images/campuses/bms_bangalore.jpg` (BMS College Bangalore) to India's oldest IIT in West Bengal! Assigned verified architecture asset.
  - Structured premier B.Tech CSE, ECE, and VGSoM MBA curricula.

### 10. IIM Kozhikode (Indian Institute of Management Kozhikode) — ID 76
- **Location**: IIMK Campus P.O., Kunnamangalam, Kozhikode - 673570, Kerala
- **Classification**: Institute of National Importance (NIRF #3 Management)
- **Defects Remediated**:
  - Replaced third-party external scraper image URL with verified local architecture asset.
  - Audited PGP (MBA), PGP-Finance, and PGP-LSM flagship curricula.

---

## Verification Logs Updated
- `reports/verification/college-verification.csv` (+10 entries, total 510)
- `reports/verification/course-verification.csv` (+28 entries, total 1,375)
- `reports/verification/image-verification.csv` (+10 entries, total 510)
- `reports/verification/progress.json` (total: 510, current_batch: 51)
- `reports/verification/all_verified_colleges.json` (51 batches)
- `reports/verification/all_verified_colleges.md` (510 colleges)
- `public/siteData.json` (Synced to 510 verified colleges)
