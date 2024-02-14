import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';

import { NestJsWithPostgresAndApiModule } from '@apps/postgres-and-api-example/postgres-and-api-example.module';

async function bootstrap() {
  const app = await NestFactory.create(NestJsWithPostgresAndApiModule);

  const config = new DocumentBuilder()
    .setTitle('postgres-and-api-example')
    .setDescription('This project has a example from use nest js with postgres')
    .setVersion('1.0')
    .addTag('postgres-and-api-example')
    .build();

  app.use(express.json());

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
