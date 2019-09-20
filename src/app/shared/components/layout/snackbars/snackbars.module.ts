import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSnackComponent } from './language-snack/language-snack.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    LanguageSnackComponent
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [
    LanguageSnackComponent
  ]
})

export class SnackbarsModule { }
