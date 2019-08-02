import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { HomeModule } from './home/home.module';
import { SingleArticleModule } from './single-article/single-article.module';
import { ArticlesModule } from './articles/articles.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    SingleArticleModule,
    ArticlesModule
  ]
})

export class PagesModule { }
