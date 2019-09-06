import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router ,Params ,ActivatedRoute} from '@angular/router'
import {Md5} from 'ts-md5'; 

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})

export class UserEditComponent implements OnInit {
  public labelBtn: string = "Add"
  public psdMinLen: number = 4;
  public psdMaxLen: number = 16;
  public btnDisplay: number = 0;
  private id:number = 0;
  users: any[] = [];

  user = {
    id: 0,
    fullname: '',
    username: '',
    pwassword: '',
    role: 0,
    token: {
      id: 0,
      token: "abcdefg-2b13-4b73-b743-aaabbbccceeee",
      expiryDate: 1422955762006
    }
  }

  public title: any = "User";

  cars: SelectItem[];

  constructor(
    private router: Router,
    private http: HttpClient,
    private activeRoute: ActivatedRoute
    ) {
    
    this.cars = [
      { label: 'Admin', value: '0' },
      { label: 'Bussiness', value: '1' },
      { label: 'User', value: '2' }
    ];

  }

  ngOnInit() {
    this.activeRoute.data.subscribe(res => this.title = res.pageTitle);

    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.id = params['id'];
    });
  
    if(this.id!=null){
      this.title = "Edit User";
      this.labelBtn = "Edit";
      this.btnDisplay = 1;
      this.http.get("http://localhost:3000/users?id="+this.id ).toPromise().then((data: any) => {
          this.users = data;
          this.user = data[0];
          console.log("users",this.user);
        }).catch(err => {
          console.log(err);
        }); 
    }
  }

  submit() {
    if (this.user.id == 0) {
      this.http.get("http://localhost:3000/users").toPromise().then((data: any) => {
        this.users = data;
        const id = data[data.length - 1].id + 1;
        this.user.id = id;
        this.user.token.id = id;
        this.user.pwassword = Md5.hashStr(this.user.pwassword).toString();
        this.http.post("http://localhost:3000/users", this.user).toPromise().then((data: any) => {
          this.router.navigate(["/users"])
        }).catch(err => {
          console.log(err);
        })
      }).catch(err => {
        console.log(err);
      });
    } else {
      this.http.patch(`http://localhost:3000/users/${this.user.id}`, this.user).toPromise().then((data: any) => {
        this.router.navigate(["/users"])
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
