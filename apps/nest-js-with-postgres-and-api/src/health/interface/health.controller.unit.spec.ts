import { TestingModule } from '@nestjs/testing';

import { HealthCheckUseCase } from '@libs/health-check';
import { TestHelper } from '@libs/test-tools';

import { HealthController } from '@apps/nest-js-with-postgres-and-api/health/interface/health.controller';

describe('HealthController', () => {
  let healthCheckUseCase: HealthCheckUseCase;
  let healthController: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await TestHelper.createTestingModule({
      providers: [
        {
          provide: HealthCheckUseCase,
          useFactory: jest.fn().mockImplementation(() => {
            return {
              execute: jest.fn().mockImplementation(),
            };
          }),
        },
      ],
      controllers: [HealthController],
    }).compile();

    healthCheckUseCase = module.get<HealthCheckUseCase>(HealthCheckUseCase);
    healthController = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(healthCheckUseCase).toBeDefined();
    expect(healthController).toBeDefined();
  });

  describe('When check health', () => {
    it('Then health return success', (done) => {
      jest.spyOn(healthCheckUseCase, 'execute').mockReturnValue({
        description: 'Example to create API with postgres',
        name: 'nest-js-with-postgres-and-api-service',
      });

      healthController.health().subscribe((result) => {
        expect(result.description).toEqual(
          'Example to create API with postgres',
        );
        expect(result.name).toEqual('nest-js-with-postgres-and-api-service');
        done();
      });
    });
  });
});
