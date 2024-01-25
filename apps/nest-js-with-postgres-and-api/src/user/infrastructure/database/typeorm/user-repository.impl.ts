import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, map } from 'rxjs';
import { In, Repository } from 'typeorm';

import { loggerOperator } from '@libs/log-tools/infrastructure/logger-operator';

import { User } from '@apps/nest-js-with-postgres-and-api/user/domain/user';
import { UserRepository } from '@apps/nest-js-with-postgres-and-api/user/domain/user-repository';
import { UserEntityTypeorm } from '@apps/nest-js-with-postgres-and-api/user/infrastructure/database/typeorm/entities/user.entity';

@Injectable()
export class UserRepositoryTypeorm
  implements UserRepository<UserEntityTypeorm>
{
  private readonly logger = new Logger(UserRepositoryTypeorm.name);

  constructor(
    @InjectRepository(UserEntityTypeorm)
    private readonly repository: Repository<UserEntityTypeorm>,
  ) {}

  getUsers(userIds: Pick<User, 'id'>[]): Observable<User[]> {
    return from(
      this.repository.find({
        where: {
          id: In(userIds),
        },
      }),
    ).pipe(
      map((userEntities: UserEntityTypeorm[]) =>
        this.mapEntitiesToDomain(userEntities),
      ),
      loggerOperator(this.logger, 'UserRepositoryTypeorm', {
        initLog: {
          message: 'getUsers | execution started',
        },
        endLog: {
          message: 'getUsers | finished execution',
        },
        errorLog: {
          message: 'getUsers | execution with error',
        },
      }),
    );
  }

  mapEntityToDomain(userEntity: UserEntityTypeorm) {
    const user: User = {
      id: userEntity.id,
      name: userEntity.name,
    };

    return user;
  }

  mapEntitiesToDomain(userEntities: UserEntityTypeorm[]): User[] {
    return userEntities.map((userEntity) => this.mapEntityToDomain(userEntity));
  }
}
