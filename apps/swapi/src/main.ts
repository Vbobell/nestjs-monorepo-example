import { NestFactory } from '@nestjs/core';

import { SwapiModule } from '@apps/swapi/swapi.module';

async function bootstrap() {
  const app = await NestFactory.create(SwapiModule);
  await app.listen(3001);
}
bootstrap();
