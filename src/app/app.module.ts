import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './feature/login/login.component';
import { UserEditComponent } from './feature/user-edit/user-edit.component';
import { UsersComponent } from './feature/users/users.component';
import { HeaderComponent } from './feature/header/header.component';
import { ShareModule } from './feature/share/share.module';
import { AgGridModule } from 'ag-grid-angular';
import { ActionByUserListComponent } from './feature/users/action-by-user-list/action-by-user-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    UserEditComponent,
    HeaderComponent,
    ActionByUserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    HttpClientModule,
    //定义为子组件 renderer的需要在这里调用
    AgGridModule.withComponents([ActionByUserListComponent])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LoginComponent, HeaderComponent]
})
export class AppModule { }
