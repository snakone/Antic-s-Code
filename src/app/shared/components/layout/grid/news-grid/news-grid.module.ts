import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { NewsGridComponent } from './news-grid.component';
import { NewsGridCardComponent } from './components/news-grid-card/news-grid-card.component';
import { NewsHomeGridComponent } from './components/news-home-grid/news-home-grid.component';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [
    NewsGridComponent,
    NewsGridCardComponent,
    NewsHomeGridComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ...Material
  ],
  exports: [
    NewsGridComponent,
    NewsHomeGridComponent
  ]
})

export class NewsGridModule { }
