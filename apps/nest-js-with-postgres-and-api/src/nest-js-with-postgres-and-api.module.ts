import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@libs/database-tools/database-tools.module';

import { HealthModule } from '@apps/nest-js-with-postgres-and-api/health/health.module';
import { UserModule } from '@apps/nest-js-with-postgres-and-api/user/user.module';

const config = () => {
  return {
    database: {
      url: process.env.DATABASE_URL,
      synchronize: process.env.DATABASE_SYNC,
      type: process.env.DATABASE_TYPE,
      password: process.env.DATABASE_USER,
      username: process.env.DATABASE_PASSWORD,
    },
  };
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        __dirname.replace('dist/', '') + `/.env.${process.env.NODE_ENV}`,
      ],
      load: [config],
    }),
    DatabaseModule.forRoot('postgres'),
    HealthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class NestJsWithPostgresAndApiModule {}
