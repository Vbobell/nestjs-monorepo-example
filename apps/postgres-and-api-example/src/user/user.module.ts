import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GetUsersUseCase } from '@apps/postgres-and-api-example/user/application/get-users/get-users.use-case';
import { UserRepository } from '@apps/postgres-and-api-example/user/domain/user-repository';
import { UserEntityTypeorm } from '@apps/postgres-and-api-example/user/infrastructure/database/typeorm/entities/user.entity';
import { UserRepositoryTypeorm } from '@apps/postgres-and-api-example/user/infrastructure/database/typeorm/user-repository.impl';

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
