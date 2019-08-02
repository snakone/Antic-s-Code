import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleArticleRoutingModule } from './single-article-routing.module';
import { SingleArticleComponent } from './single-article.component';

@NgModule({
  declarations: [
    SingleArticleComponent
  ],
  imports: [
    CommonModule,
    SingleArticleRoutingModule
  ]
})

export class SingleArticleModule { }
