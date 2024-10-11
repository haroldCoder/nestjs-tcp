import { Controller } from '@nestjs/common';
import { MicroserviceUsersService } from './microservice-users.service';
import { Ctx, MessagePattern, NatsContext, Payload } from '@nestjs/microservices';

@Controller()
export class MicroserviceUsersController {
  constructor(private readonly microserviceUsersService: MicroserviceUsersService) {}

  @MessagePattern('open')
  openCall(@Payload() data,@Ctx() contex: NatsContext){
    console.log(contex);
    
    return 'ready service'
  }
}
