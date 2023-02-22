import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('/')
export class SwHealthController {
  @Get()
  @HttpCode(200)
  health(): string {
    return 'success';
  }
}
