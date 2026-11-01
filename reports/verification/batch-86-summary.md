# Batch 86 Verification Summary (Colleges 851–860)

## Overview
- **Batch Number**: 86
- **College Range**: 851–860 (IDs: 460–464, 466–470)
- **Cumulative Verified Count**: **860 / 12,660 Colleges (86.0% of 1,000 Roadmap Milestone)**
- **Build Status**: Verified (`npm run build` exited with code 0)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 460 | **Arambagh Government Polytechnic (AGP Arambagh, Hooghly)** | West Bengal | Public/Government | State Government polytechnic under Dept of Technical Education, Govt. of West Bengal; restored `Public/Government` status from mislabeled `Private`; purged C.U. Shah Mumbai photo leak (`campus_cu_shah_mumbai.png`), synthetic domain (`arambaghgovernm.edu.in`), and dummy phone (`0123-456789`); audited nominal government fee schedules. |
| 461 | **Hilli Government Polytechnic (Hilli, Dakshin Dinajpur)** | West Bengal | Public/Government | State Government polytechnic in Hilli border area (WBSCTVESD); restored `Public/Government` status from mislabeled `Private`; purged COEP Pune photo leak (`campus_coep_pune.png`), synthetic domain (`hilligovtpolyte.edu.in`), and dummy phone; audited Electrical, Mechanical, and Civil diplomas. |
| 462 | **Raipur Government Polytechnic (RGP Bankura)** | West Bengal | Public/Government | State Government polytechnic in Siromanipur Raipur Bankura; restored `Public/Government` status from mislabeled `Private`; purged synthetic domain (`raipurgovernmen.edu.in`) and dummy phone; audited nominal government fee schedules across engineering diplomas. |
| 463 | **Adyapeath Annada Polytechnic College (AAPC Dakshineswar, Kolkata)** | West Bengal | Private | Polytechnic institute founded by Dakshineswar Ramkrishna Sangha Adyapeath; purged synthetic domain (`adyapeathannada.edu.in`) and dummy phone; audited Computer Science, Mechanical, Civil, and Electrical diplomas. |
| 464 | **Seacom Skills University School of Engineering (SSU Bolpur, Birbhum)** | West Bengal | Private | Constituent engineering faculty of Seacom Skills University in Kendradangal Bolpur; purged synthetic domain (`seacomskillsuni.edu.in`) and dummy phone; audited B.Tech and Diploma engineering curricula. |
| 466 | **Ghatal Government Polytechnic (GGP Ghatal, Paschim Medinipur)** | West Bengal | Public/Government | State Government polytechnic in Konnagar Ghatal (WBSCTVESD); restored `Public/Government` status from mislabeled `Private`; purged VJTI Mumbai photo leak (`vjti_mumbai.jpg`), synthetic domain (`ghatalgovtpolyt.edu.in`), and dummy phone; audited nominal government fee schedules. |
| 467 | **Mathabhanga Government Polytechnic (MGP Cooch Behar)** | West Bengal | Public/Government | State Government polytechnic in Mathabhanga Cooch Behar; restored `Public/Government` status from mislabeled `Private`; purged synthetic domain (`mathabhangagove.edu.in`) and dummy phone; audited Electrical, Mechanical, and Civil diplomas. |
| 468 | **Kalimpong Government Polytechnic (KGP Kalimpong)** | West Bengal | Public/Government | State Government polytechnic in Kalimpong hill region under Dept of Technical Education; restored `Public/Government` status from mislabeled `Private`; purged synthetic domain (`kalimponggovern.edu.in`) and dummy phone; audited Civil, Mechanical, and Automobile diplomas. |
| 469 | **JIS University (Agarpara, Kolkata)** | West Bengal | Private | Private university established under JIS University Act 2014 in Agarpara Kolkata; fixed raw Google search URL to official `jisuniversity.ac.in`; purged dummy phone; audited B.Tech CSE, Pharmacy, MBA, and Biotechnology courses. |
| 470 | **Sir Rajendra Nath Mookerjee Government Polytechnic (SRNMGP Magrahat)** | West Bengal | Public/Government | State Government polytechnic in Magrahat South 24 Parganas; restored `Public/Government` status from mislabeled `Private`; corrected spelling in raw record; purged synthetic domain (`sirrajendranath.edu.in`) and dummy phone; audited nominal government fees. |

## Verification Checkpoints Passed
- [x] Restored 7 State Government Polytechnics across West Bengal from mislabeled Private status to Public/Government
- [x] Repaired raw Google search URL on JIS University
- [x] Purged 100% of synthetic website domains (9 out of 10 institutions had truncated `.edu.in` fake domains)
- [x] Purged 100% of dummy phone numbers (`0123-456789`)
- [x] Purged 3 campus photo leaks (C.U. Shah Mumbai, COEP Pune, VJTI Mumbai)
- [x] Updated master registry in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
- [x] Production build passed with zero errors (`dist/index.html` built in 2.52s)
