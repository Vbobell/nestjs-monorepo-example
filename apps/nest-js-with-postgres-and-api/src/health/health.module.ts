import { Module } from '@nestjs/common';

import { HealthCheckModule } from '@libs/health-check';

import { HealthController } from '@apps/nest-js-with-postgres-and-api/health/interface/health.controller';

@Module({
  imports: [HealthCheckModule],
  controllers: [HealthController],
  providers: [],
})
export class HealthModule {}
