import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageModule } from '@app/core/language/language.module';

import { PipesModule } from '@shared/pipes/pipes.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [],
  imports: [
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
