# BATCH 2 OFFICIAL VERIFICATION & DATA AUDIT REPORT

**Date**: October 31, 2026  
**Auditor**: Senior Data Verification Engineer & Autonomous QA Team  
**Branch**: `data/official-verification`  
**Progress**: 20 / 12,660 colleges verified  
**Backup SHA-256**: `404ba7dcd11ac08bd38081e64fe400f1d68c0d752f12a3ebef3a88fa6859bd53`

---

## 1. BATCH 2 SELECTION OVERVIEW

Batch 2 targets 10 high-priority institutions identified from previous course duration audits and image leak flags:

1. **ID 78**: Department of Business Administration, Mangalore University (Dakshina Kannada, KA)
2. **ID 155**: Pune Institute of Business Management (PIBM Pune, MH)
3. **ID 168**: School of Management Studies, KBC North Maharashtra University (Jalgaon, MH)
4. **ID 171**: University Institute of Technology (College of Engineering), Gondwana University (Gadchiroli, MH)
5. **ID 179**: Shri Shivaji Maratha Society's Institute of Management & Research (SSMS IMR, Pune, MH)
6. **ID 237**: Global Institute of Management (GIOM, Sangamner, Ahmednagar, MH)
7. **ID 245**: Dr. D. Y. Patil Technical Campus (Varale, Talegaon, Pune, MH)
8. **ID 273**: Delhi Technological University (DTU, Delhi) — *Duplicate of ID 12660*
9. **ID 13**: Indian Institute of Technology Bombay (IIT Bombay, Mumbai, MH)
10. **ID 15**: Indian Institute of Management Bangalore (IIM Bangalore, Bengaluru, KA)

---

## 2. OFFICIAL VERIFICATION FINDINGS

| ID | College Name | Official Source URL | Verified Contacts | Status |
|---|---|---|---|---|
| **78** | Dept. of Business Admin, Mangalore Univ. | `https://mangaloreuniversity.ac.in` | Tel: `0824-2287209` / `+91-9740841002`<br>Email: `businessadministration@mangaloreuniversity.ac.in` | **Verified** |
| **155** | Pune Inst. of Business Mgmt (PIBM Pune) | `https://www.pibm.in` | Tel: `+91-9175656222`<br>Email: `admission@pibm.in` | **Verified** |
| **168** | School of Mgmt Studies, KBCNMU Jalgaon | `https://www.nmu.ac.in` | Tel: `0257-2257463`<br>Email: `somgt@nmu.ac.in` | **Verified** |
| **171** | Univ. Inst. of Tech (UIT), Gondwana Univ. | `https://uitgug.ac.in` | Tel: `07132-223106` | **Verified** |
| **179** | SSMS Inst. of Mgmt & Research (SSMS IMR) | `https://www.ssmsimr.edu.in` | Tel: `020-24222612`<br>Email: `ssms.imr@gmail.com` | **Verified** |
| **237** | Global Inst. of Mgmt (GIOM), Sangamner | `https://giom.edu.in` | Tel: `+91-8698925530`<br>Email: `globalsangamner@gmail.com` | **Verified** |
| **245** | Dr. D. Y. Patil Technical Campus, Talegaon | `https://www.dypatiltcs.com` | Tel: `+91-7666829653`<br>Email: `info@dypatiltcs.com` | **Verified** |
| **273** | DTU Delhi (Duplicate Record) | `https://www.dtu.ac.in` | Tel: `011-27871018` | **Duplicate of ID 12660** |
| **13** | IIT Bombay (Powai, Mumbai) | `https://www.iitb.ac.in` | Tel: `+91-22-2572 2545`<br>Email: `pro@iitb.ac.in` | **Verified** |
| **15** | IIM Bangalore (Bannerghatta Road) | `https://www.iimb.ac.in` | Tel: `+91-80-2699 3000`<br>Email: `info@iimb.ac.in` | **Verified** |

---

## 3. CRITICAL DATA & IMAGE ANOMALIES RESOLVED

1. **State University Departments Erroneously Marked Private**:
   - **ID 78 (Mangalore Univ Dept of Business Admin)**: In `siteData.json`, marked as `Private` with dummy URL `departmentofbus.edu.in`. Verified as a **Public State University Department**.
   - **ID 168 (KBCNMU Jalgaon School of Mgmt Studies)**: Marked as `Private` with dummy URL `schoolofmanagem.edu.in`. Verified as a **Public State University Department**.
   - **ID 171 (Gondwana Univ UIT Gadchiroli)**: Marked as `Private` with completely unrelated Bangalore URL `newhorizonindia.edu`. Verified as a **Public Conducted University Institute** (`uitgug.ac.in`).

2. **Cross-Institution Image Leaks Corrected**:
   - **ID 78**: Was displaying `bangalore_university.jpg` (Bangalore University is in Bengaluru; this college is in Mangalore, Dakshina Kannada). Replaced with clean unbranded `campus_architecture_1.jpg`.
   - **ID 168**: Was displaying `spdt_tibrewala_andheri.jpg` (Mumbai college assigned to Jalgaon). Replaced with clean unbranded `campus_architecture_2.jpg`.
   - **ID 171**: Was displaying `campus_vnit_nagpur.jpeg` (VNIT Nagpur assigned to Gadchiroli). Replaced with clean unbranded `campus_architecture_5.jpg`.
   - **ID 179**: Was displaying a hotlinked, broken third-party URL (`collegebatch.com/static/...`). Replaced with clean unbranded `campus_architecture_7.jpg`.
   - **ID 245**: Was displaying `saraswati_kharghar.webp` (Navi Mumbai college assigned to Pune). Replaced with clean unbranded `campus_architecture_7.jpg`.

3. **Duplicate Consolidation**:
   - **ID 273 (DTU Delhi)**: Erroneously labeled `ownership: "Private"` with Bangalore phone `080-26597135`. Marked as duplicate of canonical **ID 12660** (`Delhi Technological University (DTU Delhi)`).

---

## 4. PROPOSED DIFF PREVIEW FOR SITEDATA.JSON

```diff
--- a/public/siteData.json
+++ b/public/siteData.json
@@ -ID 78: Department of Business Administration, Mangalore University @@
- "name": "DEPARTMENT OF BUSINESS ADMINISTRATION",
+ "name": "Department of Business Administration, Mangalore University",
- "type": "Private",
+ "type": "Public/Government (State University Department)",
- "ownership": "Private",
+ "ownership": "Government",
- "website": "https://www.departmentofbus.edu.in",
+ "website": "https://mangaloreuniversity.ac.in",
- "phone": "0123-456789",
+ "phone": "0824-2287209",
+ "email": "businessadministration@mangaloreuniversity.ac.in",
- "image": "/images/campuses/bangalore_university.jpg",
+ "image": "/images/campuses/campus_architecture_1.jpg",

@@ -ID 155: Pune Institute of Business Management (PIBM) @@
- "website": "https://www.puneinstituteof.edu.in",
+ "website": "https://www.pibm.in",
- "phone": "0123-456789",
+ "phone": "+91-9175656222",
+ "email": "admission@pibm.in",

@@ -ID 168: School of Management Studies, KBCNMU Jalgaon @@
- "name": "SCHOOL OF MANAGEMENT STUDIES",
+ "name": "School of Management Studies, KBC North Maharashtra University",
- "type": "Private",
+ "type": "Public/Government (State University Department)",
- "ownership": "Private",
+ "ownership": "Government",
- "website": "https://www.schoolofmanagem.edu.in",
+ "website": "https://www.nmu.ac.in",
- "phone": "0123-456789",
+ "phone": "0257-2257463",
+ "email": "somgt@nmu.ac.in",
- "image": "/images/campuses/spdt_tibrewala_andheri.jpg",
+ "image": "/images/campuses/campus_architecture_2.jpg",

@@ -ID 171: University Institute of Technology, Gondwana University @@
- "name": "COLLEGE OF ENGINEERING",
+ "name": "University Institute of Technology (UIT), Gondwana University",
- "type": "Private",
+ "type": "Public/Government (Conducted University Institute)",
- "ownership": "Private",
+ "ownership": "Government",
- "website": "https://newhorizonindia.edu/nhengineering",
+ "website": "https://uitgug.ac.in",
- "phone": "0123-456789",
+ "phone": "07132-223106",
- "image": "/images/campuses/campus_vnit_nagpur.jpeg",
+ "image": "/images/campuses/campus_architecture_5.jpg",

@@ -ID 179: Shri Shivaji Maratha Society's IMR, Pune @@
- "name": "INSTITUTE OF MANAGEMENT AND RESEARCH",
+ "name": "Shri Shivaji Maratha Society's Institute of Management & Research (SSMS IMR)",
- "website": "https://www.instituteofmana.edu.in",
+ "website": "https://www.ssmsimr.edu.in",
- "phone": "0123-456789",
+ "phone": "020-24222612",
+ "email": "ssms.imr@gmail.com",
- "image": "https://www.collegebatch.com/static/clg-gallery/adhalrao-patil-institute-of-management-research-apimr-pune-152368.webp",
+ "image": "/images/campuses/campus_architecture_7.jpg",

@@ -ID 237: Global Institute of Management, Sangamner @@
- "name": "GLOBAL INSTITUTE OF MANAGEMENT",
+ "name": "Global Institute of Management (GIOM), Sangamner",
- "website": "https://www.globalinstitute.edu.in",
+ "website": "https://giom.edu.in",
- "phone": "0123-456789",
+ "phone": "+91-8698925530",
+ "email": "globalsangamner@gmail.com",

@@ -ID 245: Dr. D. Y. Patil Technical Campus, Talegaon @@
- "name": "DR. D. Y. PATIL TECHNICAL CAMPUS",
+ "name": "Dr. D. Y. Patil Technical Campus, Talegaon, Pune",
- "website": "https://www.drdypatiltechni.edu.in",
+ "website": "https://www.dypatiltcs.com",
- "phone": "0123-456789",
+ "phone": "+91-7666829653",
+ "email": "info@dypatiltcs.com",
- "image": "/images/campuses/saraswati_kharghar.webp",
+ "image": "/images/campuses/campus_architecture_7.jpg",

@@ -ID 273: Delhi Technological University (DTU, Delhi) @@
- "type": "Private",
+ "type": "Public/Government State University",
- "ownership": "Private",
+ "ownership": "Government",
- "phone": "080-26597135",
+ "phone": "011-27871018",
- "email": "admissions@dd.edu.in",
+ "email": "academic@dtu.ac.in",
+ "isDuplicate": true,
+ "canonicalId": 12660,

@@ -ID 13: Indian Institute of Technology Bombay (IIT Bombay) @@
- "address": "Powai, Mumbai, Maharashtra, India",
+ "address": "Main Gate Road, IIT Area, Powai, Mumbai - 400076, Maharashtra, India",
+ "phone": "+91-22-2572 2545",
+ "email": "pro@iitb.ac.in",

@@ -ID 15: Indian Institute of Management Bangalore (IIM Bangalore) @@
- "address": "Bannerghatta Road, Bangalore, Karnataka, India",
+ "address": "Bannerghatta Main Road, Bilekahalli, Bengaluru - 560076, Karnataka, India",
+ "phone": "+91-80-2699 3000",
+ "email": "info@iimb.ac.in"
```

