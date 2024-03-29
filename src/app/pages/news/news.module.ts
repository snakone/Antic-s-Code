import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { NewsRoutingModule } from './news.routing';
import { SectionModule } from '@layout/section/section.module';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { ContentBoxModule } from '@layout/boxes/content-box/content-box.module';
import { SpinnerModule } from '@shared/components/snippets/spinner/spinner.module';
import { GridModule } from '@shared/components/layout/grid/grid.module';
import { NewsAccessModule } from '@store/news/data-access/news-access.module';
import { NewsGridModule } from '@layout/grid/news-grid/news-grid.module';
import { NewsLayoutModule } from '@layout/news-layout/news-layout.module';
import { MatIconModule } from '@angular/material/icon';

import { NewsComponent } from './news.component';
import { NewsContentComponent } from './components/news-content/news-content.component';
import { NewsViewedComponent } from './components/news-viewed/news-viewed.component';
import { NewsPreviewComponent } from './components/news-preview/news-preview.component';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [
    NewsComponent,
    NewsContentComponent,
    NewsViewedComponent,
    NewsPreviewComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    PageHeaderModule,
    SectionModule,
    ContentBoxModule,
    SpinnerModule,
    GridModule,
    NewsAccessModule,
    NewsGridModule,
    NewsLayoutModule,
    ...Material
  ]
})

export class NewsModule { }
