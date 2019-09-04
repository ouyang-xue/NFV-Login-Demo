import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public title: any = "User Management List";

  private users: any[] = [];
  private testDatas: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get("/users/").toPromise().then((data: any) => {
      console.log(data);
      this.users = data;

      this.testDatas = JSON.stringify(this.users);
      
      
    }).catch(err => {
      console.log(err);
      
    });
  }

}
