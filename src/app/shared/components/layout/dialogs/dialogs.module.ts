import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { NoAccountComponent } from './no-account/no-account.component';
import { MessageModalComponent } from './message-modal/message-modal.component';

@NgModule({
  declarations: [
    DeleteAccountComponent,
    NoAccountComponent,
    MessageModalComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})

export class DialogsModule { }
