import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';

import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles.routing';
import { ArticlesSidebarModule } from './components/articles-sidebar/articles-sidebar.module';
import { ArticlesContentComponent } from './components/articles-content/articles-content.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesContentComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    ArticlesRoutingModule,
    ArticlesSidebarModule
  ]
})

export class ArticlesModule { }
