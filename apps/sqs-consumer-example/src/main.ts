import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';

import { SqsConsumerExampleModule } from '@apps/sqs-consumer-example/sqs-consumer-example.module';

async function bootstrap() {
  const app = await NestFactory.create(SqsConsumerExampleModule);

  const config = new DocumentBuilder()
    .setTitle('sqs-consumer-example')
    .setDescription(
      'This project has a example from use nest js and consumer sqs queue',
    )
    .setVersion('1.0')
    .addTag('sqs-consumer-example')
    .build();

  app.use(express.json());

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3002);
}
bootstrap();
