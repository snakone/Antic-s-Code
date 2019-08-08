import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { NavbarModule } from './layout/navbar/navbar.module';
import { FooterModule } from './layout/footer/footer.module';
import { Error404Component } from './error404/error404.component';
import { SectionComponent } from './layout/section/section.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { ArticleGridCardComponent } from './layout/grid/articles-grid/components/article-grid-card/article-grid-card.component';
import { ArticlesGridComponent } from './layout/grid/articles-grid/articles-grid.component';
import { CategoryGridComponent } from './layout/grid/category-grid/category-grid.component';
import { ContentBoxComponent } from './layout/boxes/content-box/content-box.component';
import { ArticleMakerComponent } from './article-maker/article-maker.component';
import { ArticlesRelatedBoxComponent } from './layout/boxes/articles-related-box/articles-related-box.component';
import { TagBoxComponent } from './layout/boxes/tag-box/tag-box.component';
import { IntersectionObserverComponent } from './layout/intersection-observer/intersection-observer.component';
import { ArticleCardComponent } from './layout/article/article-card/article-card.component';

@NgModule({
  declarations: [
    Error404Component,
    SectionComponent,
    ArticlesGridComponent,
    ArticleGridCardComponent,
    PageHeaderComponent,
    CategoryGridComponent,
    ContentBoxComponent,
    ArticleMakerComponent,
    ArticlesRelatedBoxComponent,
    TagBoxComponent,
    ArticleCardComponent,
    IntersectionObserverComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule,
    FooterModule,
    RouterModule
  ],
  exports: [
    NavbarModule,
    FooterModule,
    Error404Component,
    SectionComponent,
    IntersectionObserverComponent,
    ArticlesGridComponent,
    PageHeaderComponent,
    CategoryGridComponent,
    ContentBoxComponent,
    ArticleMakerComponent,
    ArticlesRelatedBoxComponent,
    TagBoxComponent,
    ArticleCardComponent
  ]
})

export class ComponentsModule { }
