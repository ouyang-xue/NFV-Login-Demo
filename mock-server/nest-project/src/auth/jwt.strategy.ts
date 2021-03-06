import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      // jwtFromRequest:ExtractJwt.fromExtractors([ExtractJwt.fromHeader('A-Token'),ExtractJwt.fromUrlQueryParameter('A-Token')]),
      jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
      // jwtFromRequest:ExtractJwt.fromHeader('Authorization
      secretOrKey: 'secretKey',
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.authService.validateUser(payload);
    console.log(user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}