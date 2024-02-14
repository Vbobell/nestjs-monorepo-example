import { NestFactory } from '@nestjs/core';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { AppModule } from '@apps/gateway/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    '/postgres-and-api-example',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {
        [`^/postgres-and-api-example`]: '',
        [`^/postgres-and-api-example/api`]: 'api',
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
