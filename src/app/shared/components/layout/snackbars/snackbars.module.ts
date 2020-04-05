import { NgModule } from '@angular/core';
import { LanguageSnackComponent } from './language-snack/language-snack.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    LanguageSnackComponent
  ],
  imports: [
    SharedModule
  ]
})

export class SnackbarsModule { }
