import { Module } from '@nestjs/common';

import { HealtyModule } from '@apps/sw/health/health.module';

@Module({
  imports: [HealtyModule],
  controllers: [],
  providers: [],
})
export class SwModule {}
