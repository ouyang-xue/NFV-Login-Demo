import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("/users/");
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>("/users?id=" + id);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>("/users", user);
  }

  editUser(user: User): Observable<User> {
    return this.http.patch<User>(`/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete('/users/' + id);
  }
}
