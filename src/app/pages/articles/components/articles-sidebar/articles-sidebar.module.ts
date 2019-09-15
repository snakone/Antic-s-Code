import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { BoxesModule } from '@layout/boxes/boxes.module';

import { ArticlesSidebarComponent } from './articles-sidebar.component';
import { ArticlesCategoryListBoxComponent } from './components/articles-category-list-box/articles-category-list-box.component';

@NgModule({
  declarations: [
    ArticlesSidebarComponent,
    ArticlesCategoryListBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BoxesModule,
    RouterModule
  ],
  exports: [
    ArticlesSidebarComponent
  ]
})

export class ArticlesSidebarModule { }
