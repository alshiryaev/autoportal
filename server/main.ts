import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import * as erv from 'express-react-views';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(path.join(__dirname, 'views'));
  app.set('view engine', 'js');
  app.engine('js', erv.createEngine());

  const options = new DocumentBuilder()
    .setTitle('AutoPortal API')
    .setDescription('To check and try our API')
    .setVersion('1.0')
    .addTag('autoportal')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/swagger', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
