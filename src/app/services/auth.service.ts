import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthorizationToken(): string {
    return window.localStorage.getItem("auth_token");
  }

  removeAuthorizationToken(): void {
    window.localStorage.removeItem("auth_token");
  }
}
