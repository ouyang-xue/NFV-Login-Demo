import { Component, OnInit } from "@angular/core";
// import { AgGridAngular } from "ag-grid-angular";
import { HttpClient } from "@angular/common/http";
import { ActionByUserListComponent } from "./action-by-user-list/action-by-user-list.component";
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from 'src/app/services/user.service';
import { ConfirmationService, Message } from 'primeng/api';
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
  providers: [ConfirmationService]
})
export class UsersComponent implements OnInit {
  public title: any = "";
  public isView: any = false;

  private gridApi;//table的api onGridReady方法设置
  private gridColumnApi;

  public context;

  msgs: Message[] = [];

  columnDefs = [
    {
      headerName: "User Name",
      field: "username",
      width: 150
    },
    {
      headerName: "Full Name",
      field: "fullname",
      width: 250
    },
    {
      headerName: "Role",
      field: "role",
      width: 80,
      valueGetter: function (params) {
        var country = params.data.role;
        console.log("country", country);
        if (country === 1) {
          return "Admin";
        } else if (country === 2) {
          return "User";
        } else if (country === 3) {
          return "Other";
        }
      },
    },
   // 管理员才添加
    {
      // 属性是可以重复设置到多个列的
      headerName: "...",
      field: "id",
      width: 80,
      sortable: false,
      filter: false,
      // 通过方法设置render
      // cellRenderer: this.createShowCellRenderer()
      cellRenderer: "actionCellRenderer"
    }
  ];

 public defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  //render使用自定义组件需要定义一个frameworkComponents（table的html中要设置）
  //然后和上面columnDefs里面的引用绑定指向你要的组件
  frameworkComponents = {
    actionCellRenderer: ActionByUserListComponent,
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private confirmationService: ConfirmationService) {
    this.context = { componentParent: this };
  }

  rowData: any;
  //通过table的属性设置   设置table的api到gridapi中 （refreshEvenRowsCurrencyData 中就是一个使用的例子）
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();

    this.queryDatas();
  }

  queryDatas() {
    this.userService.getUsers().subscribe(serverUsers => this.rowData = serverUsers);
  }

  // refreshEvenRowsCurrencyData() {
  //   //通过gridApi遍历整个table
  //   this.gridApi.forEachNode(rowNode => {
  //     //通过data的role值来修改data的userName的值
  //     if (rowNode.data.role  === 0) {
  //       rowNode.setDataValue("userName", "admin"));
  //     }
  //   });
  //   //刷新指定的列
  //   this.gridApi.refreshCells({ columns: ["currency"] });
  // }

  ngOnInit() {
    this.activeRoute.data.subscribe(res => this.title = res.pageTitle);
    var role = window.localStorage.getItem("role");
    if(!(role === '1')){
      this.columnDefs.splice(this.columnDefs.length -1 ,1);
    }
  }
  public addItem() {
    this.router.navigate(["/add-user"]);
  }

  public editItem(params: any) {
    this.router.navigateByUrl("/edit-user?id=" + params.data._id);
  }

  public delItem(params: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + params.data.username + '?',
      header: 'Delete User',
      accept: () => {
        this.userService.deleteUser(params.data._id).subscribe(() => this.queryDatas());
      //   this.http.delete('http://localhost:3000/s_user/' +params.data._id ,
      //                 {headers: new HttpHeaders({"Authorization":window.localStorage.getItem("auth_token")})})
      //                 .toPromise()
      // .then((data: any) => {
      //   this.queryDatas();
      // })
      // .catch(err => { console.log(err);
      // });
      }
    });
  }

  public viewItem(params: any) {
    this.isView = true;
  }

  getChildEvent(){
    console.log("111111111111111111111");
    this.isView = false;
  }

  // 直接通过html设置cellRendderer
  // createShowCellRenderer() {
  //   function ShowCellRenderer() {}
  //   ShowCellRenderer.prototype.init = function(params) {
  //     var cellBlank = !params.value;
  //     if (cellBlank) {
  //       return null;
  //     }
  //     this.ui = document.createElement("div");
  //     this.ui.innerHTML =
  //       "<div><button style='font-size:20px'>edit</button>";
  //   };
  //   ShowCellRenderer.prototype.getGui = function() {
  //     return this.ui;
  //   };
  //   return ShowCellRenderer;
  // }
}
