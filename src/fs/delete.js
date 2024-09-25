import path from 'path';
import { access, rm, constants } from 'fs/promises';
import { fileURLToPath } from 'url';

const remove = async () => {
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const fileName = 'fileToRemove.txt';
  const pathToFile = path.join(dirName, 'files', fileName);

  try {
    await access(pathToFile, constants.F_OK)
      .catch(() => { throw new Error('FS operation failed')})
    await rm(pathToFile);
  } catch (error) {
    console.error(error.message)
  }
};

await remove();