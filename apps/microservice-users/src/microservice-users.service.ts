import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class MicroserviceUsersService {
  constructor(@Inject('USER_REPOSITORY') private userRepository: Repository<Users>){}

  async findAllUsers(): Promise<Array<Users>>{
    console.log(this.userRepository);
    
    return await this.userRepository?.find();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
