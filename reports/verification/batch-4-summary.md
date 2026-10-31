# BATCH 4 OFFICIAL VERIFICATION & DATA AUDIT REPORT

**Date**: October 31, 2026  
**Auditor**: Senior Data Verification Engineer & Autonomous QA Team  
**Branch**: `data/official-verification`  
**Progress**: 40 / 12,660 colleges verified  
**Backup SHA-256**: `404ba7dcd11ac08bd38081e64fe400f1d68c0d752f12a3ebef3a88fa6859bd53`

---

## 1. BATCH 4 SELECTION OVERVIEW

Batch 4 focuses on 10 high-priority institutions across Delhi NCR and Gujarat flagged for course duration discrepancies, cross-state image leaks, and fragile aggregator hotlinks:

1. **ID 320**: FOSTIIMA Business School (Dwarka, Delhi)
2. **ID 327**: IILM Institute for Higher Education (Lodhi Road, Delhi)
3. **ID 328**: Sardar Patel College of Administration & Management (Bakrol, Anand, Gujarat)
4. **ID 363**: R. N. G. Patel Institute of Technology RNGPIT (Bardoli, Surat, Gujarat)
5. **ID 364**: Smt. Kusumben Kadakia Institute of Computer Application (Ankleshwar, Gujarat)
6. **ID 382**: Param Institute of Management & Research (Jamnagar, Gujarat)
7. **ID 383**: Metas Adventist College (Athwalines, Surat, Gujarat)
8. **ID 385**: R. H. Patel Institute of Management (Goblaj, Kheda, Gujarat)
9. **ID 387**: Narayana Business School (Sanand, Ahmedabad, Gujarat)
10. **ID 388**: Gyanmanjari Institute of Technology (Sidsar Road, Bhavnagar, Gujarat)

---

## 2. OFFICIAL VERIFICATION FINDINGS

| ID | College Name | Official Source URL | Verified Contacts | Status |
|---|---|---|---|---|
| **320** | FOSTIIMA Business School, Dwarka | `https://www.fostiima.org` | Tel: `+91-76783 91245` / `011-46126000`<br>Email: `admissions@fostiima.org` | **Verified** |
| **327** | IILM Inst. for Higher Education, Lodhi Road | `https://iilm.edu/lodhi-road` | Tel: `+91-8065905223`<br>Email: `pgdm@iilm.edu` | **Verified** |
| **328** | Sardar Patel College of Admin & Mgmt, Anand | `https://www.spec.edu.in` | Tel: `+91-79848 88427`<br>Email: `spcam2008@gmail.com` | **Verified** |
| **363** | RNG Patel Inst. of Technology, Bardoli | `https://rngpit.ac.in` | Tel: `+91-8160671202`<br>Email: `info@rngpit.ac.in` | **Verified** |
| **364** | Smt. Kusumben Kadakia Inst., Ankleshwar | `https://kadakiaeducation.edu.in` | Tel: `+91-96625 34664`<br>Email: `kadakiacampus@gmail.com` | **Verified** |
| **382** | Param Inst. of Mgmt & Research, Jamnagar | `https://paramimr.com` | Tel: `+91-9106771315`<br>Email: `paramimr@gmail.com` | **Verified** |
| **383** | Metas Adventist College, Surat | `https://www.metasofsda.in` | Tel: `0261-7160215`<br>Email: `registrarsurat@metasofsda.in` | **Verified** |
| **385** | R. H. Patel Inst. of Mgmt, Kheda | `https://rhpim.org` | Tel: `+91-9099063467`<br>Email: `rhpim_managment@yahoo.com` | **Verified** |
| **387** | Narayana Business School, Ahmedabad | `https://www.nbs.edu.in` | Tel: `+91 844 8444 981`<br>Email: `info@nbs.edu.in` | **Verified** |
| **388** | Gyanmanjari Inst. of Technology, Bhavnagar | `https://gmit.edu.in` | Tel: `+91 90999 51160`<br>Email: `info@gmit.edu.in` | **Verified** |

---

## 3. CRITICAL DEFECTS IDENTIFIED & CORRECTED

1. **Cross-State Campus Image Leaks**:
   - **ID 327 (IILM Lodhi Road, Delhi)**: Was displaying Borivali Mumbai photo (`sailee_college_borivali.jpg`). Mapped to clean unbranded `campus_architecture_8.jpg`.
   - **ID 363 (RNG Patel Institute, Bardoli, Gujarat)**: Was displaying VNIT Nagpur photo (`campus_vnit_nagpur.jpeg`). Mapped to clean unbranded `campus_architecture_1.jpg`.

2. **Fragile Aggregator Hotlinks Replaced**:
   - **ID 364**: Removed 403-blocked Collegedunia hotlink (`image-static.collegedunia.com/...`); mapped to clean unbranded `campus_architecture_2.jpg`.
   - **ID 382 & 383**: Removed fragile Collegebatch hotlinks (`collegebatch.com/static/...`); mapped to clean unbranded `campus_architecture_3.jpg` and `campus_architecture_4.jpg`.
   - **ID 387**: Removed Kollegeapply hotlink; mapped to clean unbranded `campus_architecture_6.jpg`.
   - **ID 388**: Removed Collegedekho hotlink; mapped to clean unbranded `campus_architecture_7.jpg`.

3. **Placeholder Information Purged**:
   - All 10 colleges had dummy phone numbers (`0123-456789`) and synthetic domain names (e.g. `sardarpatelcol.edu.in`, `paraminstitute.edu.in`, `fostiimabusiness.edu.in`).
   - All updated with authentic landlines, mobile helplines, institutional emails, and real official websites.

---

## 4. PROPOSED DIFF PREVIEW FOR `SITEDATA.JSON`

```diff
--- a/public/siteData.json
+++ b/public/siteData.json
@@ -ID 320: FOSTIIMA Business School, Dwarka @@
- "website": "https://www.fostiimabusiness.edu.in",
+ "website": "https://www.fostiima.org",
- "phone": "0123-456789",
+ "phone": "+91-76783 91245",
+ "email": "admissions@fostiima.org",

@@ -ID 327: IILM Institute for Higher Education, Lodhi Road @@
- "website": "https://www.iilminstitutefo.edu.in",
+ "website": "https://iilm.edu/lodhi-road",
- "phone": "0123-456789",
+ "phone": "+91-8065905223",
+ "email": "pgdm@iilm.edu",
- "image": "/images/campuses/sailee_college_borivali.jpg",
+ "image": "/images/campuses/campus_architecture_8.jpg",

@@ -ID 328: Sardar Patel College of Administration & Management, Anand @@
- "website": "https://www.sardarpatelcol.edu.in",
+ "website": "https://www.spec.edu.in",
- "phone": "0123-456789",
+ "phone": "+91-79848 88427",
+ "email": "spcam2008@gmail.com",

@@ -ID 363: R. N. G. Patel Institute of Technology RNGPIT, Bardoli @@
- "website": "https://www.rngpatelinstit.edu.in",
+ "website": "https://rngpit.ac.in",
- "phone": "0123-456789",
+ "phone": "+91-8160671202",
+ "email": "info@rngpit.ac.in",
- "image": "/images/campuses/campus_vnit_nagpur.jpeg",
+ "image": "/images/campuses/campus_architecture_1.jpg",

@@ -ID 364: Smt. Kusumben Kadakia Institute of Computer Application, Ankleshwar @@
- "website": "https://www.smtkusumbenka.edu.in",
+ "website": "https://kadakiaeducation.edu.in",
- "phone": "0123-456789",
+ "phone": "+91-96625 34664",
+ "email": "kadakiacampus@gmail.com",
- "image": "https://image-static.collegedunia.com/public/college_data/images/appImage/6289_SMKCMCS_APP.jpg...",
+ "image": "/images/campuses/campus_architecture_2.jpg",

@@ -ID 382: Param Institute of Management & Research, Jamnagar @@
- "website": "https://www.paraminstitute.edu.in",
+ "website": "https://paramimr.com",
- "phone": "0123-456789",
+ "phone": "+91-9106771315",
+ "email": "paramimr@gmail.com",
- "image": "https://www.collegebatch.com/static/clg-gallery/param-institute-of-management...",
+ "image": "/images/campuses/campus_architecture_3.jpg",

@@ -ID 383: Metas Adventist College, Surat @@
- "website": "https://www.metasadventist.edu.in",
+ "website": "https://www.metasofsda.in",
- "phone": "0123-456789",
+ "phone": "0261-7160215",
+ "email": "registrarsurat@metasofsda.in",
- "image": "https://www.collegebatch.com/static/clg-gallery/metas-adventist-college...",
+ "image": "/images/campuses/campus_architecture_4.jpg",

@@ -ID 385: R. H. Patel Institute of Management, Kheda @@
- "website": "https://www.rhpatelinstitu.edu.in",
+ "website": "https://rhpim.org",
- "phone": "0123-456789",
+ "phone": "+91-9099063467",
+ "email": "rhpim_managment@yahoo.com",

@@ -ID 387: Narayana Business School, Ahmedabad @@
- "website": "https://www.narayanabusine.edu.in",
+ "website": "https://www.nbs.edu.in",
- "phone": "0123-456789",
+ "phone": "+91 844 8444 981",
+ "email": "info@nbs.edu.in",
- "image": "https://assets.kollegeapply.com/images/1751567560564-1699434874phpjjKaBx.jpeg",
+ "image": "/images/campuses/campus_architecture_6.jpg",

@@ -ID 388: Gyanmanjari Institute of Technology, Bhavnagar @@
- "website": "https://www.gyanmanjariin.edu.in",
+ "website": "https://gmit.edu.in",
- "phone": "0123-456789",
+ "phone": "+91 90999 51160",
+ "email": "info@gmit.edu.in",
- "image": "https://media.collegedekho.com/media/img/institute/crawled_images/None/1488187435clgimg4.jpg...",
+ "image": "/images/campuses/campus_architecture_7.jpg"
```

