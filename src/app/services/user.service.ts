import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3000/users");
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>("http://localhost:3000/users?id=" + id);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>("http://localhost:3000/users", user)
  }

  editUser(user: User): Observable<User> {
    return this.http.patch<User>("http://localhost:3000/users", user)
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/users/' + id);
  }
}
