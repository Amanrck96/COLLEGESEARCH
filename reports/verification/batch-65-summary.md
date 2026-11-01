# Batch 65 Verification Summary (Colleges 641–650)

## Overview
- **Batch Number**: 65
- **Colleges Covered**: 10 (IDs: 214, 215, 216, 217, 218, 219, 220, 221, 222, 223)
- **Cumulative Total Verified**: 650 / 12,660 (65.0% of 1,000 Roadmap Milestone)
- **Status**: PASSED (Build passed, records applied to `public/siteData.json`)

---

## Remediation Details

| ID | College Name | State | Type | Key Defect Remediations & Validations |
|---|---|---|---|---|
| **214** | Pillai College of Engineering, Panvel | Maharashtra | Private | Autonomous institute affiliated to Mumbai University (NAAC A+); purged dummy phone and raw search URL; audited engineering curricula. |
| **215** | RC Patel Institute of Technology, Shirpur, Dhule | Maharashtra | Private | Autonomous engineering college under DBATU; retained authentic Shirpur campus photo; purged dummy phone and raw search URL; verified engineering fee structure. |
| **216** | Trinity College of Engineering and Research, Pune | Maharashtra | Private | **Critical fix**: Corrected inverted `Public/Government` label to `Private`; retained verified genuine campus photo; purged dummy phone and raw search URL; audited engineering and MBA curricula. |
| **217** | Sardar Patel Institute of Technology, Andheri West, Mumbai | Maharashtra | Private | Bharatiya Vidya Bhavan autonomous college (NAAC A+); purged VJTI Mumbai photo leak, dummy phone, and raw search URL; audited premier B.Tech & MCA curricula. |
| **218** | Institute of Chemical Technology, Mumbai | Maharashtra | Public/Government | **Critical fix**: Restored apex State Deemed University / Public Autonomous status (formerly UDCT, NAAC A++) mislabeled `Private`; purged PIBM Pune photo leak; purged fake MBBS courses and restored statutory Chemical Engineering degrees (₹89k/Yr). |
| **219** | Visvesvaraya National Institute of Technology, Nagpur (VNIT) | Maharashtra | Public/Government | Institute of National Importance under Ministry of Education; retained authentic campus photo (`/images/campuses/campus_vnit_nagpur.jpeg`); replaced generic fees with statutory Central Govt INI tuition structure. |
| **220** | Prin. L. N. Welingkar Institute of Management (WeSchool Mumbai) | Maharashtra | Private | Premier business school under Shikshana Prasaraka Mandali; retained verified authentic campus photo (`/images/campuses/weschool_matunga_mumbai.jpeg`); audited PGDM and MMS degree structures. |
| **221** | Faculty of Management Studies, University of Delhi (FMS Delhi) | Delhi NCR | Public/Government | **Critical fix**: Restored legendary Delhi University business school; corrected state from `"Maharashtra"` to `"Delhi NCR"`; corrected portal to `https://fms.edu`; purged PIBM Pune photo leak; replaced generic ₹16L fee with iconic statutory tuition (₹2 Lakhs Total). |
| **222** | National Institute of Bank Management, Pune (NIBM Pune) | Maharashtra | Private | Apex banking institute established by RBI; purged Chetana Bandra photo leak; audited specialized PGDM in Banking & Financial Services. |
| **223** | Amity University Mumbai | Maharashtra | Private | **Critical fix**: Corrected inverted `Public/Government` label to `Private`; purged WeSchool Matunga photo leak, dummy phone, and generic URL; audited multidisciplinary degree programs. |

---

## Verification & Build Results
- `npm run build`: Zero errors, built cleanly in 4.24s.
- `all_verified_colleges.json`: 650 verified colleges registered.
- `reports/verification/all_verified_colleges.md`: 650 verified colleges recorded.

