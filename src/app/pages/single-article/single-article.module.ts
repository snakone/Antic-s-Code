import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';

import { SingleArticleRouting } from './single-article-routing';
import { SingleArticleComponent } from './single-article.component';
import { ArticlesSidebarModule } from '../articles/components/articles-sidebar/articles-sidebar.module';

@NgModule({
  declarations: [
    SingleArticleComponent,
  ],
  imports: [
    CommonModule,
    SingleArticleRouting,
    ComponentsModule,
    SharedModule,
    ArticlesSidebarModule
  ]
})

export class SingleArticleModule { }
