import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageModule } from '@app/core/language/language.module';

import { PipesModule } from '@shared/pipes/pipes.module';
import { MaterialModule } from './material/material.module';
import { DirectivesModule } from './directives/directives.module';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [],
  imports: [
    PipesModule,
    TranslateModule,
    LanguageModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivesModule,
    HighlightModule
  ],
  exports: [
    PipesModule,
    TranslateModule,
    LanguageModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivesModule,
    HighlightModule
  ]
})

export class SharedModule { }
