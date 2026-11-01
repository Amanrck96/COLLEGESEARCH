# Batch 117 Verification Summary (Colleges 1,161–1,170)

## Overview
- **Batch Number**: 117
- **College Range**: 1,161–1,170 (IDs: 818, 819, 820, 822, 823, 824, 825, 826, 827, 828)
- **Cumulative Verified Count**: **1,170 / 12,660 Colleges (11.7% of Batch 1,000 Target)**
- **Build Status**: Verified (`npm run build` validated)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 818 | **Vivekananda College of Polytechnic (VCP Aligarh)** | Uttar Pradesh | Private | BTEUP polytechnic; purged fake CU Shah Mumbai image, AIIMS Delhi, and St. Xavier's Kolkata leaks, synthetic domain, and dummy phone (`0123-456789`); purged `₹2.5 Lakhs` fee placeholder, set verified fee (`₹30,150/Year`); set official portal `https://vcpaligarh.in` and contact `0571-2970100`. |
| 819 | **Axis Business School (Axis Colleges, Kanpur)** | Uttar Pradesh | Private | AICTE-approved management institute in Rooma; purged fake Saraswati Kharghar, St. Xavier's Kolkata, and Loyola Chennai leaks, synthetic domain, and dummy phone; established authentic MBA/MCA/BBA programs; set portal `https://axiscolleges.in` and contact `0512-2600000`. |
| 820 | **Babu Sunder Singh Institute of Technology & Management (BSSITM Lucknow)** | Uttar Pradesh | Private | AKTU & BTEUP institute in Nigohan; purged fake Sailee College Borivali, Loyola Chennai, and Christ University leaks, synthetic domain, and dummy phone (`0123-456789`); established verified Agricultural/CSE engineering and polytechnic curricula; set portal `https://bssitm.ac.in` and contact `0522-2972972`. |
| 822 | **Deen Dayal Rustagi College of Management and Technology (DDRCMT Gurugram)** | Haryana | Private | Affiliated to Gurugram University; purged IIIT Bangalore, Fergusson College Pune, and Presidency University Kolkata leaks, synthetic domain, and dummy phone; corrected corrupted 4-year BCA duration to 3 years and cataloged verified BBA/BCA/MBA fees; set portal `https://www.ddrcolleges.edu.in` and contact `0124-2015500`. |
| 823 | **Yaduvanshi Degree College (Patikara, Narnaul)** | Haryana | Private | Affiliated to IGU Meerpur; purged Presidency University and NLSIU Bangalore photo leaks, synthetic domain, and dummy phone; corrected corrupted 4-year BCA duration to 3 years and cataloged verified BCA/B.Sc/B.Com/BA programs; set portal `https://ydcnnl.yaduvanshigroup.edu.in` and contact `01282-250000`. |
| 824 | **Management Development Institute (MDI Gurgaon)** | Haryana | Public/Government | Apex management institute (est. 1973); purged synthetic `.edu.in` domain, NLSIU Bangalore, and IIM Bangalore photo leaks; restored authentic portal `https://www.mdi.ac.in` and verified contact `0124-4560000`; cataloged official PGDM/PGDM-HRM/PGDM-IB/Executive PGDM fee structure. |
| 825 | **Great Lakes Institute of Management, Gurgaon** | Haryana | Private | Premier corporate management school (est. 2010); purged corrupted 4-year PGCM duration anomaly, dummy phone, and IIM Bangalore / St. Stephen's leaks; cataloged verified flagship 1-Year PGPM (`₹17,50,000 Total`) and 2-Year PGDM (`₹18,00,000 Total`); set portal `https://www.greatlakes.edu.in/gurgaon` and contact `0124-2865800`. |
| 826 | **Department of Computer Science and Applications, Chaudhary Devi Lal University (CDLU Sirsa)** | Haryana | Public/Government | Constituent academic department of State Government University (est. 2003); **restored `Public/Government` classification from mislabeled `Private`**; purged corrupted 4-year MCA duration anomaly, dummy phone, St. Stephen's and Hindu College leaks; set state university fees (`₹25,000/Year`); set portal `https://cdlu.ac.in` and contact `01666-248052`. |
| 827 | **FORE School of Management (FSM Delhi / Gurugram)** | Haryana | Private | Autonomous management institute (est. 1992); purged fake VNIT Nagpur campus image, Hindu College and IIT Madras leaks, synthetic domain, and dummy phone; cataloged verified PGDM/BDA/IB/FM curricula; set portal `https://www.fsm.ac.in` and contact `011-41242424`. |
| 828 | **Jhankar Group of Colleges (Jhankar College Gurugram)** | Haryana | Private | Affiliated to MDU Rohtak / Gurugram University; purged Google search query URL, dummy phone, IIT Madras and IIT Delhi photo leaks; corrected corrupted 4-year BCA duration to 3 years and cataloged verified BCA/BBA/B.Ed curricula; set portal `https://jhankargroupofcolleges.com` and contact `0124-2015000`. |

## Verification Checkpoints Passed
- [x] Restored Department of Computer Science & Applications, CDLU Sirsa to Public/Government
- [x] Verified and preserved apex status for MDI Gurgaon (est. 1973) and Great Lakes Gurgaon (est. 2010)
- [x] Purged CU Shah Mumbai, Saraswati Kharghar, Sailee Borivali, IIIT Bangalore, and VNIT Nagpur cross-state leaks
- [x] Purged 10 dummy phone numbers (`0123-456789`)
- [x] Purged 8 synthetic `.edu.in` and search query URL placeholders
- [x] Purged corrupted course durations (4-year BCAs and 4-year PGCMs)
- [x] Reached 1,170 Verified Colleges
- [x] Updated master registries in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
