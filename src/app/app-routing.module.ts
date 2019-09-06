import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './feature/login/login.component';
import { UsersComponent } from './feature/users/users.component';
import { UserEditComponent } from './feature/user-edit/user-edit.component';
import { LayoutComponent } from './feature/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: LayoutComponent,
    data: { pageTitle: 'User Management List' },
    children: [
      {
        path: '',
        component: UsersComponent
      }
    ]
  },
  {
    path: 'edit-user',
    component: LayoutComponent,
    data: { pageTitle: 'Edit User' },
    children: [
      {
        path: '',
        component: UserEditComponent
      }
    ]
  },
  {
    path: 'add-user',
    component: LayoutComponent,
    data: { pageTitle: 'Add User' },
    children: [
      {
        path: '',
        component: UserEditComponent
      }
    ]
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
