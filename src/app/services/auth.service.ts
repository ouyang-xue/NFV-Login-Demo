import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  TOKEN: string = "auth_token";

  constructor() { }

  getAuthorizationToken(): string {
    return window.localStorage.getItem(this.TOKEN);
  }

  setAuthorizationToken(token: string) {
    window.localStorage.setItem(this.TOKEN, `Bearer ${token}`);
  }

  removeAuthorizationToken(): void {
    window.localStorage.removeItem(this.TOKEN);
  }
}
