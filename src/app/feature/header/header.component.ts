import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: any = "title";

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
  }

}
