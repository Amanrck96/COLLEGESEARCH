# Batch 79 Verification Summary (Colleges 781–790)

## Overview
- **Batch Number**: 79
- **College Range**: 781–790 (IDs: 373–381, 384)
- **Cumulative Verified Count**: **790 / 12,660 Colleges (79.0% of 1,000 Roadmap Milestone)**
- **Build Status**: Verified (`npm run build` exited with code 0)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 373 | **State Institute of Hotel Management Siddhpur (SIHM Siddhpur, Patan)** | Gujarat | Public/Government | State Government hospitality institute established by TCGL Govt. of Gujarat, affiliated with NCHMCT and GTU; restored `Public/Government` status from mislabeled `Private`; purged IIIT Bangalore photo leak (`iiit_bangalore_campus.jpg`), synthetic domain (`stateinstituteo.edu.in`), and dummy phone (`0123-456789`). |
| 374 | **New L J Institute of Engineering and Technology (New LJIET, Ahmedabad)** | Gujarat | Private | Lok Jagruti Kendra engineering institute at Sarkhej Ahmedabad (LJ University); purged synthetic domain (`newljinstituteo.edu.in`) and dummy phone; audited B.Tech CSE, IT, and AI&DS programs. |
| 375 | **Shankersinh Vaghela Bapu Technical Campus (Bapu GKV, Gandhinagar)** | Gujarat | Private | Technical campus in Vasan Gandhinagar (GTU); purged synthetic domain (`shankersinhvagh.edu.in`) and dummy phone; audited B.Tech and Diploma engineering programs. |
| 376 | **Smt. Vanitaben Bachubhai Nandola MCA College (Una, Gir Somnath)** | Gujarat | Private | Post-graduate IT institute in Bhacha Una (BKNMU / GTU); purged synthetic domain (`smtvanitabenbac.edu.in`) and dummy phone; audited MCA, BCA, and PGDCA programs. |
| 377 | **Tatva Institute of Technological Studies (TITS Modasa, Aravalli)** | Gujarat | Private | Engineering institute on Modasa-Malpur Road (GTU); purged synthetic domain (`tatvainstituteo.edu.in`) and dummy phone; audited B.Tech and Diploma engineering curricula. |
| 378 | **Vidush Somany Institute of Technology and Research (VSITR, KSV Gandhinagar)** | Gujarat | Private | Constituent engineering college of Kadi Sarva Vishwavidyalaya in Sector 23 Gandhinagar; purged synthetic domain (`vidushsomanyins.edu.in`) and dummy phone; audited B.Tech and M.Tech engineering programs. |
| 379 | **Dr. Subhash University (Junagadh)** | Gujarat | Private | State Private University in Junagadh (formerly Dr. Subhash Technical Campus); purged synthetic domain (`drsubhashuniver.edu.in`) and dummy phone; audited B.Tech CSE, Pharmacy, MBA, and Polytechnic courses. |
| 380 | **Patel Group of Institutions (PGI Rampura, Kadi, Mehsana)** | Gujarat | Private | Engineering and management institution in Rampura Kadi (GTU); purged synthetic domain (`patelgroupofins.edu.in`) and dummy phone; audited B.Tech, MBA, and Diploma engineering programs. |
| 381 | **Dharmsinh Desai University (DDU Nadiad)** | Gujarat | Public/Government | Premier State University / Grant-in-aid established in 1968 (NAAC 'A' Grade, NIRF ranked); restored `Public/Government` status from mislabeled `Private`; purged synthetic domain (`dharmsinhdesaiu.edu.in`) and dummy phone; audited dual-track Grant-in-Aid and SFI fees across B.Tech, B.Pharm, MCA, and MBA. |
| 384 | **Devang Patel Institute of Advance Technology and Research (DEPSTAR CHARUSAT, Anand)** | Gujarat | Private | Constituent institute of CHARUSAT at Education Campus Changa; purged C.U. Shah Mumbai photo leak (`campus_cu_shah_mumbai.png`), synthetic domain (`devangpatelinst.edu.in`), and dummy phone; audited B.Tech CSE, CE, IT, and M.Tech programs. |

## Verification Checkpoints Passed
- [x] Validated institutional ownership, legal status, and state governance (restored SIHM Siddhpur and DDU Nadiad to Public/Government)
- [x] Purged 100% of synthetic website domains (10 out of 10 institutions had truncated `.edu.in` fake domains)
- [x] Purged 100% of dummy phone numbers (10 out of 10 institutions had `0123-456789`)
- [x] Purged 2 campus photo leaks (IIIT Bangalore, C.U. Shah Mumbai)
- [x] Updated master registry in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
- [x] Production build passed with zero errors (`dist/index.html` built in 2.37s)
