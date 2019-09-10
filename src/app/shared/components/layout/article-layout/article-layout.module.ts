import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { BoxesModule } from '../boxes/boxes.module';
import { RouterModule } from '@angular/router';

import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleScrollspyComponent } from './article-scrollspy/article-scrollspy.component';
import { StarRatingComponent } from '../../snippets/star-rating/star-rating.component';
import { ArticleCardBadgesComponent } from './article-card-badges/article-card-badges.component';

@NgModule({
  declarations: [
    ArticleCardComponent,
    StarRatingComponent,
    ArticleScrollspyComponent,
    ArticleCardBadgesComponent
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
    ArticleScrollspyComponent,
    ArticleCardBadgesComponent
  ]
})

export class ArticleLayoutModule { }
