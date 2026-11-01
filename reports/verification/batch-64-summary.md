# Batch 64 Verification Summary (Colleges 631–640)

## Overview
- **Batch Number**: 64
- **Colleges Covered**: 10 (IDs: 204, 205, 206, 207, 208, 209, 210, 211, 212, 213)
- **Cumulative Total Verified**: 640 / 12,660 (64.0% of 1,000 Roadmap Milestone)
- **Status**: PASSED (Build passed, records applied to `public/siteData.json`)

---

## Remediation Details

| ID | College Name | State | Type | Key Defect Remediations & Validations |
|---|---|---|---|---|
| **204** | Datta Meghe Institute of Higher Education and Research, Wardha | Maharashtra | Deemed | Corrected inverted `Public/Government` to `Deemed` (NAAC A++); purged IIT Bombay photo leak; audited MBBS (JNMC), Dental (SPDC), and AI engineering curricula. |
| **205** | Dr. D.Y. Patil Vidyapeeth, Pune (DPU Pune) | Maharashtra | Deemed | Verified authentic DPU campus photo; audited medical, dental, and biotechnology fee structures. |
| **206** | Dr. D. Y. Patil Institute Of Technology, Pimpri, Pune | Maharashtra | Private | Affiliated to SPPU; purged Thakur Kandivali photo leak; updated phone to `020-27805298`; audited engineering curricula. |
| **207** | Veermata Jijabai Technological Institute (VJTI Mumbai) | Maharashtra | Public | **Critical fix**: Restored iconic Government Autonomous Engineering Institution (est. 1887) mislabeled `Private`; retained authentic Matunga campus photo (`/images/campuses/vjti_mumbai.jpg`); purged dummy phone and raw search URL; audited statutory state subsidized tuition (₹84k/Yr). |
| **208** | Vishwakarma Institute of Technology, Pune (VIT Pune) | Maharashtra | Private | SPPU Autonomous (NAAC A++); retained authentic campus photo; purged dummy phone and raw search URL; verified engineering fee structure. |
| **209** | SNBP University, Pune | Maharashtra | Private | **Critical fix**: Corrected inverted `Public/Government` label to `Private`; purged Matoshri photo leak, dummy phone, and raw search URL; updated official portal. |
| **210** | G.H. Raisoni SkillTech University, Nagpur | Maharashtra | Private | **Critical fix**: Corrected inverted `Public/Government` label to `Private`; purged Atharva Malad photo leak; audited skill-integrated engineering & business degrees. |
| **211** | COEP Technological University (College of Engineering Pune) | Maharashtra | Public/Government | **Critical fix**: Restored apex State Unitary Technological University (est. 1854) mislabeled `Private`; retained verified historic Shivajinagar campus photo (`/images/campuses/campus_coep_pune.png`); purged dummy phone; audited statutory state university fees (₹1.3L/Yr). |
| **212** | Universal SkillTech University, Mumbai | Maharashtra | Private | **Critical fix**: Corrected inverted `Public/Government` label to `Private`; purged SVIMS Wadala photo leak and raw search URL; audited design & technology curricula. |
| **213** | Symbiosis Institute of Technology, Pune (SIT Pune) | Maharashtra | Deemed | Constituent of Symbiosis International; purged Bunts Sangha photo leak, dummy phone, and raw search URL; audited engineering degree offerings. |

---

## Verification & Build Results
- `npm run build`: Zero errors, built cleanly in 2.86s.
- `all_verified_colleges.json`: 640 verified colleges registered.
- `reports/verification/all_verified_colleges.md`: 640 verified colleges recorded.
