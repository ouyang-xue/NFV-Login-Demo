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
    component: UsersComponent,
    data: { pageTitle: 'User Management List' }
  },
  {
    path: 'edit-user',
    component: UserEditComponent,
    data: { pageTitle: 'Edit User' }
  },
  {
    path: 'add-user',
    component: UserEditComponent,
    data: { pageTitle: 'Add User' }
  },
  {
    path: "**",
    redirectTo: "users"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
