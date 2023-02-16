import { Controller, Get } from '@nestjs/common';
import { SwapiService } from './swapi.service';

@Controller()
export class SwapiController {
  constructor(private readonly swapiService: SwapiService) {}

  @Get()
  getHello(): string {
    return this.swapiService.getHello();
  }
}
