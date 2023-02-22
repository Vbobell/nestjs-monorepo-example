import { NestFactory } from '@nestjs/core';

import { SwModule } from '@apps/sw/sw.module';

async function bootstrap() {
  const app = await NestFactory.create(SwModule);
  await app.listen(3001);
}
bootstrap();
