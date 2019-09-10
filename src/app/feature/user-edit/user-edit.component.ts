import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router ,Params ,ActivatedRoute} from '@angular/router'
import {Md5} from 'ts-md5'; 
import { UserService } from 'src/app/services/user.service';

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
  private title:string = "add";
  users: any[] = [];
  role: SelectItem[];
  user: User = {
    _id: 0,
    fullname: '',
    username: '',
    pwd: '',
    role: 0
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private userService: UserService) {
      this.role = [
        { label: 'Admin', value: '0' },
        { label: 'Bussiness', value: '1' },
        { label: 'User', value: '2' }
      ];
  }
  
  ngOnInit() {
    this.activeRoute.data.subscribe(res => this.title = res.pageTitle);
    if('Edit User'===this.title){
      this.activeRoute.queryParams.subscribe((params: Params) => {
        this.id = params['id'];
      });
      if(this.id!=null){
        this.labelBtn = "Edit";
        this.btnDisplay = 1;
        this.userService.getUserById(this.id).subscribe(userdata => this.user = userdata[0]);
      }else{
        this.router.navigate(["/users"]);
      }
    }
  }

  submit() {
    if (this.user._id == 0) {
      this.userService.getUsers().subscribe(serverUsers =>{
        this.users = serverUsers
        const _id = this.users[this.users.length - 1]._id + 1;
        this.user._id = _id;
        this.user.pwd = Md5.hashStr(this.user.pwd).toString();
        this.userService.addUser(this.user).subscribe(userData => {
          this.user = userData;
          this.router.navigate(["/users"]);
        });
      });
    } else {
      this.userService.editUser(this.user).subscribe(userData => {
        this.user = userData;
        this.router.navigate(["/users"]);
      });
    }
  }
}
