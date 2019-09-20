import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleCardBadgesComponent } from './article-card-badges/article-card-badges.component';
import { ScrollSpyService } from '@layout/article-layout/services/scrollspy.service';
import { ArticleReactionsComponent } from './article-reactions/article-reactions.component';

@NgModule({
  declarations: [
    ArticleCardComponent,
    ArticleCardBadgesComponent,
    ArticleReactionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    ArticleCardComponent,
    ArticleReactionsComponent,
    ArticleCardBadgesComponent
  ],
  providers: [ScrollSpyService]
})

export class ArticleLayoutModule { }
