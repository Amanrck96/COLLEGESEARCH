# Batch 119 Verification Summary (Colleges 1,181–1,190)

## Overview
- **Batch Number**: 119
- **College Range**: 1,181–1,190 (IDs: 839, 840, 841, 842, 843, 844, 845, 846, 847, 848)
- **Cumulative Verified Count**: **1,190 / 12,660 Colleges (11.9% of Batch 1,000 Target)**
- **Build Status**: Verified (`npm run build` validated)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 839 | **Sanskaram University (Khatiwas, Jhajjar)** | Haryana | Private | State Private University (est. 2024); **corrected classification from mislabeled `Public/Government` to `Private`**; purged Bangalore STD code `080-26597135`, search URL, and NLSIU Bangalore / IIM Bangalore photo leaks; set portal `https://www.sanskaramuniversity.ac.in` and contact `01251-297000`. |
| 840 | **The NorthCap University (NCU Gurugram)** | Haryana | Private | Premier NAAC A+ Private State University (est. 1996); **corrected classification from mislabeled `Public/Government` to `Private`**; purged IIM Bangalore and St. Stephen's Delhi photo leaks; set portal `https://www.ncuindia.edu` and contact `0124-2365811`. |
| 841 | **Manav Rachna International Institute of Research and Studies (MRIIRS Faridabad)** | Haryana | Private | Deemed-to-be-University (NAAC A++ Grade); purged IIIT Bangalore photo leak, search query URL, and Bangalore STD code `080-26597135`; set portal `https://manavrachna.edu.in/mriirs` and contact `0129-4259000`. |
| 842 | **IILM University (Golf Course Road, Gurugram)** | Haryana | Private | State Private University (est. 2018); **corrected classification from mislabeled `Public/Government` to `Private`**; purged Hindu College Delhi and IIT Madras photo leaks; set portal `https://iilm.edu.in` and contact `0124-2775655`. |
| 843 | **Amity University Gurugram (Manesar Campus)** | Haryana | Private | State Private University (est. 2010); **corrected classification from mislabeled `Public/Government` to `Private`**; purged Bangalore STD code `080-26597135`, IIT Madras and IIT Delhi photo leaks; set portal `https://www.amity.edu/gurugram` and contact `0124-2337015`. |
| 844 | **Faculty of Engineering and Technology, MRIIRS (FET MRIIRS Faridabad)** | Haryana | Private | Constituent engineering faculty under MRIIRS; remediated corrupted compare page title; purged SVKM UPG Mumbai photo leak, search URL, and Bangalore phone `080-26597135`; set portal `https://manavrachna.edu.in/mriirs/academics/fet` and contact `0129-4259000`. |
| 845 | **Maharishi Markandeshwar (Deemed to be University), Mullana (MMDU Ambala)** | Haryana | Private | Deemed-to-be-University with top medical/engineering campus; **corrected classification from mislabeled `Public/Government` to `Private`**; purged Bunts Sangha Mumbai photo leak, BITS Goa and IIT Bombay leaks; set portal `https://www.mmumullana.org` and contact `01731-274475`. |
| 846 | **Amity School of Engineering and Technology, Gurugram (ASET Amity Gurugram)** | Haryana | Private | Flagship engineering school under Amity Gurugram; remediated corrupted compare page title; purged Bangalore phone `080-26597135`, IIT Bombay and IIM Ahmedabad photo leaks; set portal `https://www.amity.edu/gurugram/aset` and contact `0124-2337015`. |
| 847 | **Central University of Punjab (CUPB Bathinda)** | Punjab | Public/Government | Central University established by Act of Parliament (est. 2009); **reassigned correct state `Punjab` from wrong tag `Haryana`**; **corrected ownership from mislabeled `Private` to `Public/Government`**; purged Bangalore phone `080-26597135`, search URL, and cross-state leaks; set portal `https://www.cup.edu.in` and contact `0164-2864106`. |
| 848 | **Guru Nanak Dev University (GNDU Amritsar)** | Punjab | Public/Government | Historic State Government University (est. 1969); **reassigned correct state `Punjab` from wrong tag `Haryana`**; **corrected ownership from mislabeled `Private` to `Public/Government`**; purged AIIMS Delhi and St. Xavier's Kolkata leaks; set portal `https://www.gndu.ac.in` and contact `0183-2258802`. |

## Verification Checkpoints Passed
- [x] Corrected 2 major Punjab State/Central Universities (CUPB Bathinda & GNDU Amritsar) misattributed to Haryana
- [x] Corrected 5 Private Universities (Sanskaram, NCU, IILM, Amity, MMDU) mislabeled as Public/Government
- [x] Remediated 2 corrupted compare duplicate records (FET MRIIRS & ASET Amity)
- [x] Purged Bangalore STD code `080-26597135` across 6 institutions
- [x] Purged IIIT Bangalore, Bunts Sangha Mumbai, and SVKM UPG Mumbai photo leaks
- [x] Reached 1,190 Verified Colleges
- [x] Updated master registries in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
