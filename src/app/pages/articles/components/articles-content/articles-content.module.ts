import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesContentComponent } from './articles-content.component';
import { ComponentsModule } from '@app/shared/components/components.module';
import { ArticlesSidebarModule } from '../articles-sidebar/articles-sidebar.module';

@NgModule({
  declarations: [
    ArticlesContentComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ArticlesSidebarModule
  ],
  exports: [
    ArticlesContentComponent
  ]
})

export class ArticlesContentModule { }
