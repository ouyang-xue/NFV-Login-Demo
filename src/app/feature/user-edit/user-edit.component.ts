import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router ,Params ,ActivatedRoute} from '@angular/router'
import {Md5} from 'ts-md5'; 
import { UserService } from 'src/app/services/user.service';
import {Message} from 'primeng/components/common/api';
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
  public id:string = null;
  private title:string = "add";
  users: any[] = [];
  role: SelectItem[];
  user: User = {
    _id: null,
    fullname: '',
    username: '',
    pwd: '',
    role: 1
  }
  addUser: AddUser = {
    fullname: '',
    username: '',
    pwd: '',
    role: 1
  }
  warningMsg: Message[] = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private userService: UserService) {
      this.role = [
        { label: 'Admin', value: 1 },
        { label: 'Bussiness', value: 2 },
        { label: 'User', value: 3 }
      ];
  }
  i: number = 0;
  
  ngOnInit() {
    this.activeRoute.data.subscribe(res => this.title = res.pageTitle);
    if('Edit User'===this.title){
      this.activeRoute.queryParams.subscribe((params: Params) => {
        this.id = params['id'];
      });
      if(this.id!=null){
        this.labelBtn = "Edit";
        this.btnDisplay = 1;
        this.userService.getUserById(this.id).subscribe(userdata => {
          this.user = userdata;
        })
      }else{
        this.router.navigate(["/users"]);
      }
    }
  }

  submit() {
    if (this.user._id == null) {
      this.addUser.pwd = Md5.hashStr(this.user.pwd).toString();
      this.addUser.fullname = this.user.fullname;
      this.addUser.username = this.user.username;
      this.addUser.role = this.user.role;
        this.userService.addUser(this.addUser).subscribe(userData => { 
          this.router.navigate(["/users"]);
        },
        (error: any) => {
          this.warningMsg = [];
          this.warningMsg.push({severity:'warn', summary:'Warn Message: ', detail:error.error.error});
        }
        );
    } else {
      this.userService.editUser(this.user).subscribe(userData => {
        this.user = userData;
        this.router.navigate(["/users"]);
      },
      (error: any) => {
        this.warningMsg = [];
        this.warningMsg.push({severity:'warn', summary:'Warn Message: ', detail:error.error.error});
      });
    }
  }
}
