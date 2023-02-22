import { Test, TestingModule } from '@nestjs/testing';

import { SwHealthController } from '@apps/sw/health/interface/health.controller';

describe('SwHealthController', () => {
  let swHealthController: SwHealthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SwHealthController],
    }).compile();

    swHealthController = app.get<SwHealthController>(SwHealthController);
  });

  describe('When check health', () => {
    it('Then health return success', () => {
      expect(swHealthController.health()).toBe('success');
    });
  });
});
