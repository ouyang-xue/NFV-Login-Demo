import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoginDto } from 'src/user/dto/LoginDto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    signIn(loginDto: LoginDto): Promise<"用户名不存在" | {
        access_token: string;
    }>;
    validateUser(payload: JwtPayload): Promise<any>;
}
