import { INestApplication } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { TestHelper } from '@libs/test-tools';

import { NestJsWithPostgresAndApiModule } from '@apps/postgres-and-api-example/postgres-and-api-example.module';

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
      name: 'postgres-and-api-example-service',
    });
  });
});
