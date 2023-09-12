import { Controller, Get, HttpCode } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, of } from 'rxjs';

import { Health, HealthCheckUseCase } from '@libs/health-check';

@Controller('/')
export class HealthController {
  private readonly NAME = 'nest-js-with-postgres-and-api-service';
  private readonly DESCRIPTION = 'Example to create API with postgres';

  constructor(
    private readonly healthCheckUseCase: HealthCheckUseCase,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  @HttpCode(200)
  health(): Observable<Health> {
    console.log(this.configService.get('database'));

    return of(this.healthCheckUseCase.execute(this.DESCRIPTION, this.NAME));
  }
}
