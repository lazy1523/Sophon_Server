import {
  ClassSerializerInterceptor,
  ValidationPipe,
  VersioningType,
  Logger
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import validationOptions from './utils/validation-options';

export const IS_DEV = process.env.NODE_ENV !== 'production';
async function bootstrap() {
  const logger:Logger = new Logger('main.ts');

  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: IS_DEV ? ['log', 'debug', 'error', 'warn'] : ['error', 'warn']
  });
  // 开启跨域
  app.enableCors();  
  const configService = app.get(ConfigService);
  const PORT=configService.get('app.port');
  const PREFIX=configService.get('app.apiPrefix');
  
  app.enableShutdownHooks();
  app.setGlobalPrefix(PREFIX, {
    exclude: ['/'],
  });
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API docs')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(PORT,()=>{
    logger.log(`服务已经启动,接口请访问:http://wwww.localhost:${PORT}/${PREFIX}`);
    logger.log(`服务已经启动,文档请访问:http://wwww.localhost:${PORT}/docs`);
  })
}
void bootstrap();
