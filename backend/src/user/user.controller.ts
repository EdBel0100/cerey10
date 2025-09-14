import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/Dtos/User-Dtos/create-user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  initializeUser(@Body() body: CreateUserDto) {
    return this.userService.initializeUser(body);
  }

  
}
