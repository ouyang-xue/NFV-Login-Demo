import { Model } from 'mongoose';
import { UsersDto } from './dto/UsersDto';
import { User } from './interfaces/User.Interface';
import { LoginDto } from 'src/user/dto/LoginDto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(userDto: UsersDto): Promise<string>;
    findAll(): Promise<User[]>;
    findOne(loginDTO: LoginDto): Promise<User>;
    findOneByName(name: string): Promise<User>;
}
