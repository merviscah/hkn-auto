import { spawn } from 'child_process';

const args = process.argv.slice(2);
const nextArgs = ['dev'];

// Map arguments (specifically --host to -H for Next.js)
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--host') {
    nextArgs.push('-H');
  } else {
    nextArgs.push(args[i]);
  }
}

// Ensure port 3000 is specified if not already there
if (!nextArgs.includes('-p') && !nextArgs.includes('--port')) {
  nextArgs.push('-p', '3000');
}

console.log('Running dev server with:', 'next', nextArgs.join(' '));

const child = spawn('next', nextArgs, { stdio: 'inherit', shell: true });

child.on('close', (code) => {
  process.exit(code || 0);
});
