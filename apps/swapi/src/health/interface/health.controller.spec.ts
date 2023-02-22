import { Test, TestingModule } from '@nestjs/testing';

import { SwapiHealtyController } from '@apps/swapi/health/interface/health.controller';

describe('SwapiHealtyController', () => {
  let swapiHealtyController: SwapiHealtyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SwapiHealtyController],
    }).compile();

    swapiHealtyController = app.get<SwapiHealtyController>(
      SwapiHealtyController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(swapiHealtyController.health()).toBe('health');
    });
  });
});
