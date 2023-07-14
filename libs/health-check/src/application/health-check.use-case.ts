import { Injectable } from '@nestjs/common';

import { Health } from '@libs/health-check/domain/health';

@Injectable()
export class HealthCheckUseCase {
  execute(description: string, name: string): Health {
    return {
      description,
      name,
    };
  }
}
