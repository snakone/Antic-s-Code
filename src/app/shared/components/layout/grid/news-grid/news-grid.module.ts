import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsGridCardComponent } from './components/news-grid-card/news-grid-card.component';
import { NewsGridComponent } from './news-grid.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    NewsGridComponent,
    NewsGridCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NewsGridComponent
  ]
})

export class NewsGridModule { }
