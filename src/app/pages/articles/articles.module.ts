import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '@shared/components/layout/layout.module';

import { ArticlesComponent } from './articles.component';
import { ArticlesRouting } from './articles.routing';
import { ArticlesSidebarModule } from './components/articles-sidebar/articles-sidebar.module';
import { ArticlesContentComponent } from './components/articles-content/articles-content.component';
import { ArticlesSortBarComponent } from './components/articles-sort-bar/articles-sort-bar.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

const Material = [
  MatTooltipModule,
  MatFormFieldModule,
  MatIconModule
];

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesContentComponent,
    ArticlesSortBarComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    ArticlesRouting,
    ArticlesSidebarModule,
    MarkdownModule.forChild(),
    ...Material
  ]
})

export class ArticlesModule { }
