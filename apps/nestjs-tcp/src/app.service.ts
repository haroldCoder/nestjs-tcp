import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy){
    this.client.connect();
  }

  CallServiceusers(): any {
    return this.client.send('open', {});
  }
}
