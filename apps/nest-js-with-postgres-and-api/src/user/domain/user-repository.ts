import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Repository } from '@libs/abstract-tools/domain/repository/abstract.repository';

import { User } from '@apps/nest-js-with-postgres-and-api/user/domain/user';

@Injectable()
export abstract class UserRepository<Entity> extends Repository<Entity, User> {
  abstract getUsers(): Observable<User[]>;
}
