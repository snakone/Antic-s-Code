import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { PipesModule } from '@shared/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    TranslateModule
  ],
  exports: [
    SectionComponent
  ]
})
export class SectionModule { }
