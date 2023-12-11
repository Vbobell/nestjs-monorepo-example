import { ConfigModule } from '@nestjs/config';
import { TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '@libs/database-tools';
import { TestHelper } from '@libs/test-tools';

import { UserEntityTypeorm } from '@apps/nest-js-with-postgres-and-api/user/infrastructure/database/typeorm/entities/user.entity';
import { UserRepositoryTypeorm } from '@apps/nest-js-with-postgres-and-api/user/infrastructure/database/typeorm/user-repository.impl';

const config = () => {
  return {
    database: {
      url: process.env.DATABASE_URL,
      synchronize: process.env.DATABASE_SYNC,
      type: process.env.DATABASE_TYPE,
      password: process.env.DATABASE_USER,
      username: process.env.DATABASE_PASSWORD,
    },
  };
};

describe('UserRepositoryTypeorm', () => {
  let userRepositoryTypeorm: UserRepositoryTypeorm;

  beforeEach(async () => {
    const module: TestingModule = await TestHelper.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: [`${__dirname}/../../../../../.env.test`],
          load: [config],
        }),
        DatabaseModule.forRoot('postgres'),
        TypeOrmModule.forFeature([UserEntityTypeorm]),
      ],
      providers: [UserRepositoryTypeorm],
    }).compile();

    userRepositoryTypeorm = module.get<UserRepositoryTypeorm>(
      UserRepositoryTypeorm,
    );
  });

  it('should be defined', () => {
    expect(userRepositoryTypeorm).toBeDefined();
  });
});
