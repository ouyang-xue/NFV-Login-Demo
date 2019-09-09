import {  IsNotEmpty,IsNumber,MinLength } from 'class-validator';
export class UsersDto {
    // @IsNotEmpty()
    // readonly name:string;
    // @IsNotEmpty()
    // readonly fullName:string;
    // @IsNotEmpty()
    // @MinLength(6,{
    //             message: '长度不能小于6'
    //     })
    // readonly password:string;
    // @IsNotEmpty()
    // @IsNumber()
    // readonly role:number;
    id: number;
    username: string;
    fullname: string;
    pwd: string;
    role: number;
}
