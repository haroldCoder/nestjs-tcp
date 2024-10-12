import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get('api/users')
    async getAllUsers(){
        return this.usersService.returnAllUsers();
    }

    @Get('api/user/:id')
    async getUserById(@Param() id: number){
        return this.usersService.returnUserById(id);
    }

    @Post('api/user')
    async registerUser(@Body() {name, contact, age, email}: {name: string, contact: string, age: number, email: string}){
        return this.usersService.registerUser(name, contact, age, email);
    }
}
