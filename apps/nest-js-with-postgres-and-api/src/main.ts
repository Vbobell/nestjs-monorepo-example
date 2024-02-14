import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';

import { NestJsWithPostgresAndApiModule } from '@apps/nest-js-with-postgres-and-api/nest-js-with-postgres-and-api.module';

async function bootstrap() {
  const app = await NestFactory.create(NestJsWithPostgresAndApiModule);

  const config = new DocumentBuilder()
    .setTitle('nest-js-with-postgres-and-api')
    .setDescription('This project has a example from use nest js with postgres')
    .setVersion('1.0')
    .addTag('nest-js-with-postgres-and-api')
    .build();

  app.use(express.json());

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
