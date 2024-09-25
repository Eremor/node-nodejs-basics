import path from 'path';
import { cp } from 'fs/promises';
import { fileURLToPath } from 'url';

const copy = async () => {
  try {
    const dirName = path.dirname(fileURLToPath(import.meta.url));
    const pathToOldFolder = path.join(dirName, 'files');
    const pathToNewFolder = path.join(dirName, 'files_copy');

    await cp(
      pathToOldFolder,
      pathToNewFolder,
      {
        recursive: true,
        errorOnExist: true,
        force: false
      }
    ).catch(() => {
      throw new Error('FS operation failed')
    })
  } catch (error) {
    console.error(error.message)
  }
};

await copy();
