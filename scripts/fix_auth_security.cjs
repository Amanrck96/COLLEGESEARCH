const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'contexts', 'AuthContext.jsx');
let code = fs.readFileSync(file, 'utf-8');

const target = 'return saved ? decryptState(saved) : { id: 1, name: "Super Admin", email: "admin@thecollegecompass.com", role: "superadmin" };';
const replacement = 'return saved ? decryptState(saved) : null;';

if (code.includes(target)) {
  code = code.replace(target, replacement);
  fs.writeFileSync(file, code, 'utf-8');
  console.log('✓ AuthContext.jsx: Fixed default currentUser to null for secure RBAC');
} else {
  console.error('Target string not found in AuthContext.jsx');
}

