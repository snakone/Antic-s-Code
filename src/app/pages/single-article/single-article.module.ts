import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';

import { SingleArticleRoutingModule } from './single-article-routing.module';
import { SingleArticleComponent } from './single-article.component';
import { ArticlesSidebarModule } from '../articles/components/articles-sidebar/articles-sidebar.module';
import { SingleArticleShareComponent } from './components/single-article-share/single-article-share.component';
import { SingleArticleMessageComponent } from './components/single-article-message/single-article-message.component';
import { SingleArticleCommentsComponent } from './components/single-article-comments/single-article-comments.component';

@NgModule({
  declarations: [
    SingleArticleComponent,
    SingleArticleShareComponent,
    SingleArticleMessageComponent,
    SingleArticleCommentsComponent
  ],
  imports: [
    CommonModule,
    SingleArticleRoutingModule,
    ComponentsModule,
    SharedModule,
    ArticlesSidebarModule
  ]
})

export class SingleArticleModule { }
