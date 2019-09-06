import { Controller, Get, Request, Post, UseGuards ,Body,UsePipes} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import {LoginDto} from 'src/user/dto/LoginDto'
import {ValidationPipe} from 'src/common/pipe/ValidationPipe'
@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('s-login')
  @UsePipes(new ValidationPipe())
  async login(@Request() req,@Body() loginDto:LoginDto) {
    // console.log(loginDto)
    return this.authService.signIn(loginDto);
  }

  // @UseGuards(AuthGuard('jwt'))
  // @Get('me')
  // getProfile(@Request() req) {
  //   // console.log(req);
  //   return req.user;
  // }
}
