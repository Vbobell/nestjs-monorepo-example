import { Module } from '@nestjs/common';

import { HealtyModule } from './health/health.module';

@Module({
  imports: [HealtyModule],
  controllers: [],
  providers: [],
})
export class SwapiModule {}
