# Batch 8 Verification Summary: Telangana & Tamil Nadu Premier Institutions (IDs 601 - 649)

**Date**: 2026-10-31  
**Batch Scope**: 10 Colleges (IDs 601, 602, 603, 605, 609, 614, 630, 631, 634, 649)  
**Total Cumulative Verified**: 80 / 12,660 Colleges  

---

## 1. Executive Summary & Defect Resolutions

Batch 8 focused on 10 prominent management and university institutes across Telangana (Hyderabad, Karimnagar, Warangal, Suryapet, Nizamabad) and Tamil Nadu (Chennai). Every college was audited against official institutional domains.

### Key Forensic Findings & Corrections:
1. **Critical Ownership / Type Misclassification Fixed**:
   - **National Institute of Rural Development and Panchayati Raj (NIRDPR) (ID 609)**: Originally mislabeled as `Private`. NIRDPR is an autonomous apex institution under the **Ministry of Rural Development, Government of India**. Corrected to `Public/Government (Autonomous Central Apex Institution)`.
   - **Presidency College (Autonomous), Chennai (ID 649)**: Originally mislabeled as `Private`. Presidency College is one of India's oldest and most prestigious **Government Arts Colleges** (established in 1840, ranked **NIRF #3 in India**). Corrected to `Public/Government (Autonomous Government Arts College)`.
   - **University College of Management Hyderabad (UCMH), JNTUH (ID 602)**: Originally mislabeled as `Private`. It is the constituent management college of Jawaharlal Nehru Technological University Hyderabad. Corrected to `Public/Government (State University Constituent College)`.
   - **University College of Commerce and Business Management (UCCBM), Osmania University (ID 603)**: Originally mislabeled as `Private`. It is the constituent college of Osmania University. Corrected to `Public/Government (State University Constituent College)`.
2. **Major Multi-State Image Leaks Eliminated**:
   - **NIRDPR Hyderabad (ID 609)**: Was displaying `/images/campuses/vjti_mumbai.jpg` (VJTI Mumbai engineering building in Maharashtra!).
   - **RKLK PG College, Suryapet (ID 614)**: Was displaying a third-party photo of Nagarjuna Government College, Nalgonda.
   - **Gauthami PG College, Nizamabad (ID 634)**: Was displaying a drone photo belonging to GITAM Women's College (`gitamw.ac.in`).
   All 3 remapped to clean unbranded representative architectural assets (`campus_architecture_*.jpg`) with the automated "Representative Image" badge.
3. **Broken & Fragile Aggregator Hotlinks Purged**:
   - Replaced fragile aggregator/slider hotlinks on UCCBM Osmania (ID 603), Sri Gaayathri College (ID 605), Aurora's PG College (ID 630), MESCO Institute (ID 631), and Presidency College (ID 649) with clean, high-availability local representative assets.

---

## 2. College Verification Audit Table

| ID | College Name | Old Status | Verified Type & Affiliation | Official Website | Image Correction |
|:---|:---|:---|:---|:---|:---|
| **601** | Sri Shivani Institute of Management, Gangadhara | Private | Private; Satavahana Univ & AICTE | [satavahana.ac.in](https://satavahana.ac.in) | Clean Arch 6 |
| **602** | UCMH, JNTU Hyderabad | Private | **Public/Govt (State Univ Constituent)**; JNTUH & AICTE | [sms.jntuh.ac.in](https://sms.jntuh.ac.in) | Clean Arch 4 |
| **603** | UCCBM, Osmania University | Private | **Public/Govt (State Univ Constituent)**; Osmania Univ & AICTE | [uccbm.osmania.ac.in](https://uccbm.osmania.ac.in) | OU hotlink ➔ Representative Arch 5 |
| **605** | Sri Gaayathri College of Management Sciences | Private | Private; Kakatiya Univ & AICTE | [srigaayathricolleges.in](https://www.srigaayathricolleges.in) | Jagran Josh hotlink ➔ Representative Arch 2 |
| **609** | NIRDPR Hyderabad | Private | **Public/Govt (Autonomous Central Apex)**; Ministry of Rural Dev, GOI | [nirdpr.org.in](https://nirdpr.org.in) | VJTI Mumbai (`vjti_mumbai.jpg`) ➔ Representative Arch 9 |
| **614** | RKLK PG College, Suryapet | Private | Private; JNTUH / MGU & AICTE | [rklkpgcollege.com](http://www.rklkpgcollege.com) | Nagarjuna Govt College hotlink ➔ Representative Arch 1 |
| **630** | Aurora's PG College (MBA), Bandlaguda | Private | Private; Osmania Univ, ICET APGB, AICTE | [apgcc.edu.in](https://www.apgcc.edu.in) | Universitykart hotlink ➔ Representative Arch 3 |
| **631** | Mesco Institute of Management and Computer Sciences | Private | Private; Osmania Univ, ICET MEST, AICTE | [mesco.org.in](https://www.mesco.org.in) | Collegedekho hotlink ➔ Representative Arch 4 |
| **634** | Gauthami PG College, Nizamabad | Private | Private; Telangana Univ, ICET GAUM, AICTE | [gauthamidegreeandpgcollege.com](https://www.gauthamidegreeandpgcollege.com) | GITAM drone photo ➔ Representative Arch 5 |
| **649** | Presidency College (Autonomous), Chennai | Private | **Public/Govt (Autonomous Govt Arts College)**; NIRF #3, Univ of Madras | [pcc.ac.in](https://www.pcc.ac.in) | Kollegeapply hotlink ➔ Representative Arch 6 |

---

## 3. Verified Courses & Durations

All 10 institutions were evaluated against official syllabi and AICTE approval letters:
- **Sri Shivani Institute (ID 601)**: MBA — 2 Years (₹40,000/yr)
- **UCMH JNTUH (ID 602)**: MBA — 2 Years (₹27,000/yr government fee)
- **UCCBM Osmania (ID 603)**: MBA — 2 Years (₹25,000/yr government fee)
- **Sri Gaayathri College (ID 605)**: MCA — 2 Years (₹40,000/yr)
- **NIRDPR Hyderabad (ID 609)**: PGDM-RDM — 2 Years (₹4,50,000 Total)
- **RKLK PG College (ID 614)**: MBA — 2 Years (₹40,000/yr)
- **Aurora's PG College (ID 630)**: MBA — 2 Years (₹60,000/yr)
- **MESCO Institute (ID 631)**: MBA — 2 Years (₹55,000/yr)
- **Gauthami PG College (ID 634)**: MBA — 2 Years (₹45,000/yr)
- **Presidency College Chennai (ID 649)**: MBA — 2 Years (₹10,000/yr government fee)

Zero course duration anomalies detected.

---

## 4. Next Steps
Awaiting user approval before applying changes to `public/siteData.json`.
Once approved:
1. Run `node scripts/apply_batch_8_updates.cjs`
2. Run `npm run build` to confirm zero regressions
3. Proceed to Batch 9 (Colleges 81 to 90)

