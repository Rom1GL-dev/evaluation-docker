import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logStream = fs.createWriteStream('/app/logs/api.log', { flags: 'a' });
  const logger = new Logger('Bootstrap');

  console.log = (...args) => {
    logStream.write(args.join(' ') + '\n');
  };

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen(3000);
  logger.log('Application démarrée sur le port 3000');
}

bootstrap();
