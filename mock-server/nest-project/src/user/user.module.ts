import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import{usersProviders} from './users.providers'
import { DatabaseModule } from '../database/database.module';

@Module({
  imports:[DatabaseModule],
  providers: [UserService,...usersProviders],
  controllers: [UserController],
  exports:[UserService]
})
export class UserModule {}
