import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';

import { SingleArticleRouting } from './single-article.routing';
import { SingleArticleComponent } from './single-article.component';
import { ArticlesSidebarModule } from '../articles/components/articles-sidebar/articles-sidebar.module';

import { BoxesModule } from '@layout/boxes/boxes.module';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';
import { ArticleLayoutModule } from '@layout/article-layout/article-layout.module';

@NgModule({
  declarations: [
    SingleArticleComponent,
  ],
  imports: [
    CommonModule,
    SingleArticleRouting,
    ComponentsModule,
    SharedModule,
    BoxesModule,
    ArticlesSidebarModule,
    PageHeaderModule,
    SectionModule,
    ArticleLayoutModule
  ]
})

export class SingleArticleModule { }
