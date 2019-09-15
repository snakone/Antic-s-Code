import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { BoxesModule } from '../boxes/boxes.module';
import { RouterModule } from '@angular/router';
import { SnippetsModule } from '../../snippets/snippets.module';

import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleScrollspyComponent } from './article-scrollspy/article-scrollspy.component';
import { ArticleCardBadgesComponent } from './article-card-badges/article-card-badges.component';
import { ScrollSpyService } from '@layout/article-layout/services/scrollspy.service';

@NgModule({
  declarations: [
    ArticleCardComponent,
    ArticleScrollspyComponent,
    ArticleCardBadgesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    BoxesModule,
    SnippetsModule
  ],
  exports: [
    ArticleCardComponent,
    ArticleScrollspyComponent,
    ArticleCardBadgesComponent
  ],
  providers: [ScrollSpyService]
})

export class ArticleLayoutModule { }
