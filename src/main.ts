import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

import { PORT } from './environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');

  await app.listen(PORT, () => console.log('Server started on port ' + PORT));
}
bootstrap();
