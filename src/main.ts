import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { loadNuxt } from 'nuxt3';
import { bundle } from '@nuxt/webpack-builder-edge';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Check if we need to run Nuxt in development mode
  const isDev = process.env.NODE_ENV !== 'production'

  // Get a ready to use Nuxt instance
  const nuxt = await loadNuxt({ rootDir: 'src/client-app/' })

  // Enable live build & reloading on dev
  if (isDev) {
    bundle(nuxt)
  }

  await app.listen(3001);
}
bootstrap();
