import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/shared/material/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { ArticlesGridComponent } from './articles-grid.component';
import { ArticleGridCardComponent } from './components/article-grid-card/article-grid-card.component';
import { ArticleLayoutModule } from '../../article-layout/article-layout.module';
import { ArticleGridCardSkeletonComponent } from './components/article-grid-card-skeleton/article-grid-card-skeleton.component';

@NgModule({
  declarations: [
    ArticlesGridComponent,
    ArticleGridCardComponent,
    ArticleGridCardSkeletonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    ArticleLayoutModule
  ],
  exports: [
    ArticlesGridComponent,
    ArticleGridCardComponent,
    ArticleGridCardSkeletonComponent
  ]
})

export class ArticlesGridModule { }
