import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() UserLoginDto: UserLoginDto): Promise<{ access_token: string }> {
    return this.authService.signIn(UserLoginDto.email, UserLoginDto.password);
  }
}
