# Batch 85 Verification Summary (Colleges 841–850)

## Overview
- **Batch Number**: 85
- **College Range**: 841–850 (IDs: 448–456, 459)
- **Cumulative Verified Count**: **850 / 12,660 Colleges (85.0% of 1,000 Roadmap Milestone)**
- **Build Status**: Verified (`npm run build` exited with code 0)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 448 | **Amity University Kolkata (Rajarhat, New Town)** | West Bengal | Private | Private state university established under West Bengal Act XXIV of 2014 in Rajarhat New Town; corrected mislabeled `Public/Government` to `Private`; purged Bangalore University photo leak (`bangalore_university.jpg`); audited B.Tech CSE, MBA, BBA, and Law curricula. |
| 449 | **Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur)** | West Bengal | Public/Government | Historic Institute of National Importance established in 1856 under Ministry of Education, Govt. of India (formerly Bengal Engineering College); restored `Public/Government` status from mislabeled `Private`; purged RIIM Pune photo leak (`riim_pune.jpeg`); audited B.Tech CST, Mechanical, Aerospace, and M.Tech programs. |
| 450 | **Jadavpur University, Kolkata (JU Kolkata)** | West Bengal | Public/Government | Premier State University and Institution of Eminence in South Kolkata (NIRF Top 10 University in India, NAAC 'A' Grade); audited nominal government fee schedules across B.Tech CSE, Mechanical, MCA, and Arts degrees. |
| 451 | **University of Kalyani (Kalyani, Nadia)** | West Bengal | Public/Government | State Public University in Kalyani Nadia (est. 1960, NAAC 'A' Grade); fixed raw Google search URL to official `klyuniv.ac.in`; purged Bangalore dummy phone; audited B.Tech IT, CSE, MCA, and MBA programs. |
| 452 | **Heritage Business School (HBS Kolkata, Anandapur)** | West Bengal | Private | Management institution under Kalyan Bharti Trust in Anandapur Kolkata (MAKAUT affiliated, NAAC accredited); cleaned website URL and phone formatting; audited MBA and Business Analytics programs. |
| 453 | **Praxis Business School (Praxis Kolkata)** | West Bengal | Private | Specialized business school on Bakrahat Road Kolkata renowned for AI and Data Science; audited PGDM and flagship Data Science postgraduate diploma programs. |
| 454 | **Birla Institute of Technology Extension Centre Kolkata (BIT Mesra Kolkata)** | West Bengal | Private | Extension campus of BIT Mesra (Deemed University) at Kasba Industrial Estate Kolkata; purged synthetic domain (`birlainstituteo.edu.in`) and dummy phone (`0123-456789`); audited BCA, BBA, and MCA programs. |
| 455 | **Global Institute of Management and Technology (GIMT Krishnanagar, Nadia)** | West Bengal | Private | Engineering institute in Krishnanagar Nadia (MAKAUT affiliated); purged synthetic domain (`globalinstitute.edu.in`) and dummy phone; audited B.Tech and Diploma engineering programs. |
| 456 | **Salbani Institute of Technology (SIT Salbani, Paschim Medinipur)** | West Bengal | Private | Polytechnic institute in Salbani Paschim Medinipur (WBSCTVESD affiliated); purged dummy phone; audited Mechanical, Civil, and Electrical engineering diplomas. |
| 459 | **Canning Government Polytechnic (CGP Canning, South 24 Parganas)** | West Bengal | Public/Government | State Government polytechnic under Dept of Technical Education, Govt. of West Bengal; restored `Public/Government` status from mislabeled `Private`; purged synthetic domain (`canninggovernme.edu.in`) and dummy phone; audited Computer Science, Electrical, and Civil diplomas. |

## Verification Checkpoints Passed
- [x] Corrected major institutional ownership inversion (Amity Kolkata to Private; IIEST Shibpur and Canning Polytechnic to Public/Government)
- [x] Repaired raw Google search URL on Kalyani University
- [x] Purged 100% of dummy phone numbers (`0123-456789` and `080-26597135`)
- [x] Purged 2 campus photo leaks (Bangalore University, RIIM Pune)
- [x] Updated master registry in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
- [x] Production build passed with zero errors (`dist/index.html` built in 2.53s)

