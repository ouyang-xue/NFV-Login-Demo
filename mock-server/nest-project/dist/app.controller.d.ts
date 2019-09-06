import { AuthService } from './auth/auth.service';
import { LoginDto } from 'src/user/dto/LoginDto';
export declare class AppController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any, loginDto: LoginDto): Promise<"用户名不存在" | {
        access_token: string;
    }>;
    getProfile(req: any): any;
}
