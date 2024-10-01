import path from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const spawnChildProcess = async (...args) => {
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const pathToFile = path.join(dirName, 'files', 'script.js');

  const child = fork(pathToFile, [...args], { silent: true });

  process.stdin.pipe(child.stdin)
  child.stdout.pipe(process.stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess(1, 2, 3);
