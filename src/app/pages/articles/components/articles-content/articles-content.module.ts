import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesContentComponent } from './articles-content.component';
import { ArticlesContentCardComponent } from './components/articles-content-card/articles-content-card.component';

@NgModule({
  declarations: [
    ArticlesContentComponent,
    ArticlesContentCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticlesContentComponent
  ]
})

export class ArticlesContentModule { }
