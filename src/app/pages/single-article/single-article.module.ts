import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleArticleRoutingModule } from './single-article-routing.module';
import { SingleArticleComponent } from './single-article.component';
import { ComponentsModule } from '@app/shared/components/components.module';

@NgModule({
  declarations: [
    SingleArticleComponent
  ],
  imports: [
    CommonModule,
    SingleArticleRoutingModule,
    ComponentsModule
  ]
})

export class SingleArticleModule { }
