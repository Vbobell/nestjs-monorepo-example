import { Module } from '@nestjs/common';

import { HealthCheckUseCase } from '@libs/health-check/application/health-check.use-case';

@Module({
  providers: [HealthCheckUseCase],
  exports: [HealthCheckUseCase],
})
export class HealthCheckModule {}
