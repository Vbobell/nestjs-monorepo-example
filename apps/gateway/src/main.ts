import { NestFactory } from '@nestjs/core';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { AppModule } from '@apps/gateway/app.module';
import { appsToProxy } from '@apps/gateway/infrastructure/apps.proxy';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  appsToProxy.forEach((appToProxy) =>
    app.use(
      `/${appToProxy.route}`,
      createProxyMiddleware({
        target: `http://localhost:${appToProxy.port}`,
        changeOrigin: true,
        pathRewrite: {
          [`^/${appToProxy.route}`]: '',
          [`^/${appToProxy.route}/api`]: 'api',
        },
      }),
    ),
  );

  await app.listen(3000);
}
bootstrap();
