import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { ConfirmComponent } from './confirm/confirm.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { NoAccountComponent } from './no-account/no-account.component';

@NgModule({
  declarations: [
    ConfirmComponent,
    DeleteAccountComponent,
    NoAccountComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  entryComponents: [
    ConfirmComponent,
    DeleteAccountComponent,
    NoAccountComponent
  ]
})

export class DialogsModule { }
