import { Controller, Get, HttpCode } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Health, HealthCheckUseCase } from '@libs/health-check';

@Controller('/')
export class SwHealthController {
  private readonly NAME = 'sw-service';
  private readonly DESCRIPTION = 'System to integration with SWAPI';

  constructor(private readonly healthCheckUseCase: HealthCheckUseCase) {}

  @Get()
  @HttpCode(200)
  health(): Observable<Health> {
    return of(this.healthCheckUseCase.execute(this.DESCRIPTION, this.NAME));
  }
}
