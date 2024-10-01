import path from 'path';
import { createReadStream, access, constants } from 'fs';
import { fileURLToPath } from 'url';
const { createHash } = await import('crypto');

const calculateHash = async () => {
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const fileName = 'fileToCalculateHashFor.txt';
  const pathToFile = path.join(dirName, 'files', fileName);

  try {
    access(pathToFile, constants.F_OK, (err) => {
      if (err) {
        throw new Error('FS operation failed')
      }
    })

    const hash = createHash('sha256');
    const input = createReadStream(pathToFile);

    input
      .pipe(hash)
      .setEncoding('hex')
      .on('data', (data) => { console.log(data) });
  } catch (error) {
    console.error(error.message)
  }
};

await calculateHash();