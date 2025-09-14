import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend running on localhost:3000
  app.enableCors({
    origin: 'http://192.168.0.196:8081',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });


  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();