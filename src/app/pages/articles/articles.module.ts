import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';

import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles.routing';
import { ArticlesSidebarModule } from './components/articles-sidebar/articles-sidebar.module';
import { ArticlesContentModule } from './components/articles-content/articles-content.module';

@NgModule({
  declarations: [
    ArticlesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    ArticlesRoutingModule,
    ArticlesContentModule,
    ArticlesSidebarModule
  ]
})

export class ArticlesModule { }
