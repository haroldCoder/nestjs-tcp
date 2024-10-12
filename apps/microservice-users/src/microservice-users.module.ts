import { Module } from '@nestjs/common';
import { MicroserviceUsersController } from './microservice-users.controller';
import { MicroserviceUsersService } from './microservice-users.service';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, TypeOrmModule.forFeature([Users])],
  controllers: [MicroserviceUsersController],
  providers: [MicroserviceUsersService],
})
export class MicroserviceUsersModule {
  constructor(private dataSource: DataSource){}
}
