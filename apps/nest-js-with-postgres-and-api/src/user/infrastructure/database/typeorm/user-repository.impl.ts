import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, map } from 'rxjs';
import { Repository } from 'typeorm';

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

  getUsers(): Observable<User[]> {
    return from(this.repository.find()).pipe(
      map((userEntities: UserEntityTypeorm[]) =>
        this.mapEntitiesToDomain(userEntities),
      ),
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
