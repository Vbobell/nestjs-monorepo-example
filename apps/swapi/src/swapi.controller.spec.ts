import { Test, TestingModule } from '@nestjs/testing';
import { SwapiController } from './swapi.controller';
import { SwapiService } from './swapi.service';

describe('SwapiController', () => {
  let swapiController: SwapiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SwapiController],
      providers: [SwapiService],
    }).compile();

    swapiController = app.get<SwapiController>(SwapiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(swapiController.getHello()).toBe('Hello World!');
    });
  });
});
