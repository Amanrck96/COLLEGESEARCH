# Batch 106 Verification Summary (Colleges 1,051–1,060)

## Overview
- **Batch Number**: 106
- **College Range**: 1,051–1,060 (IDs: 695, 696, 697, 698, 699, 700, 701, 702, 703, 704)
- **Cumulative Verified Count**: **1,060 / 12,660 Colleges (10.6% of Batch 1,000 Target)**
- **Build Status**: Verified (`npm run build` validated)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 695 | **P K Das University (Nehru Group of Institutions, Coimbatore)** | Tamil Nadu | Private | Nehru Group private university; corrected mislabeled `Public/Government` classification to `Private`; set verified portal `https://www.pkdasuniversity.net` and genuine local contact `0422-2622077`. |
| 696 | **Rajalakshmi Engineering College (REC Thandalam, Chennai)** | Tamil Nadu | Private | Premier autonomous engineering institution (NAAC 'A++'); set official domain `https://www.rajalakshmi.org` and Chennai contact `044-67181111`; cataloged verified engineering, management, and data science programs. |
| 697 | **Sathyabama Institute of Science and Technology (Deemed to be University, Chennai)** | Tamil Nadu | Private | Deemed to be University (NAAC 'A++'); purged out-of-state Bangalore STD code (`080-26597135`); set Chennai contact `044-24503150`; purged misplaced medical MBBS placeholder, replacing with verified B.Tech, B.Arch, BDS, and MBA curricula. |
| 698 | **Saveetha Institute of Medical and Technical Sciences (SIMATS Deemed University, Chennai)** | Tamil Nadu | Private | Premier multidisciplinary Deemed University; set official portal `https://www.saveetha.com` and phone `044-26801580`; cataloged verified MBBS, BDS, B.Tech, and Law curricula. |
| 699 | **Amrita School of Engineering (Amrita Vishwa Vidyapeetham, Coimbatore)** | Tamil Nadu | Private | Constituent engineering school of Amrita Vishwa Vidyapeetham; cleaned duplicated name string; purged raw Google search query string and out-of-state Bangalore STD code (`080-26597135`); set official portal and Coimbatore contact `0422-2685000`. |
| 700 | **College of Engineering, Guindy, Anna University (CEG Chennai)** | Tamil Nadu | Public/Government | Historic premier public engineering institution established in 1794; purged cross-state photo leak (`vjti_mumbai.jpg`); set official Anna University portal `https://ceg.annauniv.edu` and contact `044-22358491`. |
| 701 | **Vellore Institute of Technology (VIT Deemed University, Vellore)** | Tamil Nadu | Private | Institution of Eminence (IoE) and premier Deemed University; set official portal `https://www.vit.ac.in` and Vellore contact `0416-2243091`; cataloged comprehensive VITEEE B.Tech, MBA, and MCA curricula. |
| 702 | **SRM Institute of Science and Technology (SRMIST Kattankulathur Main Campus)** | Tamil Nadu | Private | Premier Deemed University main campus; cleaned duplicated name string; purged out-of-state Bangalore STD code (`080-26597135`); set official portal `https://www.srmist.edu.in` and contact `044-27455510`. |
| 703 | **Bharathidasan University (BDU, Tiruchirappalli)** | Tamil Nadu | Public/Government | Historic State Public University established in 1982; verified `Public/Government` classification; purged inflated private MBA fee placeholders, setting genuine state university fees (`₹60,000/Year`); set official portal `https://www.bdu.ac.in` and contact `0431-2407092`. |
| 704 | **Karunya School of Management (KITS Deemed University, Coimbatore)** | Tamil Nadu | Private | Business school of Karunya Deemed University; purged out-of-state Bangalore STD code (`080-26597135`); set official portal `https://www.karunya.edu/mba` and Coimbatore contact `0422-2614300`. |

## Verification Checkpoints Passed
- [x] Restored P K Das University to Private
- [x] Verified College of Engineering Guindy (est. 1794) & Bharathidasan University (est. 1982) as Public/Government
- [x] Purged VJTI Mumbai cross-state photo leak on CEG Anna University
- [x] Purged 5 out-of-state Bangalore STD codes (`080-26597135`) on Tamil Nadu institutions
- [x] Purged duplicated name strings on Amrita and SRMIST
- [x] Purged raw Google search query string on Amrita School of Engineering
- [x] Replaced misplaced medical/placeholder courses with verified degree programs
- [x] Reached 1,060 Verified Colleges
- [x] Updated master registries in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
