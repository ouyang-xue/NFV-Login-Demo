import { Component } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";
@Component({
  selector: 'app-action-by-user-list',
  templateUrl: './action-by-user-list.component.html',
  styleUrls: ['./action-by-user-list.component.scss']
})
export class ActionByUserListComponent implements ICellRendererAngularComp {

  constructor() { 
  }
  public params: any;
  agInit(params: any): void {
    this.params = params;
  }
  refresh(): boolean {
    return false;
  }
  edit() {
    this.params.context.componentParent.editItem(this.params.value);
  }
  view(){
    this.params.context.componentParent.viewItem(this.params);
  }

  del() {
    console.log("params", this.params);
    this.params.context.componentParent.delItem(this.params);
  }
}

