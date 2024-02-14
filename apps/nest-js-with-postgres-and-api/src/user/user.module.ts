import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GetUsersUseCase } from '@apps/nest-js-with-postgres-and-api/user/application/get-users/get-users.use-case';
import { UserRepository } from '@apps/nest-js-with-postgres-and-api/user/domain/user-repository';
import { UserEntityTypeorm } from '@apps/nest-js-with-postgres-and-api/user/infrastructure/database/typeorm/entities/user.entity';
import { UserRepositoryTypeorm } from '@apps/nest-js-with-postgres-and-api/user/infrastructure/database/typeorm/user-repository.impl';

import { GetUsersController } from './interface/get-users/get-users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntityTypeorm])],
  providers: [
    {
      provide: UserRepository,
      useClass: UserRepositoryTypeorm,
    },
    GetUsersUseCase,
  ],
  controllers: [GetUsersController],
})
export class UserModule {}
