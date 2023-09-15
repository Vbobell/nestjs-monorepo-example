import 'reflect-metadata';
import { DataSource } from 'typeorm';

console.log(__dirname);

export const AppDataSource = new DataSource({
  type: 'postgres',
  database: 'nest-js-with-postgres-and-api',
  synchronize: false,
  logging: false,
  entities: [
    './apps/nest-js-with-postgres-and-api/src/**/infrastructure/database/typeorm/entities/*.entity.ts',
  ],
  migrations: [
    './apps/nest-js-with-postgres-and-api/external/database/migrations/*.ts',
  ],
  password: 'postgres',
  username: 'postgres',
});

AppDataSource.initialize()
  .then(async () => {
    console.log('Database has initialized');
  })
  .catch((error) => console.log(error));
