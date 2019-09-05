import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  unameMinLen: number = 4;
  psdMinLen: number = 4;
  psdMaxLen: number = 18;

  loginFormData = {
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

    console.log("提交表单");

    const formData = this.loginFormData;
    this.http.post('http://localhost:3000/users', formData).toPromise().then((data:any) => {
      console.log(data);
      window.localStorage.setItem('auth_token', data.token);
      this.router.navigate(['/users']);

    }).catch(err  => {
      window.alert(err);
    })
  }

  private users: any[] = [];
  private testDatas: string = "";

  getUsers() {
    this.http.get('http://localhost:3000/users').toPromise().then((data: any) => {
      console.log(data);
      this.users = data;

      this.testDatas = JSON.stringify(this.users);
      
      
    }).catch(err => {
      console.log(err);
      
    });
  }
}
