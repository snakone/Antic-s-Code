import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@shared/components/components.module';

import { ArticlesSearchComponent } from './components/articles-search/articles-search.component';
import { ArticlesSidebarComponent } from './articles-sidebar.component';
import { ArticlesCategoryListBoxComponent } from './components/articles-category-list-box/articles-category-list-box.component';

@NgModule({
  declarations: [
    ArticlesSidebarComponent,
    ArticlesSearchComponent,
    ArticlesCategoryListBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ],
  exports: [
    ArticlesSidebarComponent,
    ArticlesSearchComponent
  ]
})

export class ArticlesSidebarModule { }
