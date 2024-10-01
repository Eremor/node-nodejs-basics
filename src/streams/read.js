import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';
import { stdout } from 'process';

const read = async () => {
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const fileName = 'fileToRead.txt';
  const pathToFile = path.join(dirName, 'files', fileName);

  const stream = createReadStream(pathToFile);

  stream.on('error', () => console.error('FS operation failed'));

  stream.on('data', (data) => { 
    stdout.write(data + '\n')
  })
};

await read();