import { ConfigModule } from '@nestjs/config';
import { TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
  let repository: Repository<UserEntityTypeorm>;
  let userRepository: UserRepositoryTypeorm;

  beforeAll(async () => {
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

    repository = module.get<Repository<UserEntityTypeorm>>(
      'UserEntityTypeormRepository',
    );
    userRepository = module.get<UserRepositoryTypeorm>(UserRepositoryTypeorm);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  describe('getUsers', () => {
    let user: UserEntityTypeorm;
    let user2: UserEntityTypeorm;

    beforeEach(async () => {
      const result = await repository.insert([
        {
          name: 'John',
        },
        {
          name: 'Joana',
        },
      ]);

      user = result.raw[0];
      user2 = result.raw[1];
    });

    afterEach(async () => {
      await repository.clear();
    });

    describe('When execute', () => {
      test('Then user not found', (done) => {
        userRepository
          .getUsers([
            {
              id: 10000,
            },
            {
              id: 10001,
            },
          ])
          .subscribe((users) => {
            expect(users).toHaveLength(0);
            done();
          });
      });

      test('Then return user successfully', (done) => {
        userRepository
          .getUsers([
            {
              id: user.id,
            },
            {
              id: user2.id,
            },
          ])
          .subscribe((users) => {
            expect(users).toHaveLength(2);
            done();
          });
      });
    });
  });
});
