import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controler';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [ConfigModule],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, JwtStrategy],
  exports: [AuthService, AuthGuard],
})
export class AuthModule {}