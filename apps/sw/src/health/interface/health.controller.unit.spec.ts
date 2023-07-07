import { TestingModule } from '@nestjs/testing';

import { HealthCheckUseCase } from '@libs/health-check';
import { TestHelper } from '@libs/test-tools';

import { SwHealthController } from '@apps/sw/health/interface/health.controller';

describe('SwHealthController', () => {
  let healthCheckUseCase: HealthCheckUseCase;
  let swHealthController: SwHealthController;

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
      controllers: [SwHealthController],
    }).compile();

    healthCheckUseCase = module.get<HealthCheckUseCase>(HealthCheckUseCase);
    swHealthController = module.get<SwHealthController>(SwHealthController);
  });

  it('should be defined', () => {
    expect(healthCheckUseCase).toBeDefined();
    expect(swHealthController).toBeDefined();
  });

  describe('When check health', () => {
    it('Then health return success', (done) => {
      jest.spyOn(healthCheckUseCase, 'execute').mockReturnValue({
        description: 'System to integration with SWAPI',
        name: 'sw-service',
      });

      swHealthController.health().subscribe((result) => {
        expect(result.description).toEqual('System to integration with SWAPI');
        expect(result.name).toEqual('sw-service');
        done();
      });
    });
  });
});
