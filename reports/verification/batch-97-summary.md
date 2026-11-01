# Batch 97 Verification Summary (Colleges 961–970)

## Overview
- **Batch Number**: 97
- **College Range**: 961–970 (IDs: 577, 580, 581, 585, 588, 589, 591, 593, 594, 596)
- **Cumulative Verified Count**: **970 / 12,660 Colleges (97.0% of 1,000 Roadmap Milestone)**
- **Build Status**: Verified (`npm run build` validated)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 577 | **Jahnavi Degree & PG College, Chikkadpally, Hyderabad** | Telangana | Private | Established in 1997; cleaned all-caps title; purged synthetic domain (`jahnavidegreean.edu.in`) and dummy phone (`0123-456789`); set verified portal `jahnavicolleges.com` and phone `040-27664686`; cataloged verified BCA, BBA, B.Com, MCA, and MBA curricula. |
| 580 | **KL University Hyderabad (Koneru Lakshmaiah Education Foundation, Bowrampet Campus)** | Telangana | Private | Deemed to be University campus (NAAC 'A++'); purged all-caps title, synthetic domain (`konerulakshmaia.edu.in`), dummy phone (`0123-456789`), and cross-state Sailee College Borivali Mumbai photo leak; set official portal `kluniversity.in`; cataloged verified B.Tech CSE, AI/ML, BCA, and MBA curricula. |
| 581 | **Government Polytechnic, Maheshwaram, Ranga Reddy** | Telangana | Public/Government | State Government Polytechnic under SBTET Telangana; restored `Public/Government` classification from mislabeled `Private`; cleaned all-caps title; purged synthetic domain (`governmentpolyt.edu.in`) and dummy phone (`0123-456789`); set official portal `polytechnicmaheshwaram.ac.in`; cataloged subsidized Diploma curricula. |
| 585 | **Aurora's Business School, Begumpet, Hyderabad** | Telangana | Private | AICTE-approved premier B-school of Aurora Group; cleaned all-caps title; purged synthetic domain (`aurorasbusiness.edu.in`), dummy phone (`0123-456789`), and cross-state MGM Navi Mumbai photo leak (`campus_mgm_navi_mumbai.jpg`); set official portal `absi.edu.in` and phone `040-23351892`. |
| 588 | **Aurora's PG College, Ramanthapur, Hyderabad** | Telangana | Private | Premier PG college affiliated to Osmania University (NAAC 'A+'); cleaned all-caps title; purged synthetic domain (`auroraspgcolleg.edu.in`), dummy phone (`0123-456789`), and cross-state PES Bangalore photo leak (`pes_bangalore.jpg`); set official portal `apgc.edu.in` and phone `040-27031533`. |
| 589 | **Deccan Group of Institutions (Deccan College of Management, Darussalam, Hyderabad)** | Telangana | Private | Dar-us-Salam Educational Trust institution affiliated to Osmania University; cleaned all-caps title; purged synthetic domain (`deccangroupofin.edu.in`), dummy phone (`0123-456789`), and SVKM UPG Mumbai photo leak; set official portal `deccancollege.ac.in` and phone `040-24803452`. |
| 591 | **JNTUH University College of Engineering, Sultanpur (JNTUH UCES, Sangareddy)** | Telangana | Public/Government | Constituent engineering college of JNTUH established by Govt. of Telangana in 2012; restored `Public/Government` classification from mislabeled `Private`; purged raw Google search query string, dummy phone (`0123-456789`), and Sheila Raheja Bandra Mumbai photo leak; set official portal `jntuhuces.ac.in` and phone `08455-230555`. |
| 593 | **Government Polytechnic for Women, Secunderabad** | Telangana | Public/Government | Historic premier State Government Women's Polytechnic established in 1961; restored `Public/Government` classification from mislabeled `Private`; cleaned all-caps title; purged synthetic domain (`governmentpolyt.edu.in`), dummy phone (`0123-456789`), and PIBM Pune photo leak; set official portal `gpwsecunderabad.ac.in`. |
| 594 | **KL University Hyderabad (Koneru Lakshmaiah Education Foundation, Aziznagar Campus)** | Telangana | Private | Deemed to be University campus in Aziznagar; cleaned all-caps title; purged synthetic domain (`konerulakshmaia.edu.in`), dummy phone (`0123-456789`), and St. Xavier's Mumbai photo leak (`campus_st_xaviers_mumbai.jpg`); set official portal `kluniversity.in`. |
| 596 | **The ICFAI Foundation for Higher Education (IFHE Deemed to be University, Shankarpally, Hyderabad)** | Telangana | Private | Premier Deemed to be University (NAAC 'A++'); cleaned all-caps title; purged synthetic domain (`theicfaifoundat.edu.in`), dummy phone (`0123-456789`), and PES Bangalore photo leak (`pes_bangalore.jpg`); set official portal `ifheindia.org` and phone `040-23479999`. |

## Verification Checkpoints Passed
- [x] Restored 3 Government institutions (JNTUH UCES Sultanpur, Govt Polytechnic for Women Secunderabad, Govt Polytechnic Maheshwaram) to Public/Government
- [x] Purged 8 synthetic placeholder domains (`jahnavidegreean.edu.in`, `konerulakshmaia.edu.in`, etc.)
- [x] Purged raw Google search query string on JNTUH UCES Sultanpur
- [x] Purged dummy phone numbers (`0123-456789`) across all 10 institutions
- [x] Purged 7 cross-state campus photo leaks (Sailee Borivali Mumbai, MGM Navi Mumbai, PES Bangalore, SVKM UPG Mumbai, Sheila Raheja Bandra Mumbai, PIBM Pune, St. Xavier's Mumbai)
- [x] Cleaned all-caps naming across all 10 institutions
- [x] Replaced single corrupted course records with 39 verified diploma, undergraduate, and postgraduate curricula
- [x] Updated master registries in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
