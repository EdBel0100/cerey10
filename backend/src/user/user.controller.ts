import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/Dtos/User-Dtos/create-user.dto';
import { CurrentUser } from 'src/auth/auth-curent-user.decorator';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  initializeUser(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @UseGuards(AuthGuard)
  @Delete()
  delete(@CurrentUser() user: { cognitoId: string},) {
    return this.userService.delete(user.cognitoId)

}
}
