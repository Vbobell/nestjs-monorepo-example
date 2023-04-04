import { INestApplication } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { SwModule } from '@apps/sw/sw.module';
import { TestHelper } from '@libs/test-helper';

describe('SwapiController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await TestHelper.createTestingModule({
      imports: [SwModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect({
      description: 'System to integration with SWAPI',
      name: 'sw-service',
    });
  });
});
