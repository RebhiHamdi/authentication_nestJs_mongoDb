import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth') // This makes the URL: localhost:3000/auth
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register') // URL: localhost:3000/auth/register
  async register(@Body() registerDto: RegisterDto) 
  {
    return this.authService.register(registerDto);
  }
  @Post('login') // New Login Endpoint
  async login(@Body() loginDto: LoginDto) 
  {
    return this.authService.login(loginDto);
  }
}