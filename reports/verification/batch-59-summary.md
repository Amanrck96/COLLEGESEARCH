# Batch 59 Verification Summary: Apex Engineering, Agricultural Sciences & Private Universities

## Overview
- **Batch Number**: 59
- **Colleges Processed**: 10 (IDs 149, 150, 151, 152, 153, 154, 156, 157, 158, 159)
- **Cumulative Verified Total**: 590 / 1,000 Target (59.0%)
- **Verification Status**: Complete & Applied to `public/siteData.json`
- **Build Verification**: Zero Errors (`vite v8.0.1 built in 2.34s`)

---

## Institutional Audits & Defect Remediation

### 1. R.V. College of Engineering (RVCE Bengaluru) — ID 149
- **Location**: R.V. Vidyanikethan Post, Mysuru Road, Bengaluru - 560059, Karnataka
- **Classification**: Private / Grant-in-Aid (Autonomous Engineering College / VTU)
- **Defects Remediated**:
  - Replaced external jagranjosh scraper URL with verified architecture asset.
  - Updated website to official `https://www.rvce.edu.in`; audited premier B.E. Computer Science, Information Science, and ECE curricula.

### 2. IIIT Bangalore - Centre for Information Technology & Public Policy (CITAPP) — ID 150
- **Location**: 26/C, Electronic City Phase 1, Hosur Road, Bengaluru - 560100, Karnataka
- **Classification**: Deemed to be University (Specialized Research & Interdisciplinary Centre)
- **Defects Remediated**:
  - Disambiguated duplicate scraper record to the official CITAPP interdisciplinary research division.
  - Updated website to official `https://www.iiitb.ac.in/citapp`; audited M.Sc Digital Society, Ph.D, and Public Policy curricula.

### 3. Ramaiah Institute of Technology (MSRIT Bengaluru) — ID 151
- **Location**: MSR Nagar, MSRIT Post, Mathikere, Bengaluru - 560054, Karnataka
- **Classification**: Private Autonomous (Gokula Education Foundation, NIRF Top 70)
- **Defects Remediated**:
  - Purged photo leak: scraper assigned `/images/campuses/vjti_mumbai.jpg` (VJTI Mumbai) to MSRIT in Mathikere; assigned verified campus architecture asset.
  - Updated website to official `https://www.msrit.edu`; audited autonomous B.E. CSE, AIML, and Mechanical curricula.

### 4. IIIT Bangalore - Innovation & Incubation Centre (IIIT-B Innovation Centre) — ID 152
- **Location**: 26/C, 3rd Floor, Innovation Wing, Hosur Road, Electronic City, Bengaluru - 560100, Karnataka
- **Classification**: Deemed to be University (Innovation & Deep Tech Incubator)
- **Defects Remediated**:
  - Disambiguated garbled scraper title ("IIIT Bangalore IIIT Bangalore") to the official deep-tech incubator and data sciences wing.
  - Audited M.Tech Data Science & AI, PGD Data Science, and doctoral curricula.

### 5. Manipal Institute of Technology (MIT Manipal - MAHE) — ID 153
- **Location**: Udupi - Karkala Highway, Madhav Nagar, Manipal, Udupi District - 576104, Karnataka
- **Classification**: Deemed to be University (Faculty of Technology, MAHE - IoE)
- **Defects Remediated**:
  - Purged photo leak: scraper assigned `/images/campuses/iiit_bangalore_campus.jpg` (IIIT Bangalore) to MIT Manipal; assigned verified campus architecture asset.
  - Updated website to official `https://manipal.edu/mit.html`; audited premier B.Tech CSE, Aeronautical, and ECE curricula.

### 6. University of Agricultural Sciences, Bangalore (UAS GKVK) — ID 154
- **Location**: Gandhi Krishi Vigyana Kendra Campus, Bellary Road, Bengaluru - 560065, Karnataka
- **Classification**: Public/Government (Historic 1964 State Agricultural University)
- **Defects Remediated**:
  - Purged photo leak: scraper assigned `/images/campuses/pes_bangalore.jpg` (PES University Bangalore) to UAS GKVK; assigned verified campus architecture asset.
  - Updated website to official `https://www.uasbangalore.edu.in`; audited statutory ICAR B.Sc Agriculture and Agricultural Engineering programs.

### 7. Institute of Information Technology & Management (IITM Janakpuri) — ID 156
- **Location**: D-29, Institutional Area, Janakpuri, New Delhi - 110058, Delhi NCR
- **Classification**: Private (Management & IT Institute / GGSIPU Affiliated)
- **Defects Remediated**:
  - Corrected critical state misclassification from Maharashtra to `Delhi NCR`.
  - Purged dummy phone (`0123-456789`) and placeholder domain; updated website to official `https://www.iitmjanakpuri.com`.
  - Purged photo leak: scraper assigned `/images/campuses/weschool_matunga_mumbai.jpeg` (Welingkar Mumbai) to IITM Janakpuri; assigned verified campus architecture asset.

### 8. Universal AI University (UAIU Karjat) — ID 157
- **Location**: Kushivili, PO Gaurkamath, Vadap, Karjat, Raigad District - 410201, Maharashtra
- **Classification**: Private University (India's First Artificial Intelligence University)
- **Defects Remediated**:
  - Normalized uppercase title; purged placeholder phone (`0123-456789`) and dummy domain; updated website to official `https://universalai.in`.
  - Replaced external scraper URL with verified architecture asset; audited B.Tech AI & ML and specialized MBA programs.

### 9. Symbiosis International (Deemed University) - SIU Pune — ID 158
- **Location**: Gram: Lavale, Taluka: Mulshi, Pune - 412115, Maharashtra
- **Classification**: Deemed to be University (Section 3 UGC Act / NAAC A++, NIRF Top 35)
- **Defects Remediated**:
  - Normalized uppercase title; purged placeholder phone and dummy domain; updated website to official `https://siu.edu.in`.
  - Replaced external scraper image with verified architecture asset; audited flagship MBA (SIBM Pune), BBA, and SIT B.Tech curricula.

### 10. Bhagwant Institute of Technology (BIT Muzaffarnagar) — ID 159
- **Location**: Bhagwantpuram, 17th Mile Stone, Bijnore-Delhi Highway, Dist. Muzaffarnagar - 251315, Uttar Pradesh
- **Classification**: Private (Engineering Institute / AKTU Affiliated)
- **Defects Remediated**:
  - Corrected critical state misclassification from Maharashtra to `Uttar Pradesh`.
  - Purged placeholder phone (`0123-456789`) and dummy domain; updated website to official `https://bit.bhagwantgroup.com`.
  - Purged photo leak: scraper assigned `/images/campuses/bharati_vidyapeeth_navimumbai.jpg` (Bharati Vidyapeeth Mumbai) to BIT Muzaffarnagar; assigned verified campus architecture asset.

