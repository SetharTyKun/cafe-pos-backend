import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT ?? 3000);
  const config = new DocumentBuilder()
  .setTitle('Cafe POS API')
  .setDescription('This Backend API for our POS System')
  .setVersion('1.0')
  .build()
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);

  const port = 3000;
  await app.listen(port);
  Logger.log (`Application is running on: http://localhost:${port}`);
  Logger.log (`API is running on: http://localhost:${port}/api`);
}
bootstrap();
