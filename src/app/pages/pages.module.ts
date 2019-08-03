import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { HomeModule } from './home/home.module';
import { SingleArticleModule } from './single-article/single-article.module';
import { CategoriesModule } from './categories/categories.module';
import { SingleCategoryModule } from './single-category/single-category.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    SingleArticleModule,
    CategoriesModule,
    SingleCategoryModule
  ]
})

export class PagesModule { }
