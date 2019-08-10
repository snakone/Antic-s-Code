import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@app/shared/shared.module';

import { ArticlesHomeComponent } from './articles-home.component';

@NgModule({
  declarations: [
    ArticlesHomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ],
  exports: [
    ArticlesHomeComponent
  ]
})

export class ArticlesHomeModule { }
