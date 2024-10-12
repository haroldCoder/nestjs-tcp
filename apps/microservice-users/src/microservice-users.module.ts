import { Module } from '@nestjs/common';
import { MicroserviceUsersController } from './microservice-users.controller';
import { MicroserviceUsersService } from './microservice-users.service';
import { DatabaseModule } from './database/database.module';
import { userProviders } from './users.providers';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [MicroserviceUsersController],
  providers: [...userProviders, MicroserviceUsersService],
})
export class MicroserviceUsersModule {}
