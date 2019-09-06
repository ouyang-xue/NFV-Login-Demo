import { Component, OnInit } from "@angular/core";
import { AgGridAngular } from "ag-grid-angular";
import { HttpClient } from "@angular/common/http";
import { ActionByUserListComponent } from "./action-by-user-list/action-by-user-list.component";
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  public title: any = "";

  private gridApi;//table的api onGridReady方法设置
  private gridColumnApi;

  public context;

  columnDefs = [
    {
      headerName: "User Name",
      field: "username",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Full Name",
      field: "fullname",
      sortable: true,
      filter: true
    },
    {
      headerName: "Role",
      field: "role",
      valueGetter: function (params) {
        var country = params.data.role;
        console.log("country", country);
        if (country === 0) {
          return "Admin";
        } else if (country === 1) {
          return "User";
        } else if (country === 2) {
          return "Other";
        }
      },

      sortable: true,
      filter: true
    },
    {
      // 属性是可以重复设置到多个列的
      headerName: "...",
      field: "id",
      sortable: false,
      filter: false,
      // 通过方法设置render
      // cellRenderer: this.createShowCellRenderer()
      cellRenderer: "actionCellRenderer"
    }
  ];

  //render使用自定义组件需要定义一个frameworkComponents（table的html中要设置）
  //然后和上面columnDefs里面的引用绑定指向你要的组件
  frameworkComponents = {
    actionCellRenderer: ActionByUserListComponent,
  };

  rowData: any;
  //通过table的属性设置   设置table的api到gridapi中 （refreshEvenRowsCurrencyData 中就是一个使用的例子）
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // params.api.sizeColumnsToFit();

    this.queryDatas();
  }

  queryDatas() {
    this.http
      .get("http://localhost:3000/users")
      .subscribe(data => {
        this.rowData = data;
      });
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

  constructor(
    private http: HttpClient, 
    private router: Router,
    private activeRoute: ActivatedRoute) {
      this.context = { componentParent: this };
  }

  ngOnInit() {
    this.activeRoute.data.subscribe(res => this.title = res.pageTitle);
  }
  public addItem() {
    this.router.navigate(["/add-user"]);
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
