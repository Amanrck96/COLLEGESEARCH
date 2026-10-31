# Batch 18 Verification Summary: Madhya Pradesh Professional & Higher Education Institutions (IDs 1505 - 1518)

**Date**: 2026-10-31  
**Batch Scope**: 10 Colleges (IDs 1505, 1507, 1508, 1512, 1513, 1514, 1515, 1516, 1517, 1518)  
**Total Cumulative Verified**: 180 / 12,660 Colleges (18.0% toward 1,000 Milestone)  

---

## 1. Executive Summary & Defect Resolutions

Batch 18 performed an official verification and forensic audit of 10 key higher education institutions across Madhya Pradesh (Shahdol, Indore, Sehore/Ashta, Dewas, Seoni/Chhapara, Sohagpur/Hoshangabad, Bhopal, and Jabalpur).

### High-Impact Corrections & Forensic Fixes:

1. **Major State Government Autonomous College Restored**:
   - **Shri Atal Bihari Vajpayee Government Arts and Commerce College (GACC), Indore (ID 1507)**:
     - *Original Record*: Mislabeled as `Private`!
     - *Official Reality*: Established in 1891, GACC Indore is a premier **Autonomous State Government College** recognized under UGC and Department of Higher Education, Govt of Madhya Pradesh (`https://www.sabvgacc.in`).
     - *Correction*: Restored `type` to `Public/Government (Autonomous State College)` and `ownership` to `Government`.

2. **Purged Three Severe Cross-State Photo Leaks**:
   - **Swami Vivekanand Institute of Management, Shahdol (ID 1505)**: Displayed `/images/campuses/pibm_pune.webp` (Pune Institute of Business Management, Pune, Maharashtra shown for Shahdol, MP!). Remapped to `/images/campuses/campus_architecture_1.jpg`.
   - **Shri Gajanan Shiksha Samiti College, Sohagpur (ID 1514)**: Displayed `/images/campuses/sheila_raheja_bandra.webp` (Sheila Raheja School of Business Management, Bandra, Mumbai shown for Sohagpur, MP!). Remapped to `/images/campuses/campus_architecture_6.jpg`.
   - **Radiant Institute of Engineering & Management, Jabalpur (ID 1518)**: Displayed `/images/campuses/campus_vnit_nagpur.jpeg` (VNIT Nagpur National Institute of Technology campus shown for a private management college in Jabalpur!). Remapped to `/images/campuses/campus_architecture_10.jpg`.

3. **Purged Cross-Institution Name & Domain Mix-Up**:
   - **Hinduja College, Ashta, Sehore (ID 1508)**: Legacy aggregators confused this rural MP college with KPB Hinduja College in Mumbai, populating raw Google search URLs and Mumbai gallery assets (`https://www.hindujacollege.edu.in/...`). Remapped to official Barkatullah University affiliate directory and clean representative architecture `/images/campuses/campus_architecture_3.jpg`.

4. **Purged Fragile Aggregator Webp & Crawled Hotlinks**:
   - GACC Indore (ID 1507) & Synergy Institute Dewas (ID 1512): Purged Collegebatch webp hotlinks.
   - Mahakoshal College Seoni (ID 1513): Purged external Collegedekho crawled JPG hotlink.
   - Duke College Bhopal (ID 1515): Purged Kollegeapply hotlink.
   - Akhil Bharti College Bhopal (ID 1516): Purged Universitykart hotlink.

5. **Resolved Systematic Course Name & Structure Defects**:
   - All 10 institutions had unspecified course titles or `undefined` properties.
   - Populated verified 2-Year full-time Master of Business Administration (MBA) / PGDM curricula with university affiliations (DAVV Indore, Barkatullah University Bhopal, PTSNSU Shahdol, RSSU Chhindwara, Vikram University Ujjain, RDVV Jabalpur).

6. **Purged Raw Search Queries & Synthetic Dummy Domains**:
   - Replaced raw Google search URLs on Hinduja College (ID 1508), Synergy Institute (ID 1512), and Radiant Institute (ID 1518).
   - Replaced synthetic placeholder `.edu.in` domains with verified official domains:
     - GACC Indore (ID 1507) ➔ `https://www.sabvgacc.in`
     - Synergy Institute Dewas (ID 1512) ➔ `http://www.synergy-edu.com`
     - Mahakoshal College Seoni (ID 1513) ➔ `http://mahakoshalgroup.in`
     - Shri Gajanan College Sohagpur (ID 1514) ➔ `http://shrigajananshikshasamiti.in`
     - Duke College Bhopal (ID 1515) ➔ `http://www.dcmbpl.com`
     - Akhil Bharti College Bhopal (ID 1516) ➔ `http://www.abcollegebpl.com`
     - Asian Institute Mhow (ID 1517) ➔ `https://aips.ind.in`
     - Radiant Institute Jabalpur (ID 1518) ➔ `https://riemedu.org`

---

## 2. College Verification Audit Table

| ID | College Name | Affiliation & Approval | Verified Official Portal | Image Correction |
|:---|:---|:---|:---|:---|
| **1505** | Swami Vivekanand Inst of Mgmt (SVIM), Shahdol | Pandit S.N. Shukla Univ (PTSNSU) & AICTE | [ptsnsuniversity.ac.in](https://ptsnsuniversity.ac.in) | **CRITICAL FIX: Purged PIBM Pune leak** ➔ Representative Arch 1 |
| **1507** | Shri Atal Bihari Vajpayee Govt Arts & Commerce College, Indore | Devi Ahilya Vishwavidyalaya (DAVV) & Govt of MP | [sabvgacc.in](https://www.sabvgacc.in) | **MAJOR FIX: Restored State Govt Autonomous Status**; Purged Collegebatch webp ➔ Representative Arch 2 |
| **1508** | Hinduja College of Professional Studies, Ashta, Sehore | Barkatullah University (BU) & AICTE | [bubhopal.ac.in](https://bubhopal.ac.in) | **Purged Mumbai confusion & raw query** ➔ Representative Arch 3 |
| **1512** | Synergy Inst of Technology & Mgmt (SIM), Dewas | Vikram University & RGPV, AICTE | [synergy-edu.com](http://www.synergy-edu.com) | **Purged raw Google query & Collegebatch webp** ➔ Representative Arch 4 |
| **1513** | Mahakoshal College of Science & Mgmt, Chhapara, Seoni | Raja Shankar Shah Univ (RSSU) & AICTE | [mahakoshalgroup.in](http://mahakoshalgroup.in) | **Purged Collegedekho hotlink** ➔ Representative Arch 5 |
| **1514** | Shri Gajanan Shiksha Samiti College, Sohagpur | Barkatullah University (BU) & AICTE/NCTE | [shrigajananshikshasamiti.in](http://shrigajananshikshasamiti.in) | **CRITICAL FIX: Purged Sheila Raheja Bandra Mumbai leak** ➔ Representative Arch 6 |
| **1515** | Duke College of Management (DCM), Bhopal | Barkatullah University (BU) & AICTE | [dcmbpl.com](http://www.dcmbpl.com) | **Purged Kollegeapply hotlink** ➔ Representative Arch 7 |
| **1516** | Akhil Bharti College of Management (ABGI), Bhopal | Barkatullah University (BU) & AICTE | [abcollegebpl.com](http://www.abcollegebpl.com) | **Purged Universitykart hotlink** ➔ Representative Arch 8 |
| **1517** | Asian Inst of Professional Studies (AIPS), Mhow, Indore | Devi Ahilya Vishwavidyalaya (DAVV) & AICTE | [aips.ind.in](https://aips.ind.in) | Remapped to verified Representative Arch 9 |
| **1518** | Radiant Inst of Engg & Mgmt (RIEM), Jabalpur | Rani Durgavati Vishwavidyalaya (RDVV) & AICTE | [riemedu.org](https://riemedu.org) | **CRITICAL FIX: Purged VNIT Nagpur photo leak & raw query** ➔ Representative Arch 10 |

---

## 3. Progress Verification Status

- **Previous Verified Count**: 170 Colleges (Batches 1–17)
- **Batch 18 Additions**: 10 Colleges (Colleges 171–180)
- **Cumulative Verified Count**: **180 / 12,660 Colleges (18.0% toward 1,000 Milestone)**
- **Audit Logs Updated**:
  - `reports/verification/college-verification.csv` (+10 rows)
  - `reports/verification/course-verification.csv` (+10 rows)
  - `reports/verification/image-verification.csv` (+10 rows)
  - `reports/verification/progress.json` (updated to 180)

