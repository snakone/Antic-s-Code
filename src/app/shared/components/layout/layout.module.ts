import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BoxesModule } from './boxes/boxes.module';
import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { ArticlesGridModule } from './grid/articles-grid/articles-grid.module';
import { ArticleLayoutModule } from './article-layout/article-layout.module';
import { SnackbarsModule } from './snackbars/snackbars.module';

import { CategoryGridComponent } from './grid/category-grid/category-grid.component';
import { SectionComponent } from './section/section.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LoadingComponent } from './loading/loading.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SharedModule } from '../../shared.module';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { GoTopComponent } from './go-top/go-top.component';
import { DialogsModule } from './dialogs/dialogs.module';
import { CarouselComponent } from './carousel/carousel.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { CardsModule } from './cards/cards.module';

@NgModule({
  declarations: [
    LoadingComponent,
    CategoryGridComponent,
    SectionComponent,
    PageHeaderComponent,
    PaginationComponent,
    GoTopComponent,
    CarouselComponent
  ],
  imports: [
    ArticleLayoutModule,
    BoxesModule,
    FooterModule,
    ArticlesGridModule,
    NavbarModule,
    NgxPaginationModule,
    CommonModule,
    SharedModule,
    RouterModule,
    SnackbarsModule,
    DialogsModule,
    SwiperModule,
    CardsModule
  ],
  exports: [
    ArticleLayoutModule,
    BoxesModule,
    FooterModule,
    ArticlesGridModule,
    CategoryGridComponent,
    LoadingComponent,
    NavbarModule,
    PageHeaderComponent,
    PaginationComponent,
    SectionComponent,
    NgxPaginationModule,
    SnackbarsModule,
    GoTopComponent,
    DialogsModule,
    CarouselComponent,
    CardsModule
  ]
})

export class LayoutModule { }
