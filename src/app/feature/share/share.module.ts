import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ButtonModule} from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown'; 
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    ButtonModule,
    SplitButtonModule,
    ToolbarModule,
    PasswordModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    DialogModule,
    ConfirmDialogModule
  ],
  providers: [
  ]
})
export class ShareModule {
}
