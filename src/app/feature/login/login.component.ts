import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5';
import { Password } from 'primeng/password';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  unameMinLen: number = 4;
  psdMinLen: number = 4;
  psdMaxLen: number = 18;

  displayErrMsg: boolean = false;

  loginFormData = {
    username: '',
    password: ''
  }

  cloneFormData = {
    username: '',
    password: ''
  }
  
  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit() {
  }

  
  loginData() {

    this.cloneFormData.username = this.loginFormData.username;
    this.cloneFormData.password = Md5.hashStr(this.loginFormData.password).toString();

    this.http.post('http://localhost:3000/users', this.cloneFormData).toPromise().then((data:any) => {
        window.localStorage.setItem('auth_token', data.token);
        window.localStorage.setItem('id', data.id);
        this.router.navigate(['/users']);

      }).catch(err  => {
        window.alert(err);
    })
  }
}
