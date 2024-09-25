import path from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath} from 'url';
import { stdout } from 'process';

const read = async () => {
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const fileName = 'fileToRead.txt';
  const pathToFile = path.join(dirName, 'files', fileName);

  try {
    const content = await readFile(pathToFile, { encoding: 'utf-8' })
      .catch(() => { throw new Error('FS operation failed')})
    stdout.write(content + '\n');
  } catch (error) {
    console.error(error.message)
  }
};

await read();