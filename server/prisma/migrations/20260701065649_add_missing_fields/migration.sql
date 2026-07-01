-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_College" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL DEFAULT '0123-456789',
    "email" TEXT,
    "website" TEXT NOT NULL DEFAULT 'http://www.college.edu',
    "rating" REAL NOT NULL DEFAULT 4.5,
    "reviewsCount" INTEGER NOT NULL DEFAULT 0,
    "type" TEXT NOT NULL DEFAULT 'Private',
    "about" TEXT NOT NULL,
    "ranking" INTEGER NOT NULL DEFAULT 100,
    "facebook" TEXT NOT NULL DEFAULT '#',
    "instagram" TEXT NOT NULL DEFAULT '#',
    "linkedin" TEXT NOT NULL DEFAULT '#',
    "mapUrl" TEXT NOT NULL,
    "fees" TEXT NOT NULL DEFAULT 'Contact for details',
    "exams" TEXT NOT NULL DEFAULT 'Direct Admission',
    "img" TEXT NOT NULL,
    "gallery" TEXT NOT NULL DEFAULT '[]',
    "affiliation" TEXT NOT NULL DEFAULT '',
    "highestPackage" TEXT NOT NULL DEFAULT 'Contact for details',
    "averagePackage" TEXT NOT NULL DEFAULT 'Contact for details',
    "placements" TEXT NOT NULL DEFAULT 'N/A',
    "highlights" TEXT NOT NULL DEFAULT '',
    "facilities" TEXT NOT NULL DEFAULT '',
    "admissionProcess" TEXT NOT NULL DEFAULT '',
    "topRecruiters" TEXT NOT NULL DEFAULT '',
    "brochureLink" TEXT NOT NULL DEFAULT '',
    "pinCode" TEXT NOT NULL DEFAULT '',
    "country" TEXT NOT NULL DEFAULT 'India',
    "establishmentYear" TEXT NOT NULL DEFAULT '',
    "ownership" TEXT NOT NULL DEFAULT '',
    "approval" TEXT NOT NULL DEFAULT '',
    "accreditation" TEXT NOT NULL DEFAULT '',
    "universityType" TEXT NOT NULL DEFAULT '',
    "cutoffScores" TEXT NOT NULL DEFAULT '',
    "hostelInfo" TEXT NOT NULL DEFAULT '',
    "scholarships" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_College" ("about", "address", "admissionProcess", "affiliation", "averagePackage", "brochureLink", "email", "exams", "facebook", "facilities", "fees", "gallery", "highestPackage", "highlights", "id", "img", "instagram", "linkedin", "location", "mapUrl", "name", "phone", "placements", "ranking", "rating", "reviewsCount", "shortName", "state", "topRecruiters", "type", "website") SELECT "about", "address", "admissionProcess", "affiliation", "averagePackage", "brochureLink", "email", "exams", "facebook", "facilities", "fees", "gallery", "highestPackage", "highlights", "id", "img", "instagram", "linkedin", "location", "mapUrl", "name", "phone", "placements", "ranking", "rating", "reviewsCount", "shortName", "state", "topRecruiters", "type", "website" FROM "College";
DROP TABLE "College";
ALTER TABLE "new_College" RENAME TO "College";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
