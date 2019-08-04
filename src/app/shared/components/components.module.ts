import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { Error404Component } from './error404/error404.component';
import { NavbarModule } from './layout/navbar/navbar.module';
import { SectionComponent } from './layout/section/section.component';
import { IntersectionObserverComponent } from './layout/intersection-observer/intersection-observer.component';
import { FooterModule } from './layout/footer/footer.module';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { ArticleCardComponent } from './layout/grid/articles-grid/components/article-card/article-card.component';
import { ArticlesGridComponent } from './layout/grid/articles-grid/articles-grid.component';
import { CategoryGridComponent } from './layout/grid/category-grid/category-grid.component';
import { ContentBoxComponent } from './layout/grid/content-box/content-box.component';

@NgModule({
  declarations: [
    Error404Component,
    SectionComponent,
    IntersectionObserverComponent,
    ArticlesGridComponent,
    ArticleCardComponent,
    PageHeaderComponent,
    CategoryGridComponent,
    ContentBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule,
    FooterModule,
    RouterModule
  ],
  exports: [
    Error404Component,
    SectionComponent,
    IntersectionObserverComponent,
    ArticlesGridComponent,
    PageHeaderComponent,
    CategoryGridComponent,
    NavbarModule,
    FooterModule,
    ContentBoxComponent
  ]
})

export class ComponentsModule { }
