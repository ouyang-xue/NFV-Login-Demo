import { Injectable } from '@angular/core';
import { GlobalVariable } from '../common/globals';

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

  getUserId(): String {
    return window.localStorage.getItem(GlobalVariable.userId);
  }

  setUserId(userId: string): void {
    window.localStorage.setItem(GlobalVariable.userId, userId);
  }

  removeUserId() {
    window.localStorage.removeItem(GlobalVariable.userId);
  }
}
