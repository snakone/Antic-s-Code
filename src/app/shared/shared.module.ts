import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '@shared/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageModule } from '@app/core/language/language.module';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipesModule,
    TranslateModule,
    LanguageModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PipesModule,
    TranslateModule,
    LanguageModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: []
})

export class SharedModule { }
