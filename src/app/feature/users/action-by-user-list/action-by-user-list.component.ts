import { Component } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router'
@Component({
  selector: 'app-action-by-user-list',
  templateUrl: './action-by-user-list.component.html',
  styleUrls: ['./action-by-user-list.component.scss']
})
export class ActionByUserListComponent implements ICellRendererAngularComp {

  constructor(private http: HttpClient, private router: Router) { 
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
    this.http
      .delete('http://localhost:3000/users/' + this.params.value)
      .subscribe(data => {
        this.params.context.componentParent.queryDatas();
      });

  }
}

