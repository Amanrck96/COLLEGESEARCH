# BATCH 3 OFFICIAL VERIFICATION & DATA AUDIT REPORT

**Date**: October 31, 2026  
**Auditor**: Senior Data Verification Engineer & Autonomous QA Team  
**Branch**: `data/official-verification`  
**Progress**: 30 / 12,660 colleges verified  
**Backup SHA-256**: `404ba7dcd11ac08bd38081e64fe400f1d68c0d752f12a3ebef3a88fa6859bd53`

---

## 1. BATCH 3 SELECTION OVERVIEW

Batch 3 focuses on 10 high-priority institutions flagged for course duration discrepancies (including the 4-year MCA defect), cross-state image leaks, and incorrect ownership classifications:

1. **ID 247**: FUEL Business School (FBS, Pune, MH)
2. **ID 251**: Jamia Hamdard (Deemed-to-be-University, New Delhi)
3. **ID 306**: Maharaja Agrasen Business School (MABS, Rohini, Delhi)
4. **ID 307**: Tecnia Institute of Advanced Studies CDL (Rohini, Delhi)
5. **ID 308**: New Delhi Institute of Information Technology & Management (NDIIT, Kalkaji, Delhi)
6. **ID 311**: Guru Nanak Institute of Management (GNIM, Punjabi Bagh, Delhi)
7. **ID 314**: Sri Sukhmani Institute of Management (SSIM, Dwarka, Delhi)
8. **ID 315**: Apeejay Institute of Mass Communication (AIMC, Dwarka, Delhi)
9. **ID 316**: Delhi Pharmaceutical Sciences & Research University (DPSRU, New Delhi)
10. **ID 321**: Indian Institute of Foreign Trade (IIFT, Qutab Institutional Area, New Delhi)

---

## 2. OFFICIAL VERIFICATION FINDINGS

| ID | College Name | Official Source URL | Verified Contacts | Status |
|---|---|---|---|---|
| **247** | FUEL Business School, Pune | `https://www.fuelbschool.com/` | Tel: `+91-7709005498`<br>Email: `admissions@fuelbschool.com` | **Verified** |
| **251** | Jamia Hamdard, New Delhi | `https://www.jamiahamdard.ac.in` | Tel: `011-26059688`<br>Email: `counselling@jamiahamdard.ac.in` | **Verified** |
| **306** | Maharaja Agrasen Business School, Rohini | `https://mabs.ac.in` | Tel: `+91-9311924828`<br>Email: `admissionhead@mabs.ac.in` | **Verified** |
| **307** | Tecnia Inst. of Advanced Studies CDL | `https://cdl.tecnia.in` | Tel: `011-27555124`<br>Email: `directorcdl@tecnia.in` | **Verified** |
| **308** | New Delhi Inst. of Info Tech & Mgmt (NDIIT) | `https://www.ndiit.org` | Tel: `+91-9810479477`<br>Email: `admissions@ndiit.org` | **Verified** |
| **311** | Guru Nanak Inst. of Mgmt (GNIM), Delhi | `https://gnim.ac.in` | Tel: `+91-9654537084`<br>Email: `admission.gnim@gmail.com` | **Verified** |
| **314** | Sri Sukhmani Inst. of Mgmt (SSIM), Dwarka | `https://ssimdelhi.org` | Tel: `+91-9910339814`<br>Email: `ssimgt@gmail.com` | **Verified** |
| **315** | Apeejay Inst. of Mass Comm (AIMC), Dwarka | `https://www.apeejay.edu/aimc` | Tel: `+91-9910-222-777`<br>Email: `aimc.del@apj.edu` | **Verified** |
| **316** | DPSRU (Delhi Pharm. Sciences & Research Univ) | `https://dpsru.edu.in` | Tel: `011-29552055`<br>Email: `admissions@dpsru.edu.in` | **Verified** |
| **321** | Indian Institute of Foreign Trade (IIFT Delhi) | `https://www.iift.ac.in` | Tel: `+91-11-39147200`<br>Email: `registrar@iift.ac.in` | **Verified** |

---

## 3. CRITICAL DEFECTS IDENTIFIED & CORRECTED

1. **Course Duration Defect (4-Year MCA)**:
   - **ID 311 (GNIM Delhi)**: In `siteData.json`, MCA was listed as **`4 Years`**. Official curriculum verification confirms it is strictly **`2 Years`** (4-semester full-time degree affiliated to GGSIPU).

2. **Severe Geographic Discrepancy**:
   - **ID 307 (Tecnia Institute CDL)**: `location` was listed as **`KARBI ANGLONG Delhi NCR`** (Karbi Anglong is in Assam!). Corrected to **`Rohini, North West Delhi`**.

3. **Government / Apex Institutes Erroneously Marked "Private"**:
   - **ID 321 (IIFT New Delhi)**: Apex foreign trade institute under the Ministry of Commerce & Industry, Govt of India was erroneously marked `Private`. Corrected to **`Public/Government (Autonomous / Deemed University)`**.
   - **ID 316 (DPSRU New Delhi)**: First pharmacy university in India (State University under Govt of NCT of Delhi) was marked `Private`. Corrected to **`Public/Government (State University)`**.
   - **ID 251 (Jamia Hamdard)**: Category-1 Deemed-to-be-University corrected to **`Government Supported / Deemed-to-be-University`**.

4. **Cross-State Image Leaks & Hotlinks Resolved**:
   - **ID 247 (FUEL Pune)**: Was displaying Mumbai college photo (`gnims_matunga.png`). Mapped to clean unbranded `campus_architecture_8.jpg`.
   - **ID 306 (MABS Delhi)**: Was displaying Borivali Mumbai photo (`sailee_college_borivali.jpg`). Mapped to clean unbranded `campus_architecture_3.jpg`.
   - **ID 307 (Tecnia Delhi)**: Was displaying Bangalore photo (`ramaiah_bangalore.jpg`). Mapped to clean unbranded `campus_architecture_6.jpg`.
   - **ID 321 (IIFT Delhi)**: Was displaying Pune photo (`riim_pune.jpeg`). Mapped to clean unbranded `campus_architecture_7.jpg`.
   - **IDs 251, 308, 314, 315, 316**: Hotlinks to third-party aggregators (Collegebatch, Kollegeapply, Collegedunia 403-blocked, Jagranjosh) replaced with robust local unbranded architectural campus photos.

---

## 4. PROPOSED DIFF PREVIEW FOR `SITEDATA.JSON`

```diff
--- a/public/siteData.json
+++ b/public/siteData.json
@@ -ID 247: FUEL Business School, Pune @@
- "website": "https://www.fuelbusinessscho.edu.in",
+ "website": "https://www.fuelbschool.com/",
- "phone": "0123-456789",
+ "phone": "+91-7709005498",
+ "email": "admissions@fuelbschool.com",
- "image": "/images/campuses/gnims_matunga.png",
+ "image": "/images/campuses/campus_architecture_8.jpg",

@@ -ID 251: Jamia Hamdard, New Delhi @@
- "type": "Private",
+ "type": "Government Supported / Deemed-to-be-University",
- "ownership": "Private",
+ "ownership": "Deemed University (Govt. Supported)",
- "phone": "0123-456789",
+ "phone": "011-26059688",
+ "email": "counselling@jamiahamdard.ac.in",
- "image": "https://www.jamiahamdard.ac.in/uploads/DSC03737.jpg",
+ "image": "/images/campuses/campus_architecture_9.jpg",

@@ -ID 306: Maharaja Agrasen Business School, Rohini @@
- "website": "https://www.maharajaagrasenb.edu.in",
+ "website": "https://mabs.ac.in",
- "phone": "0123-456789",
+ "phone": "+91-9311924828",
+ "email": "admissionhead@mabs.ac.in",
- "image": "/images/campuses/sailee_college_borivali.jpg",
+ "image": "/images/campuses/campus_architecture_3.jpg",

@@ -ID 307: Tecnia Institute of Advanced Studies CDL @@
- "location": "KARBI ANGLONG",
+ "location": "Rohini, North West Delhi",
- "state": "Delhi NCR",
+ "state": "Delhi",
- "website": "https://www.tecniainstituteo.edu.in",
+ "website": "https://cdl.tecnia.in",
- "phone": "0123-456789",
+ "phone": "011-27555124",
+ "email": "directorcdl@tecnia.in",
- "image": "/images/campuses/ramaiah_bangalore.jpg",
+ "image": "/images/campuses/campus_architecture_6.jpg",

@@ -ID 308: New Delhi Institute of Information Technology and Management @@
- "website": "https://www.newdelhiinstitu.edu.in",
+ "website": "https://www.ndiit.org",
- "phone": "0123-456789",
+ "phone": "+91-9810479477",
+ "email": "admissions@ndiit.org",
- "image": "https://www.collegebatch.com/static/clg-gallery/new-delhi-institute-for-information-technology-management-new-delhi-291350.webp",
+ "image": "/images/campuses/campus_architecture_4.jpg",

@@ -ID 311: Guru Nanak Institute of Management, Delhi @@
- "website": "https://www.gurunanakinstit.edu.in",
+ "website": "https://gnim.ac.in",
- "phone": "0123-456789",
+ "phone": "+91-9654537084",
+ "email": "admission.gnim@gmail.com",
- "duration": "4 Years",  (MASTERS IN COMPUTER APPLICATIONS)
+ "duration": "2 Years",  (MASTERS IN COMPUTER APPLICATIONS)

@@ -ID 314: Sri Sukhmani Institute of Management, Dwarka @@
- "website": "https://www.srisukhmaniins.edu.in",
+ "website": "https://ssimdelhi.org",
- "phone": "0123-456789",
+ "phone": "+91-9910339814",
+ "email": "ssimgt@gmail.com",
- "image": "https://assets.kollegeapply.com/images/1751548674472-1726568279phpoS0aLH.jpeg",
+ "image": "/images/campuses/campus_architecture_1.jpg",

@@ -ID 315: Apeejay Institute of Mass Communication, Dwarka @@
- "website": "https://www.apeejayinstitu.edu.in",
+ "website": "https://www.apeejay.edu/aimc",
- "phone": "0123-456789",
+ "phone": "+91-9910-222-777",
+ "email": "aimc.del@apj.edu",
- "image": "https://image-static.collegedunia.com/public/college_data/images/appImage/1585072379aimcbuildingpic.jpg",
+ "image": "/images/campuses/campus_architecture_2.jpg",

@@ -ID 316: Delhi Pharmaceutical Sciences and Research University @@
- "type": "Private",
+ "type": "Public/Government (State University)",
- "ownership": "Private",
+ "ownership": "Government",
- "website": "https://www.delhipharmaceu.edu.in",
+ "website": "https://dpsru.edu.in",
- "phone": "0123-456789",
+ "phone": "011-29552055",
+ "email": "admissions@dpsru.edu.in",
- "image": "https://img.jagranjosh.com/images/2022/December/13122022/Delhi-Pharmaceutical-Sciences-and-Research-University-New-Delhi-Campus-View-3.JPG",
+ "image": "/images/campuses/campus_architecture_5.jpg",

@@ -ID 321: Indian Institute of Foreign Trade, New Delhi @@
- "name": "INDIAN INSTITUTE OF FOREIGN TRADE",
+ "name": "Indian Institute of Foreign Trade (IIFT), New Delhi",
- "type": "Private",
+ "type": "Public/Government (Autonomous Institution / Deemed University)",
- "ownership": "Private",
+ "ownership": "Government",
- "website": "https://www.indianinstitute.edu.in",
+ "website": "https://www.iift.ac.in",
- "phone": "0123-456789",
+ "phone": "+91-11-39147200",
+ "email": "registrar@iift.ac.in",
- "image": "/images/campuses/riim_pune.jpeg",
+ "image": "/images/campuses/campus_architecture_7.jpg"
```

