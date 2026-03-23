const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  // Replace "pt-5 mt-5 " or "pt-5 mt-5"
  content = content.replace(/className="pt-5 mt-5\s?/g, 'className="');
  fs.writeFileSync(p, content);
});
console.log("Done");
