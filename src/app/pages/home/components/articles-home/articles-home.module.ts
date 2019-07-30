import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@app/shared/shared.module';

import { ArticlesHomeGridComponent } from './components/articles-home-grid/articles-home-grid.component';
import { ArticlesHomeComponent } from './articles-home.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';

@NgModule({
  declarations: [
    ArticlesHomeGridComponent,
    ArticlesHomeComponent,
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ],
  exports: [
    ArticlesHomeComponent
  ]
})

export class ArticlesHomeModule { }
