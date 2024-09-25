import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const rename = async () => {
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const oldPath = path.join(dirName, 'files', 'wrongFilename.txt');
  const newPath = path.join(dirName, 'files', 'properFilename.md');
  let isExist = false;

  try {
    await fs.access(newPath, fs.constants.F_OK)
      .then(() => isExist = true)
      .catch(() => isExist = false)
    
    await fs.access (oldPath, fs.constants.F_OK)
      .catch(() => { throw new Error('FS operation failed') })
    
    if (!isExist) {
      await fs.rename(oldPath, newPath)
    } else {
      throw new Error('FS operation failed')
    }
  } catch (error) {
    console.error(error.message);
  }
};

await rename();