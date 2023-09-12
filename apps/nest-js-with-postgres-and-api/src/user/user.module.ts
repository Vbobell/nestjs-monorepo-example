import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from '@apps/nest-js-with-postgres-and-api/user/domain/user-repository';
import { UserEntityTypeorm } from '@apps/nest-js-with-postgres-and-api/user/infrastructure/database/typeorm/entities/user.entity';
import { UserRepositoryTypeorm } from '@apps/nest-js-with-postgres-and-api/user/infrastructure/database/typeorm/user-repository.impl';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntityTypeorm])],
  providers: [
    {
      provide: UserRepository,
      useClass: UserRepositoryTypeorm,
    },
  ],
})
export class UserModule {}
