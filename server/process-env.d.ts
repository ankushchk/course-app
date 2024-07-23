declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    MONGODB_URI: string;
    DB_NAME: string;
    SECRET_KEY: string;
  }
}
