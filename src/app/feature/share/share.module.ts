import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import {ButtonModule} from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  imports: [],
  declarations: [],
  exports: [
    ButtonModule,
    SplitButtonModule,
    ToolbarModule,
    PasswordModule,
    InputTextModule,
    FormsModule
  ],
  providers: [
  ]
})
export class ShareModule {
}
