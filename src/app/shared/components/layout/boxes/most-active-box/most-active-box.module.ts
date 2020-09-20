import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentBoxModule } from '../content-box/content-box.module';
import { PipesModule } from '@shared/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';

import { MostActiveBoxComponent } from './most-active-box.component';

@NgModule({
  declarations: [
    MostActiveBoxComponent
  ],
  imports: [
    CommonModule,
    ContentBoxModule,
    PipesModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    MostActiveBoxComponent
  ]
})

export class MostActiveBoxModule { }
