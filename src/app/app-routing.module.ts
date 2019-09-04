import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './feature/login/login.component';
import { UsersComponent } from './feature/users/users.component';
import { UserEditComponent } from './feature/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'edit-user',
    component: UserEditComponent
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
