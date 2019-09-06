import { UsersDto } from './dto/UsersDto';
import { UserService } from './user.service';
import { User } from './interfaces/User.Interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userDto: UsersDto): Promise<string>;
    findAll(): Promise<User[]>;
}
