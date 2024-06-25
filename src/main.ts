import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentBuilder = new DocumentBuilder()
    .setTitle('Admin Console')
    .setDescription('Admin Console API')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
