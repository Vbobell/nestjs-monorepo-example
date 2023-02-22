import { Module } from '@nestjs/common';

import { SwHealthController } from '@apps/sw/health/interface/health.controller';

@Module({
  imports: [],
  controllers: [SwHealthController],
  providers: [],
})
export class HealtyModule {}
