import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting CollegeSearch concurrent servers...');

// Start Vite frontend server
const vite = spawn('npx', ['vite'], { stdio: 'inherit', shell: true });

// Start Express backend server
const server = spawn('npm', ['run', 'dev'], { 
  cwd: path.resolve(__dirname, 'server'), 
  stdio: 'inherit', 
  shell: true 
});

vite.on('exit', (code) => {
  console.log(`Frontend exited with code ${code}`);
  server.kill();
  process.exit(code);
});

server.on('exit', (code) => {
  console.log(`Backend exited with code ${code}`);
  vite.kill();
  process.exit(code);
});
