import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { ConfirmComponent } from './confirm/confirm.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';

@NgModule({
  declarations: [
    ConfirmComponent,
    DeleteAccountComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  entryComponents: [
    ConfirmComponent,
    DeleteAccountComponent
  ]
})

export class DialogsModule { }
