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
    },
  };
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [__dirname.replace('dist/', '') + '/.env'],
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
