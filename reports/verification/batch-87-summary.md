# Batch 87 Verification Summary (Colleges 861–870)

## Overview
- **Batch Number**: 87
- **College Range**: 861–870 (IDs: 471, 472, 474–481)
- **Cumulative Verified Count**: **870 / 12,660 Colleges (87.0% of 1,000 Roadmap Milestone)**
- **Build Status**: Verified (`npm run build` exited with code 0)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 471 | **Camellia Institute of Engineering and Technology (CIET Budbud, Bardhaman)** | West Bengal | Private | Engineering institute in Budbud Bardhaman (MAKAUT affiliated); purged BMS Bangalore photo leak (`bms_bangalore.jpg`), synthetic domain (`camelliainstitu.edu.in`), and dummy phone (`0123-456789`); audited B.Tech and Diploma engineering curricula. |
| 472 | **OmDayal Group of Institutions (ODGI Uluberia, Howrah)** | West Bengal | Private | Architecture and engineering institute in Uluberia Howrah (MAKAUT & CoA approved); corrected spelling in raw record; purged synthetic domain (`omdayalgroupofi.edu.in`) and dummy phone; audited B.Arch and B.Tech curricula. |
| 474 | **Sanaka Educational Trust's Group of Institutions (SETGOI Durgapur)** | West Bengal | Private | Integrated campus in Malandighi Durgapur (MAKAUT affiliated); purged synthetic domain (`sanakaeducation.edu.in`) and dummy phone; audited B.Tech, Pharmacy, and Diploma programs. |
| 475 | **Alipurduar Government Polytechnic (Damanpur, Alipurduar)** | West Bengal | Public/Government | State Government polytechnic in Damanpur Alipurduar (WBSCTVESD affiliated); restored `Public/Government` status from mislabeled `Private`; purged synthetic domain (`alipurduardaman.edu.in`) and dummy phone; audited nominal government fees. |
| 476 | **Siliguri Institute of Technology Diploma College (SIT Siliguri)** | West Bengal | Private | Techno India Group polytechnic in Sukna Siliguri (WBSCTVESD affiliated); purged synthetic domain (`siliguriinstitu.edu.in`) and dummy phone; audited Computer Science, Civil, and Electrical diplomas. |
| 477 | **Techno Polytechnic Durgapur (TPD Durgapur)** | West Bengal | Private | Polytechnic institute in Muchipara Durgapur (Techno India Group); purged synthetic domain (`technopolytechn.edu.in`) and dummy phone; audited engineering diploma programs. |
| 478 | **Ideal Institute of Engineering (IIE Kalyani, Nadia)** | West Bengal | Private | Engineering college in Kalyani Shilpanchal Nadia (MAKAUT affiliated); purged synthetic domain (`idealinstituteo.edu.in`) and dummy phone; audited B.Tech and Diploma engineering programs. |
| 479 | **Gayeshpur Government Polytechnic (GGP Nadia)** | West Bengal | Public/Government | State Government polytechnic in Gayeshpur Kalyani under Dept of Technical Education; restored `Public/Government` status from mislabeled `Private`; purged synthetic domain (`gayeshpurgovern.edu.in`) and dummy phone; audited Mechanical, Civil, and Survey engineering diplomas. |
| 480 | **Ranaghat Government Polytechnic (RGP Nadia)** | West Bengal | Public/Government | State Government polytechnic in Ranaghat Nadia; restored `Public/Government` status from mislabeled `Private`; purged synthetic domain (`ranaghatgovernm.edu.in`) and dummy phone; audited Electrical, Mechanical, and Civil diplomas. |
| 481 | **Cooch Behar Government Engineering College (CGEC Cooch Behar)** | West Bengal | Public/Government | Premier State Government engineering college established in 2016 by Dept of Higher Education, Govt. of West Bengal; restored `Public/Government` status from mislabeled `Private`; purged synthetic domain (`coochbehargover.edu.in`) and dummy phone; audited B.Tech CSE, ECE, EE, and Mechanical curricula. |

## Verification Checkpoints Passed
- [x] Restored 4 Government institutions (CGEC Cooch Behar, Alipurduar Govt Polytechnic, Gayeshpur Govt Polytechnic, Ranaghat Govt Polytechnic) to Public/Government
- [x] Purged 100% of synthetic website domains (10 out of 10 institutions had truncated `.edu.in` fake domains)
- [x] Purged 100% of dummy phone numbers (`0123-456789`)
- [x] Purged campus photo leak on CIET Budbud (`bms_bangalore.jpg`)
- [x] Updated master registry in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
- [x] Production build passed with zero errors (`dist/index.html` built in 2.59s)
