import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable, of } from 'rxjs';

import { Health, HealthCheckUseCase } from '@libs/health-check';

@Controller('/')
export class HealthController {
  private readonly NAME = 'postgres-and-api-example-service';
  private readonly DESCRIPTION = 'Example to create API with postgres';

  constructor(private readonly healthCheckUseCase: HealthCheckUseCase) {}

  @Get()
  @ApiTags('health')
  @HttpCode(200)
  health(): Observable<Health> {
    return of(this.healthCheckUseCase.execute(this.DESCRIPTION, this.NAME));
  }
}
