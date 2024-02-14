import { INestApplication } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { TestHelper } from '@libs/test-tools';

import { NestJsWithPostgresAndApiModule } from '@apps/nest-js-with-postgres-and-api/nest-js-with-postgres-and-api.module';

describe('NestJsWithPostgresAndApiModule (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await TestHelper.createTestingModule({
      imports: [NestJsWithPostgresAndApiModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect({
      description: 'Example to create API with postgres',
      name: 'nest-js-with-postgres-and-api-service',
    });
  });
});
