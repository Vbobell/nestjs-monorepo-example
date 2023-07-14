import { Module } from '@nestjs/common';

import { HealthModule } from '@apps/nest-js-with-postgres-and-api/health/health.module';

@Module({
  imports: [HealthModule],
  controllers: [],
  providers: [],
})
export class NestJsWithPostgresAndApiModule {}
