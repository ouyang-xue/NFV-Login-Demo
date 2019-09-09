import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5';
import { LoginService } from 'src/app/services/login.service';
import {Message} from 'primeng/components/common/api';

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
    id: 0,
    username: '',
    fullname: '',
    pwd: '',
    role: 0
  }

  cloneFormData: User = {
    id: 0,
    username: '',
    fullname: '',
    pwd: '',
    role: 0
  }
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private service: LoginService
    ) { }

  ngOnInit() {
  }

  
  loginData() {

    this.cloneFormData.username = this.loginFormData.username;
    this.cloneFormData.pwd = Md5.hashStr(this.loginFormData.pwd).toString();

    this.service.login(this.cloneFormData).subscribe((loginInfoService: LoginInfo) => {

        // console.log("loginInfoService==="+loginInfoService);
        // if(loginInfoService.token == null){
        //   this.warningMsg = [];
        //   this.warningMsg.push({severity:'warn', summary:'Warn Message: ', detail:'Username or Password error!'});
        //   return;
        // }

        // window.localStorage.setItem('auth_token', loginInfoService.token.token);
        // window.localStorage.setItem('id', loginInfoService.user.id.toString());
        this.router.navigate(['/users']);
    });

  }
}
