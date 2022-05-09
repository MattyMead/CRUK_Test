import * as PKG from '../../../package.json';

export const ENV: { [key: string]: string; } = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  TARGET_ENV: process.env.TARGET_ENV ?? 'development',
  APP_NAME: process.env.APP_NAME ?? 'CRUK Technical Exercise - React',
  NASA_API_KEY: process.env.NASA_API_KEY ?? ''
};