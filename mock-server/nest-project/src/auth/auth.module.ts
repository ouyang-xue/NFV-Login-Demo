import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UserModule} from '../user/user.module'
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports:[
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    })
    ],
  providers: [AuthService,JwtStrategy],
  exports: [PassportModule, AuthService],
})
export class AuthModule {}
