import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { NavbarModule } from './layout/navbar/navbar.module';
import { FooterModule } from './layout/footer/footer.module';

import { Error404Component } from './error404/error404.component';
import { SectionComponent } from './layout/section/section.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { ArticleMakerComponent } from './article-maker/article-maker.component';
import { IntersectionObserverComponent } from './layout/intersection-observer/intersection-observer.component';
import { LoadingComponent } from './layout/loading/loading.component';
import { DisqusComponent } from './disqus/disqus.component';
import { DisqusModule } from 'ngx-disqus';

import { ArticleGridCardComponent } from './layout/grid/articles-grid/components/article-grid-card/article-grid-card.component';
import { ArticlesGridComponent } from './layout/grid/articles-grid/articles-grid.component';
import { CategoryGridComponent } from './layout/grid/category-grid/category-grid.component';
import { ArticleCardComponent } from './layout/article/article-card/article-card.component';
import { StarRatingComponent } from './snippets/star-rating/star-rating.component';
import { BoxesModule } from './layout/boxes/boxes.module';


@NgModule({
  declarations: [
    Error404Component,
    SectionComponent,
    ArticlesGridComponent,
    ArticleGridCardComponent,
    PageHeaderComponent,
    CategoryGridComponent,
    ArticleMakerComponent,
    ArticleCardComponent,
    IntersectionObserverComponent,
    LoadingComponent,
    StarRatingComponent,
    DisqusComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule,
    FooterModule,
    RouterModule,
    DisqusModule,
    BoxesModule
  ],
  exports: [
    NavbarModule,
    FooterModule,
    BoxesModule,
    Error404Component,
    SectionComponent,
    IntersectionObserverComponent,
    ArticlesGridComponent,
    PageHeaderComponent,
    CategoryGridComponent,
    ArticleMakerComponent,
    ArticleCardComponent,
    LoadingComponent,
    StarRatingComponent,
    DisqusComponent
  ]
})

export class ComponentsModule { }
