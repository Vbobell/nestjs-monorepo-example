import { TestingModule } from '@nestjs/testing';

import { SwHealthController } from '@apps/sw/health/interface/health.controller';
import { TestHelper } from '@libs/test-helper';

describe('SwHealthController', () => {
  let testHelper: TestHelper;
  let swHealthController: SwHealthController;

  beforeEach(async () => {
    testHelper = new TestHelper();

    const app: TestingModule = await testHelper
      .createTestingModule({
        controllers: [SwHealthController],
      })
      .compile();

    swHealthController = app.get<SwHealthController>(SwHealthController);
  });

  describe('When check health', () => {
    it('Then health return success', () => {
      expect(swHealthController.health()).toBe('success');
    });
  });
});
