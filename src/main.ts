import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  console.log('服务开始启动...');
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`服务开始启动成功: ${await app.getUrl()}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
      console.log('服务关闭');
      return app.close();
    });
  }
}

bootstrap();
