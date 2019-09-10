import { Component } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";
@Component({
  selector: 'app-action-by-user-list',
  templateUrl: './action-by-user-list.component.html',
  styleUrls: ['./action-by-user-list.component.scss']
})
export class ActionByUserListComponent implements ICellRendererAngularComp {
  isVisibility :boolean = false;
  constructor() { 
  }
  public params: any;
  agInit(params: any): void {
    this.params = params;
    this.showDel(this.params);
  }

  showDel(paramsSel: any){
    var idSel = paramsSel.data._id;
    var idLogin = window.localStorage.getItem("id");
    console.log("idLogin",idLogin);
    console.log("idSel",idSel);
    console.log("==",idSel === idLogin);
    if(idSel === idLogin){
      console.log("paramsSel",paramsSel);
      this.isVisibility = false;
    } else {
      this.isVisibility = true;
    }
  }

  refresh(): boolean {
    return false;
  }
  edit() {
    this.params.context.componentParent.editItem(this.params);
  }
  view(){
    this.params.context.componentParent.viewItem(this.params);
  }

  del() {
    console.log("params", this.params);
    this.params.context.componentParent.delItem(this.params);
  }
}

