import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { configApp } from './config/configApp';
import { getEnv } from './config/env';
import AppDataSource from './typeorm.config';
import * as fs from 'fs';
async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('/secrets/private-key.pem'),
    cert: fs.readFileSync('/secrets/public-certificate.pem'),
  };
  const app = await NestFactory.create(AppModule, { httpsOptions });

  await AppDataSource.initialize();
  configApp(app);
  const PORT = getEnv('SERVER_PORT', '7000');
  await app.listen(PORT, async () => {
    const url = await app.getUrl();
    console.log('');
    console.log('--------------------');
    console.log(`${url} is running `);
    console.log('--------------------');
    console.log('');
  });
}
bootstrap();
