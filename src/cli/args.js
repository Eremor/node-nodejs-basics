import { argv } from 'process';

const parseArgs = () => {
  const data = [];

  argv.forEach((arg, index) => {
    if (arg.startsWith('--')) {
      data.push(`${arg.slice(2)} is ${argv[index + 1]}`)
    }
  })
  
  console.log(data.join(', '))
};

parseArgs();