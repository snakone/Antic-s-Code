import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/shared/material/material.module';
import { PipesModule } from '@app/shared/pipes/pipes.module';

import { ArticlesGridComponent } from './articles-grid.component';
import { ArticleGridCardComponent } from './components/article-grid-card/article-grid-card.component';
import { ArticleLayoutModule } from '../../article-layout/article-layout.module';

@NgModule({
  declarations: [
    ArticlesGridComponent,
    ArticleGridCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    PipesModule,
    ArticleLayoutModule
  ],
  exports: [
    ArticlesGridComponent
  ]
})

export class ArticlesGridModule { }
