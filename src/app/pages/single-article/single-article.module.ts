import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleArticleRoutingModule } from './single-article-routing.module';
import { SingleArticleComponent } from './single-article.component';
import { ComponentsModule } from '@app/shared/components/components.module';
import { ArticlesSidebarModule } from '../articles/components/articles-sidebar/articles-sidebar.module';

@NgModule({
  declarations: [
    SingleArticleComponent
  ],
  imports: [
    CommonModule,
    SingleArticleRoutingModule,
    ComponentsModule,
    ArticlesSidebarModule
  ]
})

export class SingleArticleModule { }
