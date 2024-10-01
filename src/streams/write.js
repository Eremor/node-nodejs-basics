import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream, access, constants } from 'fs';
import { stdin } from 'process';

const write = async () => {
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const fileName = 'fileToWrite.txt';
  const pathToFile = path.join(dirName, 'files', fileName);

  access(pathToFile, constants.F_OK, (err) => {
    if (err) {
      throw new Error('FS operation failed')
    } else {
      const ws = createWriteStream(pathToFile);
      stdin.pipe(ws);
    }
  })

};

await write();