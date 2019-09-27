import { NgModule } from '@angular/core';
import { ConfirmComponent } from './confirm/confirm.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [
    ConfirmComponent
  ]
})

export class DialogsModule { }
