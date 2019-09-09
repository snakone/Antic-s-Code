import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

import { ArticleSearchComponent } from './article-search/article-search.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { StarRatingComponent } from '../../snippets/star-rating/star-rating.component';
import { RouterModule } from '@angular/router';
import { ArticleScrollspyComponent } from './article-scrollspy/article-scrollspy.component';
import { BoxesModule } from '../boxes/boxes.module';

@NgModule({
  declarations: [
    ArticleCardComponent,
    ArticleSearchComponent,
    StarRatingComponent,
    ArticleScrollspyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    BoxesModule
  ],
  exports: [
    ArticleCardComponent,
    ArticleSearchComponent,
    ArticleScrollspyComponent
  ]
})

export class ArticleLayoutModule { }
