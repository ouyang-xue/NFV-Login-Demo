import { Component } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-action-by-user-list',
  templateUrl: './action-by-user-list.component.html',
  styleUrls: ['./action-by-user-list.component.scss']
})
export class ActionByUserListComponent implements ICellRendererAngularComp {

  constructor(
    private http: HttpClient, 
    private router: Router,
    private userService: UserService) { 
  }
  public params: any;
  agInit(params: any): void {
    this.params = params;
  }
  refresh(): boolean {
    return false;
  }
  edit() {
      this.router.navigateByUrl("/edit-user?id=1");
  }

  del() {
    this.userService.deleteUser(this.params.value).subscribe(data => 
      this.params.context.componentParent.queryDatas());
  }
}

