import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HealthCheckModule } from '@libs/health-check';

import { HealthController } from '@apps/postgres-and-api-example/health/interface/health.controller';

@Module({
  imports: [HealthCheckModule, ConfigModule],
  controllers: [HealthController],
  providers: [],
})
export class HealthModule {}
