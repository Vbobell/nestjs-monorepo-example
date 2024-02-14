import { Observable } from 'rxjs';

import { Repository } from '@libs/abstract-tools/domain/repository/abstract.repository';

import { User } from '@apps/postgres-and-api-example/user/domain/user';

export abstract class UserRepository<Entity> extends Repository<Entity, User> {
  abstract getUsers(userIds: Pick<User, 'id'>[]): Observable<User[]>;
}
