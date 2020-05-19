import { NgModule } from '@angular/core';
import { LanguageSnackComponent } from './language-snack/language-snack.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LanguageSnackComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule
  ]
})

export class SnackbarsModule { }
