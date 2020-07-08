import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { ArticlesGridComponent } from './articles-grid.component';
import { ArticleGridCardComponent } from './components/article-grid-card/article-grid-card.component';
import { ArticleLayoutModule } from '../../article-layout/article-layout.module';
import { ArticleGridCardSkeletonComponent } from './components/article-grid-card-skeleton/article-grid-card-skeleton.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

const Material = [
  MatIconModule,
  MatTooltipModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    ArticlesGridComponent,
    ArticleGridCardComponent,
    ArticleGridCardSkeletonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ArticleLayoutModule,
    ...Material
  ],
  exports: [
    ArticlesGridComponent,
    ArticleGridCardComponent,
    ArticleGridCardSkeletonComponent
  ]
})

export class ArticlesGridModule { }
