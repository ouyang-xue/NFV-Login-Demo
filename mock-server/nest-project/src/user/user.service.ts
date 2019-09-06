import { Inject, Injectable,HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import {UsersDto} from './dto/UsersDto'
import {User} from './interfaces/User.Interface'
import {LoginDto} from 'src/user/dto/LoginDto'
import { ApiException } from 'src/common/exception/ApiException';
import { ApiErrorCode } from 'src/common/exception/ApiErrorCode';

@Injectable()
export class UserService {
    constructor(@Inject('USERS_MODEL') private readonly userModel:Model<User>){}

    async create(userDto: UsersDto): Promise<string> {
        const u = await this.userModel.findOne({"name":userDto.name});
        if(u){
          throw new ApiException('用户已存在',ApiErrorCode.USER_ID_HAS_EXSIT,HttpStatus.BAD_REQUEST)
        }
        const createUser = new this.userModel(userDto);
        return await createUser.save();
      }
    
      async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
      }

      async findOne(loginDTO : LoginDto) :Promise<User>{
        const u = this.userModel.findOne({"name":loginDTO.name});
        if(!u){
          throw new ApiException('用户不存在',ApiErrorCode.LONGIN_FAIL,HttpStatus.BAD_REQUEST)
        }
        const user = await this.userModel.findOne({"name":loginDTO.name,"password":loginDTO.password});
        if(!user){
          throw new ApiException('密码错误',ApiErrorCode.LONGIN_FAIL,HttpStatus.BAD_REQUEST)
        }
        return user;
      }

      async findOneByName(name : string) :Promise<User>{
        return await this.userModel.findOne({"name":name});
      }
  
      async findOneByID(id:string) {
        return await this.userModel.findOne({"_id":id});
      }
      
      async delete(id:string):Promise<User>{
        return await this.userModel.remove({"_id":id});
      }

      
      async edit(id:string,userDto: UsersDto){
        const u = await this.findOneByName(userDto.name);
        if(u){
          throw new ApiException('用户名已存在',ApiErrorCode.USER_ID_HAS_EXSIT,HttpStatus.BAD_REQUEST)
        }
        return await this.userModel.update({"_id":id},userDto)
      }

}
