# Batch 113 Verification Summary (Colleges 1,121–1,130)

## Overview
- **Batch Number**: 113
- **College Range**: 1,121–1,130 (IDs: 770, 771, 772, 773, 774, 775, 776, 778, 779, 780)
- **Cumulative Verified Count**: **1,130 / 12,660 Colleges (11.3% of Batch 1,000 Target)**
- **Build Status**: Verified (`npm run build` validated)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 770 | **Motilal Nehru National Institute of Technology Allahabad (MNNIT Prayagraj)** | Uttar Pradesh | Public/Government | Premier National Institute of Technology (NIT) established in 1961; verified `Public/Government` classification; set official portal `https://www.mnnit.ac.in` and contact `0532-2545404`; cataloged verified JoSAA B.Tech, MCA (NIMCET), and MBA curricula. |
| 771 | **KIET Group of Institutions (Muradnagar, Ghaziabad)** | Uttar Pradesh | Private | Premier autonomous engineering institute established in 1998 (NAAC 'A+'); purged raw Google search query string and out-of-state Bangalore STD code (`080-26597135`); set official portal `https://www.kiet.edu` and contact `01232-227980`. |
| 772 | **Noida Institute of Engineering and Technology (NIET Autonomous, Greater Noida)** | Uttar Pradesh | Private | Autonomous engineering institute (NAAC 'A', NBA); purged SVKM UPG Mumbai photo leak (`svkm_upg_vileparle.jpg`); set official portal `https://www.niet.co.in` and contact `0120-2328131`. |
| 773 | **Jaypee Institute of Information Technology (JIIT Deemed University, Noida)** | Uttar Pradesh | Private | Premier Deemed University established in 2001 (NAAC 'A+'); set official portal `https://www.jiit.ac.in` and contact `0120-2400973`; cataloged verified B.Tech, M.Tech, and MBA programs. |
| 774 | **Chandigarh University (Lucknow Campus, Sultanpur Road)** | Uttar Pradesh | Private | State Private University campus; restored `Private` classification from mislabeled `Public/Government`; set official domain `https://www.cuchd.in` and contact `0522-3510000`. |
| 775 | **Madan Mohan Malaviya University of Technology (MMMUT Gorakhpur)** | Uttar Pradesh | Public/Government | Historic State Government Technical University established in 1962 (NAAC 'A+'); verified `Public/Government` classification; set official portal `https://www.mmmut.ac.in` and contact `0551-2273804`. |
| 776 | **Aligarh Muslim University (AMU Central University, Aligarh)** | Uttar Pradesh | Public/Government | Premier historic Central University established in 1875/1920 (NAAC 'A+'); verified `Public/Government` classification; cataloged verified JNMC MBBS, ZHCET Engineering, Dental, and Law curricula; set official portal `https://www.amu.ac.in` and contact `0571-2700920`. |
| 778 | **Babu Banarasi Das Northern India Institute of Technology (BBDNIIT Lucknow)** | Uttar Pradesh | Private | Engineering and pharmacy institute established in 1999; purged synthetic `.edu.in` domain and dummy phone (`0123-456789`); set official domain `https://bbdniit.ac.in` and contact `0522-6196222`. |
| 779 | **College of Management Studies (CMS Kanpur, Juhi GT Road)** | Uttar Pradesh | Private | Business and computer applications institute established in 1999; purged synthetic `.edu.in` domain and dummy phone (`0123-456789`); corrected corrupted 4-year BCA duration to 3 years; set verified portal `http://cmskanpur.edu.in` and contact `0512-2603848`. |
| 780 | **Beacon Institute of Technology (BIT Meerut, Partapur Bypass)** | Uttar Pradesh | Private | Technical institute established in 2004; purged synthetic `.edu.in` domain and dummy phone (`0123-456789`); corrected corrupted 4-year BCA duration to 3 years; set official portal `https://beacon.ac.in` and contact `0121-2440316`. |

## Verification Checkpoints Passed
- [x] Verified MNNIT Allahabad, MMMUT Gorakhpur, and AMU Aligarh as Public/Government
- [x] Corrected Chandigarh University Lucknow Campus from Public to Private
- [x] Purged SVKM UPG Mumbai photo leak on NIET Greater Noida
- [x] Purged raw Google search query string on KIET Ghaziabad
- [x] Purged out-of-state Bangalore STD code (`080-26597135`) on KIET Ghaziabad
- [x] Purged 3 synthetic `.edu.in` domain placeholders
- [x] Purged 3 dummy phone numbers (`0123-456789`)
- [x] Corrected corrupted BCA durations (4 Years -> 3 Years)
- [x] Reached 1,130 Verified Colleges
- [x] Updated master registries in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
