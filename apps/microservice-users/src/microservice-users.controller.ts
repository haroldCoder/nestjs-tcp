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

  @MessagePattern('find_users')
  findAllUsers(@Payload() data, @Ctx() context: NatsContext){
    console.log(context);

    return this.microserviceUsersService.findAllUsers()
  }

  @MessagePattern('find_userid')
  findUserId(@Payload() {id}: {id: number}, @Ctx() context: NatsContext){
    console.log(context);

    return this.microserviceUsersService.findUserById(id);
  }

  @MessagePattern('create_user')
  createUser(@Payload() {name, contact, age, email}: {name: string, contact: string, age: number, email: string}, @Ctx() context: NatsContext){
    console.log(context);
    
    return this.microserviceUsersService.createUser(name, contact, age, email);
  }
}
