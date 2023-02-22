import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('/')
export class SwapiHealtyController {
  @Get()
  @HttpCode(200)
  health(): string {
    return 'health';
  }
}
