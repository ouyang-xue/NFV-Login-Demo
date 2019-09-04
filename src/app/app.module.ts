import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './feature/login/login.component';
import { UserEditComponent } from './feature/user-edit/user-edit.component';
import { UsersComponent } from './feature/users/users.component';
import { HeaderComponent } from './feature/header/header.component';
import { ShareModule } from './feature/share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    UserEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LoginComponent, HeaderComponent]
})
export class AppModule { }
