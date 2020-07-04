import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { LanguageModule } from '@core/language/language.module';

import { PipesModule } from '@shared/pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  imports: [
    PipesModule,
    TranslateModule,
    LanguageModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivesModule
  ],
  exports: [
    PipesModule,
    TranslateModule,
    LanguageModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivesModule
  ]
})

export class SharedModule { }
