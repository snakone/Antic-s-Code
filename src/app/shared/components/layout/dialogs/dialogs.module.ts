import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { ConfirmComponent } from './confirm/confirm.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { NoAccountComponent } from './no-account/no-account.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AlreadyLoggedComponent } from './already-logged/already-logged.component';

@NgModule({
  declarations: [
    ConfirmComponent,
    DeleteAccountComponent,
    NoAccountComponent,
    MaintenanceComponent,
    AlreadyLoggedComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})

export class DialogsModule { }
