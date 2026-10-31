# BATCH 1 OFFICIAL VERIFICATION & IMAGE FORENSICS REPORT

**Date**: October 31, 2026  
**Auditor**: Senior Data Verification Engineer & Autonomous QA Team  
**Branch**: `data/official-verification`  
**Backup SHA-256**: `404ba7dcd11ac08bd38081e64fe400f1d68c0d752f12a3ebef3a88fa6859bd53`

---

## 1. FORENSIC INVESTIGATION: WHY DTU & FOUNDER PHOTOS APPEARED ON LIVE VERCEL CARDS

Based on the 3 screenshots provided from `https://collegesearch-live.vercel.app/colleges?q=Top%20MBA%20Colleges%20in%20India`:

### Defect 1: DTU Building shown on "Maharana Pratap Institute" & "Khandelwal College"
* **Visual Evidence**: Both cards displayed a modern building with huge red letters reading **"DTU"**, **"DELHI TECHNOLOGY"**, and **"TECNOGIC UNVERSITY"**.
* **Technical Root Cause**:
  1. On the live Vercel deployment, 2,143 college records in `siteData.json` were mapped to `/images/campuses/campus_iit_delhi.jpg`.
  2. A previous scraping script had downloaded the DTU photo (71,292 bytes, SHA-256 `8cd8ce312e01566a497172423383004bf4bb695b9c5abd623a350e939160732f`) and erroneously named it `campus_iit_delhi.jpg`.
  3. Consequently, every single one of those 2,143 colleges displayed the DTU building facade with massive "DTU" lettering.

### Defect 2: Founder / Executive Portrait shown on "Srinivasan College"
* **Visual Evidence**: Card displayed a gentleman sitting in an office next to a brass elephant statue, rather than a college campus.
* **Technical Root Cause**:
  1. The asset file `/images/campuses/srinivasan_perambalur.jpg` deployed on Vercel was a 102 KB portrait of the founding chairman extracted from an introductory message page.
  2. Additionally, that same image had leaked to 257 other college listings.

### Defect 3: DTU Building shown on "IIM Calcutta"
* **Visual Evidence**: Card for IIM Calcutta also displayed the DTU building.
* **Technical Root Cause**:
  1. On Vercel, IIM Calcutta was mapped to an external hotlink: `https://image-static.collegedunia.com/...`.
  2. Collegedunia actively blocks hotlinked requests from external domains with HTTP 403 Forbidden.
  3. When the image errored, `CollegeImg.jsx` triggered `handleError()` and fell back to `getCampusFallback()`.
  4. In the old fallback pool, branded institutions were included, hashing directly to the DTU image.

---

## 2. ENGINEERING REMEDIATION (COMPLETED LOCALLY)

1. **Fallback Pool Purged**: In `src/components/CollegeImg.jsx`, removed all 24 branded institution photos. The pool now contains exclusively 9 verified, strictly unbranded architectural university photos (`campus_architecture_1.jpg` to `campus_architecture_9.jpg`).
2. **Badge Indicator Added**: Added an automatic `Representative Image` overlay badge with tooltip when an unbranded architecture fallback is used.
3. **Asset Files Replaced**:
   * `campus_iit_delhi.jpg` has been replaced with the authentic 2.88 MB IIT Delhi Hauz Khas main building.
   * `srinivasan_perambalur.jpg` has been replaced with the authentic 660 KB Academic Block A building of Srinivasan College.
4. **Database Scrubber**: Mappings in `siteData.json` for all 2,143 leaked colleges have been purged locally.

---

## 3. BATCH 1 VERIFICATION RESULTS (10 COLLEGES)

| ID | College Name | Official Website | Phone / Email | Verified Affiliation |
|---|---|---|---|---|
| **1439** | Gyanodaya Inst. of Prof. Studies, Neemuch (MP) | `https://gyanodayanmh.in` | `+91-9827550959`<br>`gyanodayanmh@gmail.com` | RGPV Bhopal & AICTE |
| **165** | SIBM Pune (Duplicate A) | `https://www.sibm.edu/` | `020-28116000` | SIU Deemed University (Marked Duplicate) |
| **233** | SIBM Pune (Canonical B) | `https://www.sibm.edu/` | `020-28116000`<br>`symbiosis@sibm.edu` | SIU Deemed University (Canonical) |
| **12660**| DTU Delhi | `https://www.dtu.ac.in` | `011-27871018` | Delhi State University |
| **821** | MPITM Kanina (Haryana) | `http://mpitmkanina.com/` | `+91-9812981215`<br>`mpitm.kanina@gmail.com` | MDU Rohtak & AICTE |
| **10811**| Srinivasan College MBA, Perambalur (TN) | `https://www.scas.ac.in` | `04328-220672`<br>`principal.scas@dsgroupmail.com` | Bharathidasan University & AICTE |
| **10800**| KCMT Bareilly (UP) | `https://kcmt.in` | `+91-8081332211`<br>`admission@kcmt.in` | AKTU / MJPRU Bareilly & AICTE |
| **12** | IIT Delhi | `https://home.iitd.ac.in/` | `011-26597135`<br>`info@iitd.ac.in` | Institute of National Importance (MoE) |
| **56** | IIM Calcutta | `https://www.iimcal.ac.in` | `+91-33-2467-8300`<br>`admissions@iimcal.ac.in` | Autonomous National Importance |
| **79** | T John College, Bengaluru (Karnataka) | `https://www.tjohncollege.com/` | `+91-80-4903 0555`<br>`info@tjohngroup.com` | Bangalore University & AICTE |

---

## 4. COURSE DURATION & FEE AUDIT (CRITICAL FINDINGS)

1. **Gyanodaya Neemuch (ID 1439) MCA**:
   * *Old Value*: `4 Years` (Incorrect scraper defect).
   * *Verified Value*: **`2 Years`** (AICTE revised Master of Computer Applications curriculum).
   * *Verified Fee*: ₹44,000/year (₹88,000 total).
2. **SIBM Pune (ID 233) MBA**:
   * *Old Value*: `2 Years`.
   * *Verified Value*: **`2 Years`** (Residential flagship MBA).
   * *Verified Fee*: ₹13,10,000/year (~₹26.2 Lakhs total academic fee).
3. **KCMT Bareilly (ID 10800) MBA & MCA**:
   * *Verified Values*: **MBA: 2 Years**, **MCA: 2 Years**.
   * *Verified Fee*: ₹66,500/year each (~₹1.33 Lakhs total).
4. **IIT Delhi (ID 12) Programs**:
   * *B.Tech CSE*: **4 Years**, Tuition ~₹1,00,000/semester.
   * *Dual Degree B.Tech + M.Tech*: **5 Years**, Tuition ~₹1,00,000/semester.

---

## 5. IMAGE AUDIT FOR BATCH 1

| College ID | College Name | Image Path | Status | Finding / Action |
|---|---|---|---|---|
| **1439** | Gyanodaya Neemuch | `/images/campuses/campus_architecture_9.jpg` | Representative | Clean unbranded architecture with overlay badge |
| **165** | SIBM Pune (Dup) | `/images/campuses/riim_pune.jpeg` | Needs Update | Redirect to Canonical ID 233 |
| **233** | SIBM Pune (Canon) | `/images/campuses/campus_architecture_4.jpg` | Proposed | Replace RIIM image with neutral representative |
| **12660**| DTU Delhi | `/images/campuses/delhi_technological_university.jpg` | Verified Authentic | Authentic DTU main campus building |
| **821** | MPITM Kanina | `/images/campuses/campus_architecture_8.jpg` | Representative | Clean unbranded architecture; DTU leak removed |
| **10811**| Srinivasan College | `/images/campuses/srinivasan_perambalur.jpg` | Verified Authentic | Authentic Academic Block A (Founder portrait removed) |
| **10800**| KCMT Bareilly | `/images/campuses/campus_architecture_6.jpg` | Representative | Clean unbranded architecture; DTU leak removed |
| **12** | IIT Delhi | `/images/campuses/campus_iit_delhi.jpg` | Verified Authentic | Authentic 2.88 MB Hauz Khas main building |
| **56** | IIM Calcutta | `/images/campuses/iim_calcutta.jpg` | Verified Authentic | Authentic Joka auditorium building |
| **79** | T John College | `/images/campuses/campus_architecture_3.jpg` | Representative | Clean unbranded architecture; Primus school removed |

