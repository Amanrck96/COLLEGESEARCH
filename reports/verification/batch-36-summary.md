# Batch 36 Verification Summary: Andhra Pradesh Technical & Management Institutions

**Batch Number**: 36  
**Date**: October 31, 2026  
**Institutions Verified**: 10 (Cumulative Total: 360 / 12,660 - 36.0% of 1,000 Milestone)  
**State Focused**: Andhra Pradesh (Guntur, Kakinada, Visakhapatnam, Dharmavaram, Gooty, Tirupati, Madanapalle, Singarayakonda)

---

## 1. Executive Summary & Defect Resolutions

Batch 36 targeted 10 technical and management institutions across Andhra Pradesh, advancing the verified total to **360 Colleges (36.0% of 1,000 Roadmap)**. A major finding in this batch was multiple institutions having raw Google Search URLs stored in the `website` database field, alongside cross-state and out-of-state image leaks.

### Key Corrections:
1. **Purged Raw Google Search URLs from Database**:
   - **ID 2754 (VIET Visakhapatnam)**: Replaced `https://www.google.com/search?q=VISAKHA...` with official portal `https://www.viet.edu.in`.
   - **ID 2765 (Viswam Engineering College Madanapalle)**: Replaced `https://www.google.com/search?q=VISWAM...` with official portal `https://viswam.ac.in`.
   - **ID 2767 (Sanjeev Institute Kakinada)**: Replaced `https://www.google.com/search?q=SANJEEV...` with official portal `https://sim.edu.in`.
   - **ID 2768 (Abhinav Institute Singarayakonda)**: Replaced `https://www.google.com/search?q=ABHINAV...` with official portal `http://www.abhinavinstitutions.com`.
2. **Purged Cross-State Image Leaks**:
   - **ID 2759 (Haindavi PG College Dharmavaram)**: Sheila Raheja Bandra Mumbai (Maharashtra) image purged.
   - **ID 2761 (CSI Rayalaseema Diocese Gooty)**: CSI Institute of Technology Kanyakumari (Tamil Nadu) image purged.
   - **ID 2767 (Sanjeev Institute Kakinada)**: Out-of-state university campus (GGU) image purged.
3. **Scraper Hotlink Replacement**:
   - Replaced 4 external scraper webp/hotlinks (getmycollege, collegebatch, collegedunia, collegedekho) with clean local campus architecture assets.

---

## 2. Verified Institutions Detail

| ID | Institution Name | City | Type | Official Website | Accreditation | Key Action |
|---|---|---|---|---|---|---|
| **2744** | RV Institute of Technology (RVIT) | Guntur | Private | https://www.rvit.edu.in | NAAC B++ | Replaced external hotlink; verified JNTUK affiliation |
| **2746** | V.S. Lakshmi Institute of Management Studies | Kakinada | Private | https://vslakshmiwomenscollege.in | NAAC B | Replaced collegebatch webp asset; verified JNTUK |
| **2750** | Ambedkar Institute of Management Studies (AIMS) | Visakhapatnam | Private | http://aimsbschool.org | NAAC B+ | Replaced getmycollege hotlink; verified AU affiliation |
| **2754** | Visakha Institute of Engineering & Technology (VIET) | Visakhapatnam | Private | https://www.viet.edu.in | NAAC B | Purged raw Google Search URL; verified JNTU-GV |
| **2759** | Haindavi PG College (MBA) | Dharmavaram | Private | http://www.haindavipgcollege.org | NAAC B | Purged Sheila Raheja Bandra Mumbai photo leak |
| **2761** | CSI Rayalaseema Diocese Institute of Mgmt & Tech | Gooty | Diocese/Trust | http://www.csirdimt.org | NAAC B | Purged Kanyakumari CSI IT image leak; restored portal |
| **2764** | Gate Institute of Technology & Management Sciences | Tirupati | Private | http://www.gatetirupati.com | NAAC B | Replaced collegedunia image; verified SVU affiliation |
| **2765** | Viswam Engineering College | Madanapalle | Private | https://viswam.ac.in | NAAC B | Purged raw Google Search URL; restored viswam.ac.in |
| **2767** | Sanjeev Institute of Planning and Management | Kakinada | Private | https://sim.edu.in | NAAC B | Purged raw Google Search URL and out-of-state photo leak |
| **2768** | Abhinav Institute of Management & Technology | Singarayakonda | Private | http://www.abhinavinstitutions.com | NAAC B | Purged raw Google Search URL; restored official website |

---

## 3. Progress Tracking
- **Verified in Batch 36**: 10 Institutions
- **Total Officially Verified**: 360 / 12,660 (36.0% of 1,000 Milestone)
- **Pending to 1,000 Milestone**: 640 Institutions

