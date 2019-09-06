import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<LoginInfo> {
    return this.http.post<LoginInfo>("/login/", user)
  }

  logout() {
    
  }
}
