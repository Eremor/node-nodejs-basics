import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const pathToFile = path.join(dirName, 'files', 'fileToCompress.txt');
  const pathToArchive = path.join(dirName, 'files', 'archive.gz');

  try {
    const rs = createReadStream(pathToArchive);
    const ws = createWriteStream(pathToFile);

    await pipeline(
      rs,
      createGunzip(),
      ws
    )
  } catch (error) {
    console.error(error.message)
  }
};

await decompress();