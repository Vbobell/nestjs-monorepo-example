import { Controller, Get, HttpCode } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Health, HealthCheckUseCase } from '@libs/health-check';

@Controller('/')
export class HealthController {
  private readonly NAME = 'nest-js-with-postgres-and-api-service';
  private readonly DESCRIPTION = 'Example to create API with postgres';

  constructor(private readonly healthCheckUseCase: HealthCheckUseCase) {}

  @Get()
  @HttpCode(200)
  health(): Observable<Health> {
    return of(this.healthCheckUseCase.execute(this.DESCRIPTION, this.NAME));
  }
}
