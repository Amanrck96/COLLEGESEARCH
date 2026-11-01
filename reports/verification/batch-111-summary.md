# Batch 111 Verification Summary (Colleges 1,101–1,110)

## Overview
- **Batch Number**: 111
- **College Range**: 1,101–1,110 (IDs: 750, 751, 752, 753, 754, 755, 756, 757, 758, 759)
- **Cumulative Verified Count**: **1,110 / 12,660 Colleges (11.1% of Batch 1,000 Target)**
- **Build Status**: Verified (`npm run build` validated)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 750 | **Institute of Management Sciences, University of Lucknow (IMS Lucknow)** | Uttar Pradesh | Public/Government | Constituent institute of State University of Lucknow established in 2001; restored `Public/Government` classification from mislabeled `Private`; purged Saraswati Kharghar Mumbai photo leak, synthetic `.edu.in` domain, and dummy phone; set verified portal `https://www.lkouniv.ac.in/en/page/institute-of-management-sciences` and contact `0522-2740412`. |
| 751 | **Innovative College of Pharmacy (Knowledge Park II, Greater Noida)** | Uttar Pradesh | Private | PCI-approved pharmacy college established in 2006; purged out-of-state Bangalore STD code (`080-26597135`); purged copy-pasted medical MBBS/MD placeholder, restoring verified B.Pharm, D.Pharm, and M.Pharm curricula; set verified contact `0120-2329500`. |
| 752 | **University of Lucknow (LU Main Campus, Badshah Bagh, Lucknow)** | Uttar Pradesh | Public/Government | Historic premier State Public University established in 1920 (NAAC 'A++'); verified `Public/Government` classification; purged copy-pasted MBBS placeholder, cataloging verified MBA, B.Tech, Law, MCA, and M.Sc curricula; set official portal `https://www.lkouniv.ac.in` and contact `0522-2740412`. |
| 753 | **United Institute of Medical Sciences (United Medicity, Prayagraj)** | Uttar Pradesh | Private | Private medical college established in 2020; restored `Private` classification from mislabeled `Public/Government`; set official portal `https://www.unitedmedicity.com` and contact `0532-2435600`. |
| 754 | **Teerthanker Mahaveer University (TMU Moradabad)** | Uttar Pradesh | Private | State Private University established in 2008 (NAAC 'A'); purged raw Google search query string and out-of-state Bangalore STD code (`080-26597135`); set official portal `https://www.tmu.ac.in` and Moradabad contact `0591-2476841`. |
| 755 | **Amity University (Lucknow Campus, Gomti Nagar Extension)** | Uttar Pradesh | Private | State Private University campus; restored `Private` classification from mislabeled `Public/Government`; purged misplaced medical MBBS placeholder, setting verified B.Tech, MBA, Law, and BCA curricula; set official portal `https://www.amity.edu/lucknow/` and contact `0522-2399418`. |
| 756 | **Emversity School of Hospitality & Allied Health Sciences, Bareilly** | Uttar Pradesh | Private | Allied health and hospitality institution; purged out-of-state Bangalore STD code (`080-26597135`); purged copy-pasted MBBS placeholder, setting verified MLT, OTT, and hospitality programs; set contact `0581-2460100`. |
| 757 | **Integral University (Kursi Road, Lucknow)** | Uttar Pradesh | Private | State Private Minority University established in 2004 (NAAC 'A+'); restored `Private` classification from mislabeled `Public/Government`; set official portal `https://www.iul.ac.in` and contact `0522-2890730`; cataloged verified MBBS, B.Tech, Pharmacy, and MBA curricula. |
| 758 | **IFTM University (Lodhipur Rajput, Moradabad)** | Uttar Pradesh | Private | State Private University established in 2010; restored `Private` classification from mislabeled `Public/Government`; purged GNIMS Matunga Mumbai photo leak; purged misplaced MBBS placeholder, setting verified B.Tech, Pharmacy, MBA, and Polytechnic curricula; set contact `0591-2360817`. |
| 759 | **GLA University (NH-2, Chaumuhan, Mathura)** | Uttar Pradesh | Private | Premier State Private University (NAAC 'A+'); restored `Private` classification from mislabeled `Public/Government`; purged misplaced MBBS placeholder, cataloging verified B.Tech CSE, AI/ML, MBA, and BCA curricula; set official portal `https://www.gla.ac.in` and contact `05662-250900`. |

## Verification Checkpoints Passed
- [x] Restored IMS University of Lucknow to Public/Government
- [x] Corrected 5 private universities/institutions (Amity Lucknow, Integral, IFTM, GLA, United Medicity) from mislabeled Public to Private
- [x] Purged Saraswati Kharghar Mumbai photo leak on IMS Lucknow
- [x] Purged GNIMS Matunga Mumbai photo leak on IFTM Moradabad
- [x] Purged 3 out-of-state Bangalore STD codes (`080-26597135`) on Uttar Pradesh institutions
- [x] Purged raw Google search query string on TMU Moradabad
- [x] Cleaned copy-pasted MBBS medical placeholders across 5 non-medical or multidisciplinary universities
- [x] Reached 1,110 Verified Colleges
- [x] Updated master registries in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
