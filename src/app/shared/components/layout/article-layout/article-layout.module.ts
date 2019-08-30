import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

import { ArticleSearchComponent } from './article-search/article-search.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { StarRatingComponent } from '../../snippets/star-rating/star-rating.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ArticleCardComponent,
    ArticleSearchComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ArticleCardComponent,
    ArticleSearchComponent
  ]
})

export class ArticleLayoutModule { }
