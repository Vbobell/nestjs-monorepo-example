import 'reflect-metadata';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config({
  path: `${__dirname}/../../.env.${process.env.NODE_ENV}`,
});

export const AppDataSource = new DataSource({
  type: 'postgres',
  database: process.env.DATABASE_BASE_NAME,
  synchronize:
    process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'test',
  logging: false,
  entities: [
    './apps/nest-js-with-postgres-and-api/src/**/infrastructure/database/typeorm/entities/*.entity.ts',
  ],
  migrations: [
    './apps/nest-js-with-postgres-and-api/external/database/migrations/*.ts',
  ],
  password: process.env.DATABASE_USER,
  username: process.env.DATABASE_PASSWORD,
});

AppDataSource.initialize()
  .then(async () => {
    console.log('Database has initialized');
  })
  .catch((error) => console.log(error));
