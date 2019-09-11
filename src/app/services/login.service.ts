import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { GlobalVariable } from '../common/globals';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router) { }

  login(user: User): Observable<any> {
    return this.http.post<User>("/s_login/", user)
  }

  logout() {
    this.authService.removeAuthorizationToken();
    this.router.navigate(["login"]);
  }

  saveLoginInfo(id: string, role: string) {
    window.localStorage.setItem(GlobalVariable.userId, `${id}`);
    window.localStorage.setItem(GlobalVariable.userRole, `${role}`);
  }
}
