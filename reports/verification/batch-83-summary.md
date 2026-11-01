# Batch 83 Verification Summary (Colleges 821–830)

## Overview
- **Batch Number**: 83
- **College Range**: 821–830 (IDs: 427–429, 431–437)
- **Cumulative Verified Count**: **830 / 12,660 Colleges (83.0% of 1,000 Roadmap Milestone)**
- **Build Status**: Verified (`npm run build` exited with code 0)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 427 | **The Mandvi Education Society Institute of Computer Studies (TMESICS Mandvi, Surat)** | Gujarat | Private | Computer studies institute in Mandvi Surat (VNSGU); purged VJTI Mumbai photo leak (`vjti_mumbai.jpg`), synthetic domain (`themandvieducat.edu.in`), and dummy phone (`0123-456789`); audited BCA and PGDCA programs. |
| 428 | **Smt. R. S. Patel Institute of Diploma Engineering (Shelavi, Patan)** | Gujarat | Private | Polytechnic institute in Shelavi Patan (GTU); purged synthetic domain (`smtrspatelinsti.edu.in`) and dummy phone; audited engineering diploma programs. |
| 429 | **D. A. Degree Engineering and Technology (DADET Mahemdavad, Kheda)** | Gujarat | Private | Engineering college in Mahemdavad Kheda (GTU); purged synthetic domain (`dadegreeenginee.edu.in`) and dummy phone; audited B.Tech and Diploma engineering curricula. |
| 431 | **GIDC Degree Engineering College (GDEC Abrama, Navsari)** | Gujarat | Public/Government | Govt. of Gujarat initiative established by GIDC Education Society; restored `Public/Government` status from mislabeled `Private`; purged Saraswati Kharghar photo leak (`saraswati_kharghar.webp`), synthetic domain (`gidcdegreeengin.edu.in`), and dummy phone; corrected spelling defect in raw record. |
| 432 | **Government Polytechnic, Palanpur (GP Palanpur, Banaskantha)** | Gujarat | Public/Government | State Government polytechnic in Palanpur Banaskantha (est. 1984); restored `Public/Government` status from mislabeled `Private`; purged COEP Pune photo leak (`campus_coep_pune.png`), synthetic domain, and dummy phone; audited nominal government fee schedules. |
| 433 | **A. V. Parekh Technical Institute (AVPTI Rajkot)** | Gujarat | Public/Government | Historic State Government technical institute near Dharmendra College Rajkot (est. 1948); restored `Public/Government` status from mislabeled `Private`; purged synthetic domain (`avparekhtechnic.edu.in`) and dummy phone; audited Computer, Biomedical, and EC diplomas. |
| 434 | **Government Polytechnic, Dahod (GP Dahod)** | Gujarat | Public/Government | Historic State Government polytechnic in Dahod (est. 1958); restored `Public/Government` status from mislabeled `Private`; purged synthetic domain, dummy phone, and audited Civil, Mechanical, Electrical, and Computer diplomas. |
| 435 | **Saroj Mohan Institute of Technology (SMIT Hooghly, West Bengal)** | West Bengal | Private | Engineering institute in Guptipara Hooghly (MAKAUT); purged synthetic domain (`sarojmohaninsti.edu.in`) and dummy phone; audited B.Tech and Diploma engineering programs. |
| 436 | **Maulana Abul Kalam Azad University of Technology (MAKAUT, West Bengal)** | West Bengal | Public/Government | Premier State Public University of West Bengal (formerly WBUT, NAAC 'A' Grade); restored `Public/Government` status from mislabeled `Private`; purged synthetic domain (`maulanaabulkala.edu.in`) and dummy phone; audited B.Tech CSE, IT, MCA, and MBA curricula. |
| 437 | **The West Bengal National University of Juridical Sciences (WBNUJS Kolkata)** | West Bengal | Public/Government | Premier National Law University in Salt Lake Kolkata (NIRF Top 4 Law in India); purged PIBM Pune photo leak (`pibm_pune.webp`); restored verified official phone numbers; audited B.A. LL.B., B.Sc. LL.B., LL.M., and Ph.D. law programs. |

## Verification Checkpoints Passed
- [x] Validated institutional ownership, legal status, and state governance (restored GDEC Navsari, GP Palanpur, AVPTI Rajkot, GP Dahod, and MAKAUT to Public/Government)
- [x] Purged 100% of synthetic website domains (9 out of 10 institutions had truncated `.edu.in` fake domains)
- [x] Purged 100% of dummy phone numbers (9 out of 10 institutions had `0123-456789`)
- [x] Purged 4 campus photo leaks (VJTI Mumbai, Saraswati Kharghar, COEP Pune, PIBM Pune)
- [x] Updated master registry in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
- [x] Production build passed with zero errors (`dist/index.html` built in 3.27s)

