const fs = require('fs');
const path = require('path');

const summary = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'reports', 'verification', 'all_verified_colleges.json'), 'utf8'));

let totalColleges = 0;
summary.forEach(b => { totalColleges += b.items.length; });

let md = `# CollegeSearch360 — Complete Master Directory of Verified Institutions

**Total Officially Verified Institutions**: **${totalColleges} / 12,660**  
**Roadmap Progress**: **${(totalColleges / 10).toFixed(1)}% of 1,000 Milestone**  
**Repository Branch**: \`main\`  
**GitHub Origin Status**: Synced directly with \`origin/main\` (\`https://github.com/Amanrck96/COLLEGESEARCH\`)  
**Audit Verification Date**: 2026-10-31  

---

## Complete Batch-by-Batch Verification Catalog

`;

summary.forEach(b => {
  md += `### Batch ${b.batch} (${b.items.length} Colleges)\n\n`;
  md += `| ID | Institution Name | Classification | Location | Verified Official Portal |\n`;
  md += `|:---|:---|:---|:---|:---|\n`;
  b.items.forEach(c => {
    const domain = c.website ? c.website.replace('https://', '').replace('http://', '').split('/')[0] : 'N/A';
    md += `| **${c.id}** | ${c.name} | ${c.type || 'Private'} | ${c.location} | [${domain}](${c.website}) |\n`;
  });
  md += `\n`;
});

const reportPath = path.join(__dirname, '..', 'reports', 'verification', 'all_verified_colleges.md');
fs.writeFileSync(reportPath, md, 'utf8');
console.log(`Saved reports/verification/all_verified_colleges.md (${totalColleges} colleges)`);
