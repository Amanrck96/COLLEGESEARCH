# Batch 96 Verification Summary (Colleges 951–960)

## Overview
- **Batch Number**: 96
- **College Range**: 951–960 (IDs: 567, 568, 569, 570, 571, 572, 573, 574, 575, 576)
- **Cumulative Verified Count**: **960 / 12,660 Colleges (96.0% of 1,000 Roadmap Milestone)**
- **Build Status**: Verified (`npm run build` validated)

## Verified Institutions & Defect Remediation

| ID | Institution Name | State | Type | Key Defect Remediations |
|---|---|---|---|---|
| 567 | **University of Hyderabad - School of Management Studies (SMS UoH, Gachibowli)** | Telangana | Public/Government | Premier Central University B-school; purged raw Google search query string and Bangalore STD telephone code (`080-26597135`); set official portal `smsuoh.ac.in` and phone `040-23135000`; cataloged verified MBA, MBA-HCM, MBA-BA, Executive MBA, and Ph.D. curricula. |
| 568 | **NMIMS Hyderabad (SVKM's NMIMS Deemed to be University, Jadcherla Campus)** | Telangana | Private | Deemed to be University campus in Jadcherla; purged raw Google search query string, Bangalore STD code (`080-26597135`), and cross-state PES Bangalore photo leak (`pes_bangalore.jpg`); set official portal `hyderabad.nmims.edu` and phone `08542-350062`; cataloged verified MBA, BBA, B.Com (Hons), B.Pharm+MBA, and Law curricula. |
| 569 | **Vignana Jyothi Institute of Management (VJIM Hyderabad, Bachupally)** | Telangana | Private | Autonomous premier management institute (AICTE, NBA, NAAC); populated missing city (`Hyderabad`); cataloged verified PGDM (General, Marketing, Finance, and Business Analytics) curricula. |
| 570 | **Institute of Public Enterprise (IPE Hyderabad, Shamirpet)** | Telangana | Private | Autonomous apex management institute under ICSSR (MoE); populated missing city (`Hyderabad`); set verified contact `040-23490900`; cataloged verified PGDM (General, BFS, IB, MM, and Executive) curricula. |
| 571 | **ICFAI Business School (IBS Hyderabad, IFHE Deemed University)** | Telangana | Private | Premier business school (AACSB accredited, constituent of IFHE); purged cross-state COEP Pune photo leak (`campus_coep_pune.png`); set official portal `ifheindia.org` and phone `040-23479999`; cataloged verified MBA, BBA, Executive MBA, and Ph.D. curricula. |
| 572 | **National Institute of Agricultural Extension Management (MANAGE Hyderabad, Rajendranagar)** | Telangana | Public/Government | Apex autonomous institution under Ministry of Agriculture & Farmers Welfare, Govt of India; restored `Public/Government` classification from mislabeled `Private`; purged duplicated string ("MANAGE MANAGE"), raw Google search query string, and Bangalore STD code (`080-26597135`); set official portal `manage.gov.in`. |
| 573 | **Institute of Management Technology (IMT Hyderabad, Shamshabad)** | Telangana | Private | Top-ranked management institute (AACSB member, SAQS accredited); populated missing city (`Hyderabad`); cataloged verified PGDM (General, Marketing, Finance), Executive PGDM, and FPM curricula. |
| 574 | **Vivekananda College of Computer Sciences (VCCS, Shadnagar)** | Telangana | Private | AICTE-approved MCA/MBA college affiliated to Osmania University; cleaned all-caps title; purged synthetic domain (`vivekanandapgco.edu.in`) and dummy phone (`0123-456789`); set verified portal `vivekanandacolleges.com` and phone `+91-9866957188`. |
| 575 | **Priyadarshini Degree & PG College, Hyderabad** | Telangana | Private | Degree and PG college affiliated to Osmania University; cleaned all-caps title; purged synthetic domain (`priyadarshinide.edu.in`) and dummy phone (`0123-456789`); set official portal `priyadarshinicollege.com` and phone `040-23751457`. |
| 576 | **Kavitha Memorial Degree & PG College, Khammam** | Telangana | Private | Established in 1991, affiliated to Kakatiya University; cleaned all-caps title; purged synthetic domain (`kavithamemorial.edu.in`) and dummy phone (`0123-456789`); set official portal `kavithacollege.com` and phone `08742-223799`. |

## Verification Checkpoints Passed
- [x] Restored MANAGE Hyderabad (under Ministry of Agriculture Govt of India) to Public/Government
- [x] Cleaned duplicated title on ID 572 ("MANAGE MANAGE")
- [x] Purged 3 raw Google search query strings inserted as college websites (SMS UoH, NMIMS Hyderabad, MANAGE)
- [x] Purged 3 synthetic placeholder domains (`vivekanandapgco.edu.in`, `priyadarshinide.edu.in`, `kavithamemorial.edu.in`)
- [x] Purged 3 dummy phone numbers (`0123-456789`) and 3 out-of-state Bangalore STD codes (`080-26597135`)
- [x] Purged 2 cross-state campus photo leaks (PES Bangalore, COEP Pune)
- [x] Cleaned all-caps naming across 3 regional colleges
- [x] Resolved null course names, cataloging 39 verified undergraduate, postgraduate, and doctoral curricula
- [x] Updated master registries in `reports/verification/all_verified_colleges.json` and `all_verified_colleges.md`
