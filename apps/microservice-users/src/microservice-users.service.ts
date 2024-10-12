import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MicroserviceUsersService {
  constructor(@InjectRepository(Users) private userRepository: Repository<Users>) { }

  async findAllUsers(): Promise<Array<Users>> {
    return await this.userRepository?.find();
  }

  async findUserById(id: number): Promise<Users> {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async createUser(name: string, contact: string, age: number, email: string): Promise<string> {
    console.log(name, contact, age, email);
    
    try {
      await this.userRepository.save({
        name: name,
        contact: contact,
        age: age,
        email: email
      })

      return 'User created'
    }
    catch (err) {
      return err
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
