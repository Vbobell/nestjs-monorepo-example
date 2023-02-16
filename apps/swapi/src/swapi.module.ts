import { Module } from '@nestjs/common';
import { SwapiController } from './swapi.controller';
import { SwapiService } from './swapi.service';

@Module({
  imports: [],
  controllers: [SwapiController],
  providers: [SwapiService],
})
export class SwapiModule {}
