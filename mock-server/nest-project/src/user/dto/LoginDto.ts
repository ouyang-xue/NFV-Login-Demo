import { IsNotEmpty ,MinLength} from 'class-validator';
export class LoginDto {
    @IsNotEmpty()
    readonly name:string;
    @IsNotEmpty()
    @MinLength(6,{
        message: '长度不能小于6'
    })
    readonly password:string;
}
