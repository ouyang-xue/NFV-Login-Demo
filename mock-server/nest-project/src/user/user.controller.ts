import { Controller, Get, Post, Body,UseGuards,Put,Patch,Param,Delete,UseInterceptors} from '@nestjs/common';
import{UsersDto} from './dto/UsersDto'
import {UserService} from './user.service'
import {User} from './interfaces/User.Interface'
import {AuthGuard} from '@nestjs/passport'
import {ValidationPipe} from 'src/common/pipe/ValidationPipe'

@Controller('s_users')
@UseGuards(AuthGuard('jwt'))
export class UserController {
    constructor(private readonly userService:UserService){}

  @Post()
  async create(@Body() userDto: UsersDto) {
    return await this.userService.create(userDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const u= await this.userService.findOneByID(id);
    // console.log(u);
    return u;
  }

  @Patch(':id')
  async edit(@Param('id', new ValidationPipe())id:string,@Body() userDto: UsersDto){
    return await this.userService.edit(id,userDto);
  }

  @Delete('/:id')
  async remove(@Param('id')id:string) {
      return await this.userService.delete(id);
  }
}
