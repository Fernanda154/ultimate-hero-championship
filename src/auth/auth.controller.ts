import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: CreateAuthDto) {
    const token = await this.authService.createToken(user);
    return { token };
  }

  @Post('verify-jwt')
  async verifyJWT(@Body() token: string) {
    const verification = await this.authService.verifyToken(token);
    return { verification };
  }

}
