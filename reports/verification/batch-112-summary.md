# Batch 112 Verification Summary (Colleges 1,111–1,120)

## Overview
- **Batch Number**: 112
- **College Range**: 1,111–1,120 (IDs: 760, 761, 762, 763, 764, 765, 766, 767, 768, 769)
- **Cumulative Verified Count**: **1,120 / 12,660 Colleges (11.2% of Batch 1,000 Target)**
- **Build Status**: Verified (`npm run build` validated)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 760 | **Sharda School of Allied Health Sciences (Sharda University, Greater Noida)** | Uttar Pradesh | Private | Constituent school of Sharda University established in 2009; purged misplaced MBBS placeholder, cataloging verified BPT, BMLT, MRIT, and MPT programs; set official portal `https://www.sharda.ac.in/schools/allied-health-sciences` and contact `0120-4570000`. |
| 761 | **Shri Ramswaroop Memorial University (SRMU Lucknow-Deva Road)** | Uttar Pradesh | Private | State Private University established in 2012; restored `Private` classification from mislabeled `Public/Government`; purged copy-pasted MBBS placeholder, setting verified B.Tech, MBA, Pharmacy, and Law curricula; set official portal `https://www.srmu.ac.in` and contact `05248-262222`. |
| 762 | **Babasaheb Bhimrao Ambedkar University (BBAU Central University, Lucknow)** | Uttar Pradesh | Public/Government | Historic Central University established in 1996 (NAAC 'A++'); restored `Public/Government` classification from mislabeled `Private`; purged raw Google search query string and out-of-state Bangalore STD code (`080-26597135`); purged copy-pasted MBBS placeholder, cataloging UIET B.Tech, MBA, MCA, and Law programs; set official portal `https://www.bbau.ac.in` and contact `0522-2995610`. |
| 763 | **National Institute of Pharmaceutical Education and Research (NIPER Raebareli, Lucknow Transit Campus)** | Uttar Pradesh | Public/Government | Central Institute of National Importance (INI) established in 2008; restored `Public/Government` classification from mislabeled `Private`; purged GNIMS Matunga Mumbai photo leak, raw Google search query string, and Bangalore phone (`080-26597135`); purged misplaced MBBS placeholder, cataloging M.S. (Pharm), M.Tech, and Ph.D curricula; set official portal `https://niperraebareli.edu.in` and contact `0522-2497903`. |
| 764 | **Sam Higginbottom University of Agriculture, Technology and Sciences (SHUATS Prayagraj)** | Uttar Pradesh | Private | Historic agricultural Deemed University established in 1910; purged CU Shah Mumbai photo leak; purged misplaced MBBS placeholder, setting verified Agricultural Sciences, Dairy Technology, and Agri-Business curricula; set official portal `https://shuats.edu.in` and contact `0532-2684281`. |
| 765 | **Max Institute of Allied and Paramedical Education (MIAPE - Max Hospital, Vaishali, Ghaziabad)** | Uttar Pradesh | Private | Allied healthcare training institute; purged Bangalore University photo leak, raw Google search query string, and Bangalore phone (`080-26597135`); purged copy-pasted MBBS placeholder, setting verified DMLT, DOTT, and dialysis curricula; set official portal and Ghaziabad contact `0120-4188000`. |
| 766 | **Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS Lucknow)** | Uttar Pradesh | Public/Government | Premier autonomous State Government medical institute established in 1983; restored `Public/Government` classification from mislabeled `Private`; purged BMS Bangalore photo leak, raw Google search query string, and Bangalore phone (`080-26597135`); purged misplaced MBBS placeholder (SGPGIMS is purely super-specialty), cataloging verified DM, M.Ch, MD, and B.Sc Nursing curricula; set official portal `https://www.sgpgims.org.in` and contact `0522-2668004`. |
| 767 | **King George's Medical University (Faculty of Dental Sciences & Nursing, KGMU Lucknow)** | Uttar Pradesh | Public/Government | Historic State Medical University dental & nursing faculties; restored `Public/Government` classification from mislabeled `Private`; purged raw Google search query string and Bangalore phone (`080-26597135`); cataloged verified BDS, MDS, and Nursing curricula; set official portal `https://www.kgmu.org` and contact `0522-2257540`. |
| 768 | **Indian Institute of Information Technology, Lucknow (IIIT Lucknow)** | Uttar Pradesh | Public/Government | Central Institute of National Importance (INI) established in 2015; verified `Public/Government` classification; set official portal `https://iiitl.ac.in` and contact `0522-2975511`; cataloged verified JoSAA B.Tech (CSE, CSAI, IT) and M.Tech curricula. |
| 769 | **Indian Institute of Information Technology, Allahabad (IIIT Allahabad, Jhalwa Campus)** | Uttar Pradesh | Public/Government | Central Institute of National Importance (INI) established in 1999; verified `Public/Government` classification; set official portal `https://www.iiita.ac.in` and contact `0532-2922000`; cataloged verified JoSAA B.Tech, M.Tech, and MBA curricula. |

## Verification Checkpoints Passed
- [x] Restored BBAU Central University Lucknow (est. 1996) to Public/Government
- [x] Restored NIPER Raebareli (Institute of National Importance est. 2008) to Public/Government
- [x] Restored SGPGIMS Lucknow (est. 1983) and KGMU to Public/Government
- [x] Corrected SRMU Lucknow from Public to Private
- [x] Purged GNIMS Matunga Mumbai photo leak on NIPER Raebareli
- [x] Purged CU Shah Mumbai photo leak on SHUATS Prayagraj
- [x] Purged Bangalore University photo leak on Max Institute Ghaziabad
- [x] Purged BMS Bangalore photo leak on SGPGIMS Lucknow
- [x] Purged 5 raw Google search query strings inserted as college websites
- [x] Purged 5 out-of-state Bangalore STD codes (`080-26597135`) on Uttar Pradesh institutions
- [x] Corrected copy-pasted MBBS placeholders across super-specialty, pharmacy, agriculture, and allied health institutions
- [x] Reached 1,120 Verified Colleges
- [x] Updated master registries in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
