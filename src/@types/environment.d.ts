declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      JWT_ACCESS_SECRET: string;
      JWT_REFRESH_SECRET: string;
    }
  }
}

export {};
