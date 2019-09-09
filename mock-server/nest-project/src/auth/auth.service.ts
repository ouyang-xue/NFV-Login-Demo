import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import {LoginDto} from 'src/user/dto/LoginDto'
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(loginDto:LoginDto) {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    console.log(loginDto)
    const user = await this.usersService.findOne(loginDto);
    // console.log(user);
    if(user){
      const uload:JwtPayload = {username:user.username};
      return {
        token: this.jwtService.sign(uload),
        user:user
      }
    }else{
      return "用户名不存在"
    }
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findOneByName(payload.username);
  }
}