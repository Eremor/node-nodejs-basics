import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(data, _, cb) {
      cb(null, data.toString().split('').reverse().join('') + '\n')
    }
  })

  stdin.pipe(reverseTransform).pipe(stdout)
};

await transform();