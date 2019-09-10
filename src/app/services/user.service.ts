import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("/s_users/");
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>('/s_users/' + id);
  }

  addUser(user: AddUser): Observable<User> {
    return this.http.post<User>("/s_users", user);
  }

  editUser(user: User): Observable<User> {
    return this.http.patch<User>(`/s_users/${user._id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete('/s_users/' + id);
  }
}
