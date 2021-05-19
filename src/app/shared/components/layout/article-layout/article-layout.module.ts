import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleCardBadgesComponent } from './article-card-badges/article-card-badges.component';
import { ArticleCardSkeletonComponent } from './article-card-skeleton/article-card-skeleton.component';
import { SnippetsModule } from '../../snippets/snippets.module';

import { MatIconModule } from '@angular/material/icon';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [
    ArticleCardComponent,
    ArticleCardBadgesComponent,
    ArticleCardSkeletonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SnippetsModule,
    ...Material
  ],
  exports: [
    ArticleCardComponent,
    ArticleCardBadgesComponent,
    ArticleCardSkeletonComponent
  ]
})

export class ArticleLayoutModule { }
