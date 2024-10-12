import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
    constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy){
        this.client.connect();
    }

    returnAllUsers(){
        return this.client.send('find_users', {});
    }
}
