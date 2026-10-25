import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting CollegeSearch concurrent servers...');

// Start Vite frontend server
const vitePath = path.resolve(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');
const vite = spawn(process.execPath, [vitePath, '--port', '5173', '--host'], { 
  stdio: 'inherit'
});

// Start Express backend server
const server = spawn('npm.cmd', ['run', 'dev'], { 
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
