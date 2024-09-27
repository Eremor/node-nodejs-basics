import { env } from 'node:process';

const parseEnv = () => {
  const keys = Object.keys(env).filter((key) => key.startsWith('RSS_'));
  const result = keys.map((key) => `${key}=${env[key]}`).join('; ');
  console.log(result)
};

parseEnv();