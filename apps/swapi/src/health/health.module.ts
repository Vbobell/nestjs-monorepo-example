import { Module } from '@nestjs/common';

import { SwapiHealtyController } from './interface/health.controller';

@Module({
  imports: [],
  controllers: [SwapiHealtyController],
  providers: [],
})
export class HealtyModule {}
