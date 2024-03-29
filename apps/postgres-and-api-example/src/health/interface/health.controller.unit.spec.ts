import { ConfigModule } from '@nestjs/config';
import { TestingModule } from '@nestjs/testing';

import { HealthCheckUseCase } from '@libs/health-check';
import { TestHelper } from '@libs/test-tools';

import { HealthController } from '@apps/postgres-and-api-example/health/interface/health.controller';

describe('HealthController', () => {
  let healthCheckUseCase: HealthCheckUseCase;
  let healthController: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await TestHelper.createTestingModule({
      imports: [ConfigModule],
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
        name: 'postgres-and-api-example-service',
      });

      healthController.health().subscribe((result) => {
        expect(result.description).toEqual(
          'Example to create API with postgres',
        );
        expect(result.name).toEqual('postgres-and-api-example-service');
        done();
      });
    });
  });
});
