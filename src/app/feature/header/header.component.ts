import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalVariable } from 'src/app/common/globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: any = "title";

  username: string = "";

  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) { }

  ngOnInit() {
    const userId = window.localStorage.getItem(GlobalVariable.userId);
    if(userId) {
      this.userService.getUserById(userId).subscribe(user => this.username = user.username);
    }
  }

  logout() {
    this.loginService.logout();
  }

}
