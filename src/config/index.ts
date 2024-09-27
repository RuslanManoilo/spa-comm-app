import { config } from "dotenv";

config();

export const $env = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV || "development",
  API_URL: process.env.API_URL || "http://localhost:3000",

  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRESS_PASSWORD: process.env.POSTGRESS_PASSWORD,
  POSTGRESS_PORT: process.env.POSTGRESS_PORT,

  CORS_ORIGIN: process.env.CORS_ORIGIN,
  CORS_CREDENTIALS: process.env.CORS_CREDENTIALS === "true",
};
