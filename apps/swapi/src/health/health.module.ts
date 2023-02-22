import { Module } from '@nestjs/common';

import { SwapiHealtyController } from '@apps/swapi/health/interface/health.controller';

@Module({
  imports: [],
  controllers: [SwapiHealtyController],
  providers: [],
})
export class HealtyModule {}
