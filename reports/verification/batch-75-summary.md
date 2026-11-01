# Batch 75 Verification Summary (Colleges 741–750)

## Overview
- **Batch Number**: 75
- **College Range**: 741–750 (IDs: 331–340)
- **Cumulative Verified Count**: **750 / 12,660 Colleges (75.0% of 1,000 Roadmap Milestone)**
- **Build Status**: Verified (`npm run build` exited with code 0)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 331 | **Panchshil College of Education, Rajkot** | Gujarat | Private | Teacher training college in Mahika Rajkot (Saurashtra University); purged truncated fake domain (`panchshilcolleg.edu.in`) and dummy phone; purged fake BCA course and restored B.Ed and D.El.Ed. |
| 332 | **Pandit Deendayal Energy University (PDEU Gandhinagar)** | Gujarat | Private | Premier State Private University in Knowledge Corridor Gandhinagar (NAAC A++); purged truncated domain and dummy phone; audited B.Tech Petroleum and Chemical Engineering, MBA in Energy, and M.Tech fees. |
| 333 | **Shree Swaminarayan Institute of Technology (SSIT Gandhinagar)** | Gujarat | Private | Engineering college in Bhat Gandhinagar (GTU affiliated); purged Primus Bangalore photo leak (`primus_bangalore.jpg`), truncated synthetic domain, and dummy phone; audited B.Tech and diploma courses. |
| 334 | **The Maharaja Sayajirao University of Baroda (MSU Baroda)** | Gujarat | Public/Government | **CRITICAL FIX**: Historic State Public University in Pratapgunj Vadodara (est. 1949, NAAC A+); restored Public/Government status from mislabeled `Private`; purged copy-pasted generic B.Tech template and restored real Faculty of Technology and FMS Baroda curricula. |
| 335 | **Institute of Technology, Nirma University (ITNU Ahmedabad)** | Gujarat | Private | **CRITICAL FIX**: Premier private technology institute in Gota Ahmedabad (NAAC A+); restored Private status from inverted `Public/Government` label; audited real B.Tech CSE (₹2.15L/Yr), M.Tech, and MCA fees. |
| 336 | **Silver Oak College of Engineering and Technology (SOCET Ahmedabad)** | Gujarat | Private | Constituent engineering college of Silver Oak University on SG Highway; audited B.Tech and M.Tech programs. |
| 337 | **Sardar Vallabhbhai National Institute of Technology (SVNIT Surat)** | Gujarat | Public/Government | Institute of National Importance in Ichchhanath Surat; purged RIIM Pune photo leak (`riim_pune.jpeg`) and dummy 080 phone; audited statutory central NIT B.Tech and M.Tech tuition. |
| 338 | **Indian Institute of Information Technology Surat (IIIT Surat)** | Gujarat | Public/Government | Institute of National Importance (PPP model) in Kamrej Surat; audited B.Tech CSE and ECE programs. |
| 339 | **Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT Gandhinagar)** | Gujarat | Private | Pioneering ICT university in Gandhinagar (NAAC A); purged Bunts Sangha Mumbai photo leak (`bunts_sangha_mumbai.jpeg`); audited flagship B.Tech ICT (₹2.35L/Yr) and M.Sc Data Science fees. |
| 340 | **School of Technology, Pandit Deendayal Energy University (SoT PDEU Gandhinagar)** | Gujarat | Private | **CRITICAL FIX**: Constituent technology faculty of PDEU; restored Private status from inverted `Public/Government` label; purged VNIT Nagpur photo leak (`campus_vnit_nagpur.jpeg`); audited B.Tech and M.Tech engineering programs. |

## Verification Checkpoints Passed
- [x] Validated institutional ownership, legal status, and geographical boundaries across Gujarat institutions
- [x] Restored MSU Baroda to State Public University status from mislabeled Private
- [x] Corrected 2 private university institutions mislabeled as Public/Government (Nirma ITNU & SoT PDEU)
- [x] Purged 3 truncated synthetic website domains and 5 dummy phone numbers (`0123-456789` / `080-26597135`)
- [x] Purged 4 campus photo leaks (Primus Bangalore, RIIM Pune, Bunts Sangha Mumbai, VNIT Nagpur)
- [x] Updated master registry in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
- [x] Production build passed with zero errors

