import * as dotenv from 'dotenv';
dotenv.config();

// application
const PORT = Number(process.env.PORT || 3001);

// postgres
const POSTGRES_HOST = process.env.POSTGRES_HOST || 'localhost';
const POSTGRES_USERNAME = process.env.POSTGRES_USERNAME || 'postgres';
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || 'postgres';
const POSTGRES_DB = process.env.POSTGRES_DB || 'postgres';
const POSTGRES_PORT = Number(process.env.POSTGRES_PORT) || 5432;

const ORM_CONFIG = {
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  username: POSTGRES_USERNAME,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
};

export { PORT, POSTGRES_PORT, ORM_CONFIG };
