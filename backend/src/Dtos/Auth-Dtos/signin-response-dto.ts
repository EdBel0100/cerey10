import { IsBoolean, IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class TokensDto {
  @IsString()
  accessToken: string;

  @IsString()
  idToken: string;

  @IsString()
  refreshToken: string;
}

export class UserDto {
  @IsString()
  username: string;

  @IsString()
  email: string;
}

export class SignInResponseDto {
  @IsBoolean()
  success: boolean;

  @IsString()
  message: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => TokensDto)
  tokens?: TokensDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UserDto)
  user?: UserDto;
}