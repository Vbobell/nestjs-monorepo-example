import { TestingModule } from '@nestjs/testing';
import { Observable } from 'rxjs';

import { TestHelper } from '@libs/test-tools';

import { User } from '@apps/postgres-and-api-example/user/domain/user';
import { UserRepository } from '@apps/postgres-and-api-example/user/domain/user-repository';

import { GetUsersUseCase } from './get-users.use-case';

describe('GetUsersUseCase', () => {
  let useCase: GetUsersUseCase;
  let repository: UserRepository<unknown>;

  beforeEach(async () => {
    const module: TestingModule = await TestHelper.createTestingModule({
      providers: [
        GetUsersUseCase,
        {
          provide: UserRepository,
          useFactory: jest.fn().mockImplementation(() => {
            return {
              getUsers: jest.fn(),
            };
          }),
        },
      ],
    }).compile();

    useCase = module.get<GetUsersUseCase>(GetUsersUseCase);
    repository = module.get<UserRepository<unknown>>(UserRepository);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('When get users', () => {
    let users: User[];
    let usersFixtureParams: Pick<User, 'id'>[];

    beforeEach(() => {
      users = [
        {
          id: 1,
          name: 'Joana',
        },
        {
          id: 2,
          name: 'Jhon',
        },
      ];

      usersFixtureParams = [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ];
    });

    test('Then get users successfully', (done) => {
      jest.spyOn(repository, 'getUsers').mockReturnValue(
        new Observable<User[]>((subscribe) => {
          subscribe.next(users);
          subscribe.complete();
        }),
      );

      useCase.execute(usersFixtureParams).subscribe(() => {
        expect(repository.getUsers).toHaveBeenCalledWith(usersFixtureParams);
        done();
      });
    });
  });
});
