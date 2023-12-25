export const availableEnv = {
  LOCAL: 'LOCAL',
  DEVELOPMENT: 'DEVELOPMENT',
  PRODUCTION: 'PRODUCTION',
};

export const getEnv = (name: string, def = ''): string => {
  try {
    const env = process.env[name.toUpperCase()] || def;
    if (!env) {
      throw new Error(
        `${name.toUpperCase()} not found on global environment vars`,
      );
    }
    return env;
  } catch (error) {
    console.log(error);
  }
};

export const currentEnv = () => getEnv('ENV', availableEnv.DEVELOPMENT) as any;

export const isLocal = () => currentEnv() === availableEnv.LOCAL;

export const isDevelopment = () =>
  [availableEnv.DEVELOPMENT, availableEnv.LOCAL].includes(currentEnv());

export const isProduction = () => currentEnv() === availableEnv.PRODUCTION;
