import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesContentComponent } from './articles-content.component';
import { ComponentsModule } from '@app/shared/components/components.module';

@NgModule({
  declarations: [
    ArticlesContentComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ArticlesContentComponent
  ]
})

export class ArticlesContentModule { }
