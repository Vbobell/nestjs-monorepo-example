import { NestFactory } from '@nestjs/core';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { AppModule } from '@apps/gateway/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    '/nest-js-with-postgres-and-api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {
        [`^/nest-js-with-postgres-and-api`]: '',
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
