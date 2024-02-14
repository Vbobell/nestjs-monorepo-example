import { Test, TestingModule } from '@nestjs/testing';

import { GetUsersUseCase } from '@apps/postgres-and-api-example/user/application/get-users/get-users.use-case';

import { GetUsersController } from './get-users.controller';

describe('GetUsersController', () => {
  let controller: GetUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetUsersController],
      providers: [
        {
          provide: GetUsersUseCase,
          useFactory: jest.fn().mockImplementation(() => {
            return {
              execute: jest.fn(),
            };
          }),
        },
      ],
    }).compile();

    controller = module.get<GetUsersController>(GetUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
