import { NestFactory } from '@nestjs/core';

import { NestJsWithPostgresAndApiModule } from '@apps/nest-js-with-postgres-and-api/nest-js-with-postgres-and-api.module';

async function bootstrap() {
  const app = await NestFactory.create(NestJsWithPostgresAndApiModule);
  await app.listen(3001);
}
bootstrap();
