import { access, constants, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const fileName = 'fresh.txt';
  const pathToFile = path.join(dirName, 'files', fileName);
  let isExist = false;

  try {
    await access(pathToFile, constants.R_OK | constants.W_OK)
      .then(() => isExist = false)
      .catch(() => isExist = true)

    if (isExist) {
      writeFile(pathToFile, 'I am fresh and young')
    } else {
      throw new Error('FS operation failed')
    }
  } catch (error) {
    console.error(error.message)
  }
};

await create();