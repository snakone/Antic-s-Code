import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContentBoxModule } from '@layout/boxes/content-box/content-box.module';
import { TranslateModule } from '@ngx-translate/core';
import { StickyBoxModule } from '@layout/boxes/sticky-box/sticky-box.module';
import { PipesModule } from '@shared/pipes/pipes.module';

import { SingleNewsSidebarComponent } from './single-news-sidebar.component';
import { RelatedNewsCardComponent } from './components/related-news-card/related-news-card.component';

@NgModule({
  declarations: [
    SingleNewsSidebarComponent,
    RelatedNewsCardComponent
  ],
  imports: [
    CommonModule,
    ContentBoxModule,
    PipesModule,
    TranslateModule,
    StickyBoxModule,
    RouterModule
  ],
  exports: [
    SingleNewsSidebarComponent
  ]
})

export class SingleNewsSidebarModule { }
