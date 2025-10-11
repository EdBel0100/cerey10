// auth.controller.ts
import { Controller, Post, Body, HttpException, HttpStatus, Logger, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInResponseDto } from 'src/Dtos/Auth-Dtos/signin-response-dto';
import { SignInDto } from 'src/Dtos/Auth-Dtos/signin-dto';
import { AuthGuard } from './auth.guard';
import { CurrentUser } from './auth-curent-user.decorator';


@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  async signIn(@Body() signInDto: SignInDto): Promise<SignInResponseDto> {
    try {
      const { email, password } = signInDto;

      if (!email || !password) {
        throw new HttpException(
          'Email and password are required',
          HttpStatus.BAD_REQUEST,
        );
      }

      const result = await this.authService.signIn(email, password);
      return result;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      throw new HttpException(
        error.message || 'Authentication failed',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  // @Post('/refresh')
  // async refresh(
  //   @Body() body: { username: string; refreshToken: string },
  // ): Promise<SignInResponseDto> {
  //   Logger.log(body.username)
  //   Logger.log(body.refreshToken)
  //   return this.authService.refresh(body.username, body.refreshToken);
  // }
}
