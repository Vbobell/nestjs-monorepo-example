import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';

import { AwsSqsAndApiExampleModule } from '@apps/aws-sqs-and-api-example/aws-sqs-and-api-example.module';

async function bootstrap() {
  const app = await NestFactory.create(AwsSqsAndApiExampleModule);

  const config = new DocumentBuilder()
    .setTitle('aws-sqs-and-api-example')
    .setDescription('This project has a example from use nest js with sqs')
    .setVersion('1.0')
    .addTag('aws-sqs-and-api-example')
    .build();

  app.use(express.json());

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3002);
}
bootstrap();
