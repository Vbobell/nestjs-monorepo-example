import { Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

import { UseCase } from '@libs/abstract-tools';
import { loggerOperator } from '@libs/log-tools';

import { User } from '@apps/nest-js-with-postgres-and-api/user/domain/user';
import { UserRepository } from '@apps/nest-js-with-postgres-and-api/user/domain/user-repository';

@Injectable()
export class GetUsersUseCase
  implements UseCase<Pick<User, 'id'>[], Observable<User[]>>
{
  private readonly logger = new Logger(GetUsersUseCase.name);

  constructor(private readonly userRepository: UserRepository<unknown>) {}

  execute(params: Pick<User, 'id'>[]): Observable<User[]> {
    return this.userRepository.getUsers(params).pipe(
      loggerOperator(this.logger, 'GetUsersUseCase', {
        initLog: {
          message: 'execute | execution started',
        },
        endLog: {
          message: 'execute | finished execution',
        },
        errorLog: {
          message: 'execute | execution with error',
        },
      }),
    );
  }
}
