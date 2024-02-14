import { TestingModule } from '@nestjs/testing';

import { HealthCheckUseCase } from '@libs/health-check/application/health-check.use-case';
import { TestHelper } from '@libs/test-tools';

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
