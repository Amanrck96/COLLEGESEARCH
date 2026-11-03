const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');
const candidatesPath = path.join(__dirname, '../reports/verification/batch-222-candidates.json');

const candidates = JSON.parse(fs.readFileSync(candidatesPath, 'utf8'));

// Update siteData.json
console.log('Updating siteData.json for Batch 222...');
const siteDataRaw = fs.readFileSync(siteDataPath, 'utf8');
const siteData = JSON.parse(siteDataRaw);
const colleges = Array.isArray(siteData) ? siteData : (siteData.colleges || []);

const batchIds = candidates.map(c => c.id);

candidates.forEach(candidate => {
  const clg = colleges.find(c => c.id === candidate.id);
  if (clg) {
    Object.assign(clg, candidate);
    clg.verified = true;
    clg.verifiedAt = new Date().toISOString();
  } else {
    console.error(`College with ID ${candidate.id} not found in siteData.json!`);
  }
});

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`Updated ${batchIds.length} colleges in siteData.json`);

// Update progress.json
console.log('Updating progress.json...');
let progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));

progress.verifiedColleges = 2220;
progress.batchesCompleted = 222;
progress.last_batch_completed = 222;
progress.currentBatch = 222;
progress.completionPercentage = "22.20%";
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["222"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2211-2220",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 222,
  verifiedCount: 10,
  totalVerified: 2220,
  timestamp: new Date().toISOString(),
  collegeIds: batchIds
});

if (Array.isArray(progress.completed_ids)) {
  batchIds.forEach(id => {
    if (!progress.completed_ids.includes(id)) {
      progress.completed_ids.push(id);
    }
  });
}

fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');

// Update all_verified_colleges.json
console.log('Updating all_verified_colleges.json...');
let allVerified = [];
if (fs.existsSync(allVerifiedJsonPath)) {
  allVerified = JSON.parse(fs.readFileSync(allVerifiedJsonPath, 'utf8'));
}

batchIds.forEach(id => {
  const updatedClg = colleges.find(c => c.id === id);
  if (updatedClg) {
    const idx = allVerified.findIndex(c => c.id === id);
    if (idx >= 0) {
      allVerified[idx] = updatedClg;
    } else {
      allVerified.push(updatedClg);
    }
  }
});
fs.writeFileSync(allVerifiedJsonPath, JSON.stringify(allVerified, null, 2), 'utf8');

// Update all_verified_colleges.md
console.log('Updating all_verified_colleges.md...');
let mdContent = fs.readFileSync(allVerifiedMdPath, 'utf8');
const batch222Entries = candidates.map((c, i) => {
  return `| ${2210 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(candidates[0].name)) {
  mdContent += `\n\n### Batch 222 (Colleges 2,211–2,220)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch222Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 222 verification successfully applied!');

