import { Module } from '@nestjs/common';

import { HealthCheckModule } from '@libs/health-check';

import { SwHealthController } from '@apps/sw/health/interface/health.controller';

@Module({
  imports: [HealthCheckModule],
  controllers: [SwHealthController],
  providers: [],
})
export class HealthModule {}
