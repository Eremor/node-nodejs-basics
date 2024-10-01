import path from 'path';
import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const list = async () => {
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const pathToFolder = path.join(dirName, 'files');

  try {
    const files = await readdir(pathToFolder, { withFileTypes: true })
      .catch(() => { throw new Error('FS operation failed') })

    for (let file of files) {
      console.log(file.name)
    }
  } catch (error) {
    console.error(error.message)
  }
};

await list();