import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleNewsRouting } from './single-news.routing';

import { SingleNewsComponent } from './single-news.component';
import { SingleNewsSidebarComponent } from './components/single-news-sidebar/single-news-sidebar.component';
import { SingleNewsContentComponent } from './components/single-news-content/single-news-content.component';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { SectionModule } from '@layout/section/section.module';
import { SpinnerModule } from '@snippets/spinner/spinner.module';


@NgModule({
  declarations: [
    SingleNewsComponent,
    SingleNewsSidebarComponent,
    SingleNewsContentComponent
  ],
  imports: [
    CommonModule,
    SingleNewsRouting,
    PageHeaderModule,
    SectionModule,
    SpinnerModule
  ]
})

export class SingleNewsModule { }
