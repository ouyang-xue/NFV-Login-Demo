import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5';
import { LoginService } from 'src/app/services/login.service';
import {Message} from 'primeng/components/common/api';
import { AuthService } from 'src/app/services/auth.service';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  unameMinLen: number = 4;
  psdMinLen: number = 4;
  psdMaxLen: number = 18;

  warningMsg: Message[] = [];

  loginFormData: User = {
    _id: '',
    username: '',
    fullname: '',
    pwd: '',
    role: 0
  }

  cloneFormData: User = {
    _id: '',
    username: '',
    fullname: '',
    pwd: '',
    role: 0
  }
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private service: LoginService,
    private authService: AuthService
    ) { }

  ngOnInit() {
  }

  
  loginData() {

    this.cloneFormData.username = this.loginFormData.username;
    this.cloneFormData.pwd = Md5.hashStr(this.loginFormData.pwd).toString();

    this.service.login(this.cloneFormData).subscribe((loginData: any) => {

        this.authService.setAuthorizationToken(loginData.token);
        this.service.saveLoginInfo(loginData.user._id.toString(), loginData.user.role);
        this.router.navigate(['/users']);

    }, (error: any) => {
      this.warningMsg = [];
      this.warningMsg.push({severity:'warn', summary:'Warn Message: ', detail:error.error.error});
    });

  }
}
