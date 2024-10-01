import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const pathToFile = path.join(dirName, 'files', 'fileToCompress.txt');
  const pathToArchive = path.join(dirName, 'files', 'archive.gz');

  try {
    const rs = createReadStream(pathToFile);
    const ws = createWriteStream(pathToArchive);

    await pipeline(
      rs,
      createGzip(),
      ws
    );
  } catch (error) {
    console.error(error.message)
  }
};

await compress();