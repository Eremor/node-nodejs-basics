import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(data, _, cd) {
      cd(null, data.toString().split('').reverse().join('') + '\n')
    }
  })

  stdin.pipe(reverseTransform).pipe(stdout)
};

await transform();