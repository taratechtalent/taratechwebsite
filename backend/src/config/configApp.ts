import 'dotenv/config';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { getEnv } from './env';
import { ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';
import { LoggingInterceptor } from 'src/util/middleware/request-logger.interceptor';

export async function configApp(app: any) {
  const config = new DocumentBuilder()
    .setTitle(getEnv('SERVICE_NAME'))
    .setDescription(getEnv('SERVICE_DESC'))
    .setVersion(getEnv('BUILD_TAG'))
    .addApiKey(
      {
        type: 'apiKey',
        name: 'Authorization',
        in: 'query',
      },
      'Authorization',
    )
    .addSecurityRequirements({
      Authorization: [],
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  //==================== swagger ==================

  // =================== additional plugins ==========================
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(json({ limit: '100mb' }));
  app.use(urlencoded({ extended: true, limit: '100mb' }));
  // =================== additional plugins ==========================

  //==================== Interceptor ===============================
  app.useGlobalInterceptors(new LoggingInterceptor());
  //==================== Interceptor ===============================
}
