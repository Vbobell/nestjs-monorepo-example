/* eslint-disable no-restricted-imports */
import { TestingModule } from '@nestjs/testing';

import { TestHelper } from '@libs/test-helper';

import { TestHelperService } from './test-helper.service';

describe('TestHelperService', () => {
  let service: TestHelperService;
  let testHelper: TestHelper;

  beforeEach(async () => {
    testHelper = new TestHelper();

    const module: TestingModule = await testHelper
      .createTestingModule({
        providers: [TestHelperService],
      })
      .compile();

    service = module.get<TestHelperService>(TestHelperService);
  });

  it('should be defined', () => {
    expect(testHelper).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('When execute hello world', () => {
    it('Then hello world return with success', (done) => {
      service.helloWorld().subscribe((result) => {
        expect(result).toEqual('Hello world');
        done();
      });
    });
  });
});
