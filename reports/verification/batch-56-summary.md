# Batch 56 Verification Summary: Multidisciplinary Universities, Medical & Technical Colleges

## Overview
- **Batch Number**: 56
- **Colleges Processed**: 10 (IDs 119, 120, 121, 122, 123, 124, 125, 126, 127, 128)
- **Cumulative Verified Total**: 560 / 1,000 Target (56.0%)
- **Verification Status**: Complete & Applied to `public/siteData.json`
- **Build Verification**: Zero Errors (`vite v8.0.1 built in 2.58s`)

---

## Institutional Audits & Defect Remediation

### 1. Chitkara Design School, Chitkara University — ID 119
- **Location**: Chandigarh-Patiala National Highway (NH-64), Rajpura, Patiala District - 140401, Punjab
- **Classification**: Private University (Design School)
- **Defects Remediated**:
  - Normalized scraped course string ("B.Des in Fashion Design at Chitkara Design School") to institutional entity.
  - Corrected state misclassification from Karnataka to `Punjab`.
  - Replaced external scraper blog URL with verified campus architecture asset.
  - Structured B.Des in Fashion, Interior, and Animation design curricula.

### 2. Chandigarh University (CU Mohali) - Engineering Campus — ID 120
- **Location**: NH-05, Ludhiana - Chandigarh State Highway, Mohali - 140413, Punjab
- **Classification**: Private University (NAAC A+ Accredited)
- **Defects Remediated**:
  - Normalized scraped course string to University entity; corrected state misclassification from Karnataka to `Punjab`.
  - Replaced external jagranjosh scraper URL with verified campus architecture asset.
  - Audited flagship B.E. Computer Science, AI & ML, and Mechanical Engineering degree programs.

### 3. Faculty of Engineering and Technology, Jain University (JU FET) — ID 121
- **Location**: 45th km, NH-209, Jakkasandra Post, Kanakapura Main Road, Ramanagara District, Bengaluru - 562112, Karnataka
- **Classification**: Deemed to be University (Faculty of Engineering / NAAC A++)
- **Defects Remediated**:
  - Normalized scraped course title string to JU FET identity.
  - Purged raw Google search URL and restored official `https://set.jainuniversity.ac.in`.
  - Purged static phone placeholder (`080-26597135`); structured B.Tech CSE, AI&DS, and Aerospace engineering curricula.

### 4. New Horizon College of Engineering (NHCE Bengaluru) — ID 122
- **Location**: Bellandur Main Road, Near Marathahalli, Outer Ring Road, Kadabeesanahalli, Bengaluru - 560103, Karnataka
- **Classification**: Private Autonomous (VTU Affiliated / NAAC A Grade)
- **Defects Remediated**:
  - Purged photo leak: scraper assigned `/images/campuses/iiit_bangalore_campus2.jpg` (IIIT Bangalore) to NHCE in Marathahalli; assigned verified campus architecture asset.
  - Normalized scraped course string to institutional identity; audited B.E. CSE, ISE, and AIML curricula.

### 5. University School of Business, Chandigarh University (USB Mohali) — ID 123
- **Location**: NH-05, Ludhiana - Chandigarh State Highway, Mohali - 140413, Punjab
- **Classification**: Private University (Business School)
- **Defects Remediated**:
  - Normalized scraped course string to USB CU Mohali; corrected state misclassification from Karnataka to `Punjab`.
  - Purged photo leak: scraper assigned `/images/campuses/iiit_bangalore_campus.jpg` (IIIT Bangalore) to USB CU Mohali; assigned verified campus architecture asset.
  - Audited MBA General, Business Analytics (IBM partnership), and Banking & Finance curricula.

### 6. Jagan Institute of Management Studies (JIMS Rohini Sector-5) — ID 124
- **Location**: 3, Institutional Area, Sector-5, Rohini, New Delhi - 110085, Delhi NCR
- **Classification**: Private Autonomous (Management Institute / NAAC A Grade)
- **Defects Remediated**:
  - Normalized scraped course string to JIMS Rohini; corrected state misclassification from Karnataka to `Delhi NCR`.
  - Purged photo leak: scraper assigned `/images/campuses/iiit_bangalore_campus.jpg` (IIIT Bangalore) to JIMS Rohini; assigned verified campus architecture asset.
  - Audited PGDM, PGDM International Business, and PGDM Retail curricula.

### 7. International Institute of Management Studies (IIMS Pune) — ID 125
- **Location**: Sr. No. 54, Nere Dattawadi, Near Hinjewadi IT Park, Pune - 411033, Maharashtra
- **Classification**: Private (Management Institute / SaiBalaji Education Society)
- **Defects Remediated**:
  - Normalized scraped course string to IIMS Pune; corrected state misclassification from Karnataka to `Maharashtra`.
  - Purged photo leak: scraper assigned `/images/campuses/primus_bangalore.jpg` (Primus Bangalore) to IIMS Pune in Hinjewadi; assigned verified campus architecture asset.
  - Audited 2-Year PGDM and Executive PGDM offerings.

### 8. Krishnadevaraya College of Dental Sciences and Hospital (KCDSH Bengaluru) — ID 126
- **Location**: Krishnadevarayanagar, Hunasamaranahalli, International Airport Road, Bengaluru - 562157, Karnataka
- **Classification**: Private (Dental College & Hospital / RGUHS Affiliated)
- **Defects Remediated**:
  - Purged photo leak: scraper assigned `/images/campuses/bms_bangalore.jpg` (BMS College Bangalore) to KCDSH; assigned verified campus architecture asset.
  - Updated website to official `https://kcdsh.org`; audited BDS and MDS specialization curricula.

### 9. Sri Devaraj Urs Academy of Higher Education and Research (SDUAHER Kolar) — ID 127
- **Location**: Tamaka, Kolar - 563103, Karnataka
- **Classification**: Deemed to be University (Medical Academy / NAAC A Grade)
- **Defects Remediated**:
  - Purged photo leak: scraper assigned `/images/campuses/ramaiah_bangalore.jpg` (Ramaiah Bangalore) to SDUAHER in Kolar; assigned verified campus architecture asset.
  - Updated website to official `https://sduaher.ac.in`; audited statutory NMC MBBS and MD/MS fee structures.

### 10. Adichunchanagiri Institute of Medical Sciences (AIMS Mandya) — ID 128
- **Location**: Balagangadharanatha Nagara, BG Nagara, Nagamangala Taluk, Mandya District - 571448, Karnataka
- **Classification**: Private (Constituent Medical College of Adichunchanagiri University)
- **Defects Remediated**:
  - Purged photo leak: scraper assigned `/images/campuses/bangalore_university.jpg` (Bangalore University) to AIMS in Mandya; assigned verified campus architecture asset.
  - Updated website to official `https://www.bgsaims.edu.in`; audited statutory NMC MBBS and postgraduate clinical curricula.
