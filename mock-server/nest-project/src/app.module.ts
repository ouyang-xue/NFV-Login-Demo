import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from './user/user.module'
import { AuthModule } from './auth/auth.module';
import { APP_PIPE,APP_INTERCEPTOR } from '@nestjs/core';
import {ValidationPipe} from 'src/common/pipe/ValidationPipe'
import {ValidateIDPipe} from 'src/common/pipe/ValidataID.pipe'
import {TransformInterceptor} from 'src/common/filters/transform.interceptor'
@Module({
  imports: [AuthModule,UserModule],
  controllers: [AppController],
  providers: [AppService,
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: TransformInterceptor,
    // },
    // {
    //   provide:APP_PIPE,
    //   useClass:ValidateIDPipe      
    // }
  ],
  
})
export class AppModule {}
