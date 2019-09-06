import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router) { }

  login(user: User): Observable<LoginInfo> {
    return this.http.post<LoginInfo>("/login/", user)
  }

  logout() {
    this.authService.removeAuthorizationToken();
    this.router.navigate(["login"]);
  }
}
