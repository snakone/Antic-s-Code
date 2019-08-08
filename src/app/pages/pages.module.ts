import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { CodeModule } from './code/code.module';
import { CategoriesModule } from './categories/categories.module';
import { ArticlesModule } from './articles/articles.module';
import { SingleArticleModule } from './single-article/single-article.module';
import { SingleCategoryModule } from './single-category/single-category.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    CodeModule,
    CategoriesModule,
    ArticlesModule,
    SingleArticleModule,
    SingleCategoryModule
  ]
})

export class PagesModule { }
