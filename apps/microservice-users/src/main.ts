import { NestFactory } from '@nestjs/core';
import { MicroserviceUsersModule } from './microservice-users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(MicroserviceUsersModule, {
    transport: Transport.TCP,
    options: {
      port: 3001
    }
  });
  await app.listen();
}
bootstrap();
