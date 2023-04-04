import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Health } from '@libs/health-check/domain/health';

@Injectable()
export class HealthCheckUseCase {
  execute(description: string, name: string): Observable<Health> {
    return of({
      description,
      name,
    });
  }
}
