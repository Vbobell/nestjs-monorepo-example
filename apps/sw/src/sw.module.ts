import { Module } from '@nestjs/common';

import { HealthModule } from '@apps/sw/health/health.module';

@Module({
  imports: [HealthModule],
  controllers: [],
  providers: [],
})
export class SwModule {}
