import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ComponentsModule } from '@app/shared/components/components.module';

@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ArticlesRoutingModule
  ]
})

export class ArticlesModule { }
