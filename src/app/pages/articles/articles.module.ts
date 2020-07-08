import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '@shared/shared.module';
import { ArticlesRouting } from './articles.routing';
import { ArticlesSidebarModule } from './components/articles-sidebar/articles-sidebar.module';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ArticleLayoutModule } from '@layout/article-layout/article-layout.module';
import { GridModule } from '@layout/grid/grid.module';
import { SectionModule } from '@layout/section/section.module';
import { PageHeaderModule } from '@layout/page-header/page-header.module';
import { ContentBoxModule } from '@layout/boxes/content-box/content-box.module';

import { ArticlesComponent } from './articles.component';
import { ArticlesContentComponent } from './components/articles-content/articles-content.component';
import { ArticlesSortBarComponent } from './components/articles-sort-bar/articles-sort-bar.component';

const Material = [
  MatTooltipModule,
  MatFormFieldModule,
  MatIconModule
];

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesContentComponent,
    ArticlesSortBarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArticlesRouting,
    ArticlesSidebarModule,
    ArticleLayoutModule,
    GridModule,
    MarkdownModule.forChild(),
    ...Material,
    SectionModule,
    PageHeaderModule,
    ContentBoxModule
  ]
})

export class ArticlesModule { }
