import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const pathToWorker = path.join(dirName, 'worker.js')

  const promiseArr = [];

  for (let cpuNumber = 0; cpuNumber < cpus().length; cpuNumber++) {
    promiseArr.push(
      new Promise((res) => {
        const worker = new Worker(pathToWorker, { workerData: 10 + cpuNumber })
        worker.on('message', (data) => res({ status: 'resolved', data }))
        worker.on('error', () => res({ status: 'error', data: null }))
      })
    )
  }

  const result = await Promise.all(promiseArr)
  console.log(result);
};

await performCalculations();