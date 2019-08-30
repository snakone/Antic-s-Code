import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { ArticlesContentComponent } from './articles-content.component';
import { ComponentsModule } from '@app/shared/components/components.module';
import { ArticlesSidebarModule } from '../articles-sidebar/articles-sidebar.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    ArticlesContentComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxPaginationModule,
    ArticlesSidebarModule,
    InfiniteScrollModule,
    SharedModule
  ],
  exports: [
    ArticlesContentComponent
  ]
})

export class ArticlesContentModule { }
