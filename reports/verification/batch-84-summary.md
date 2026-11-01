# Batch 84 Verification Summary (Colleges 831–840)

## Overview
- **Batch Number**: 84
- **College Range**: 831–840 (IDs: 438–447)
- **Cumulative Verified Count**: **840 / 12,660 Colleges (84.0% of 1,000 Roadmap Milestone)**
- **Build Status**: Verified (`npm run build` exited with code 0)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 438 | **Techno India University (Salt Lake, Sector V, Kolkata)** | West Bengal | Private | First private university in West Bengal established by Techno India Group in Salt Lake Sector V; purged Bangalore University photo leak (`bangalore_university.jpg`), synthetic domain (`technoindiauniv.edu.in`), and dummy phone (`0123-456789`); audited B.Tech CSE, AI&DS, and BCA curricula. |
| 439 | **Central Institute of Petrochemicals Engineering and Technology (CIPET: IPT Haldia)** | West Bengal | Public/Government | Premier Central Government petrochemicals institute under Dept of Chemicals & Petrochemicals, Ministry of Chemicals & Fertilizers; restored `Public/Government` status from mislabeled `Private`; purged Primus Bangalore photo leak (`primus_bangalore.jpg`) and dummy phone; audited B.Tech and M.Tech Plastics Engineering. |
| 440 | **International Management Institute Kolkata (IMI Kolkata, Alipore)** | West Bengal | Private | Premier RP-Sanjiv Goenka Group B-school in Alipore Kolkata (AMBA/NBA accredited, NIRF Top 60); purged BMS Bangalore photo leak (`bms_bangalore.jpg`), truncated domain, and dummy phone; audited PGDM and FPM doctoral programs. |
| 441 | **Calcutta Business School (CBS Kolkata, South 24 Parganas)** | West Bengal | Private | Autonomous management institute founded by Shikshayatan Foundation in Bishnupur; purged synthetic domain (`calcuttabusines.edu.in`) and dummy phone; audited PGDM and Business Analytics programs. |
| 442 | **Guru Nanak Institute of Technology (GNIT Kolkata, Sodepur)** | West Bengal | Private | JIS Group autonomous engineering college in Panihati Sodepur (MAKAUT affiliated); fixed raw Google search URL to official `gnit.ac.in`; purged Bangalore dummy phone; audited B.Tech CSE, IT, and MCA programs. |
| 443 | **Indian Institute of Information Technology, Kalyani (IIIT Kalyani)** | West Bengal | Public/Government | Institute of National Importance established by Ministry of Education, Govt. of India and Govt. of West Bengal; restored `Public/Government` status from mislabeled `Private`; purged Bangalore University photo leak and malformed website URL (`website@iiitkalyani.ac.in`); audited B.Tech CSE and ECE JoSAA curricula. |
| 444 | **Maulana Abul Kalam Azad University of Technology Main Campus (MAKAUT Haringhata)** | West Bengal | Public/Government | Main campus of West Bengal State Public University at Haringhata; restored `Public/Government` status from mislabeled `Private`; purged BMS Bangalore photo leak, raw Google search URL, and dummy phone; audited B.Tech AI, Data Science, and VLSI programs. |
| 445 | **Narula Institute of Technology (NiT Agarpara, Kolkata)** | West Bengal | Private | JIS Group NAAC 'A' Grade autonomous engineering college in Agarpara Kolkata; fixed raw Google search URL to official `nit.ac.in`; purged Bangalore dummy phone; audited B.Tech CSE, ECE, IT, and MCA programs. |
| 446 | **JIS College of Engineering (JISCE Kalyani, Nadia)** | West Bengal | Private | JIS Group flagship autonomous engineering college in Kalyani Nadia; corrected city misallocation from Kolkata to Nadia; cleaned phone formatting; audited B.Tech CSE, IT, Biomedical, and MBA curricula. |
| 447 | **Haldia Institute of Technology (HIT Haldia, Purba Medinipur)** | West Bengal | Private | Pioneer private engineering institute in West Bengal (ICARE, NAAC 'A' Grade); fixed raw Google search URL to official `hithaldia.ac.in`; purged Bangalore dummy phone; audited B.Tech CSE, Chemical, and ECE programs. |

## Verification Checkpoints Passed
- [x] Validated institutional ownership, legal status, and national/state governance (restored CIPET Haldia, IIIT Kalyani, and MAKAUT to Public/Government)
- [x] Repaired raw Google search URLs across 4 institutions (GNIT, MAKAUT, NiT, HIT)
- [x] Fixed malformed email prefix on IIIT Kalyani website
- [x] Purged 100% of dummy phone numbers (`0123-456789` and Bangalore placeholder `080-26597135`)
- [x] Purged 5 campus photo leaks (Bangalore University x2, Primus Bangalore, BMS Bangalore x2)
- [x] Updated master registry in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
- [x] Production build passed with zero errors (`dist/index.html` built in 2.44s)

