import { TestingModule } from '@nestjs/testing';

import { TestHelper } from '@libs/test-tools';

import { HealthCheckUseCase } from '@libs/health-check/application/health-check.use-case';

describe('HealthCheckUseCase', () => {
  let useCase: HealthCheckUseCase;

  beforeEach(async () => {
    const module: TestingModule = await TestHelper.createTestingModule({
      providers: [HealthCheckUseCase],
    }).compile();

    useCase = module.get<HealthCheckUseCase>(HealthCheckUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });
});
