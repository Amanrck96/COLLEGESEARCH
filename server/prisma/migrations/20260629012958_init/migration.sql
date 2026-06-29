-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "College" (
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
    "brochureLink" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "collegeId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'Full Time',
    "division" TEXT NOT NULL DEFAULT 'Degree',
    "duration" TEXT NOT NULL DEFAULT '4 Years',
    "fees" TEXT NOT NULL DEFAULT 'Contact for details',
    "intake" TEXT NOT NULL DEFAULT 'N/A',
    "eligibility" TEXT NOT NULL DEFAULT 'As per norms',
    CONSTRAINT "Course_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Exam" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL DEFAULT 'May 15, 2026',
    "level" TEXT NOT NULL DEFAULT 'National',
    "tag" TEXT NOT NULL DEFAULT 'Engineering',
    "img" TEXT NOT NULL DEFAULT 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400'
);

-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "collegeId" INTEGER NOT NULL,
    "authorName" TEXT NOT NULL,
    "rating" REAL NOT NULL DEFAULT 5.0,
    "content" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Review_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bookmark" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Bookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Bookmark_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "action" TEXT NOT NULL,
    "userId" INTEGER,
    "details" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Exam_name_key" ON "Exam"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_userId_collegeId_key" ON "Bookmark"("userId", "collegeId");
