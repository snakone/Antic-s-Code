import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { NavbarModule } from './layout/navbar/navbar.module';
import { FooterModule } from './layout/footer/footer.module';

import { Error404Component } from './error404/error404.component';
import { SectionComponent } from './layout/section/section.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { ArticleLayoutModule } from './layout/article-layout/article-layout.module';
import { LoadingComponent } from './layout/loading/loading.component';
import { BoxesModule } from './layout/boxes/boxes.module';
import { DisqusComponent } from './disqus/disqus.component';
import { DisqusModule } from 'ngx-disqus';

import { CategoryGridComponent } from './layout/grid/category-grid/category-grid.component';
import { PaginationComponent } from './layout/pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { ContentMakerComponent } from './content-maker/content-maker.component';
import { BottomSheetComponent } from './layout/sheets/bottom-sheet/bottom-sheet.component';
import { ArticlesGridModule } from './layout/grid/articles-grid/articles-grid.module';

@NgModule({
  declarations: [
    Error404Component,
    SectionComponent,
    PageHeaderComponent,
    CategoryGridComponent,
    ContentMakerComponent,
    LoadingComponent,
    DisqusComponent,
    PaginationComponent,
    BottomSheetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule,
    FooterModule,
    RouterModule,
    DisqusModule,
    BoxesModule,
    ArticleLayoutModule,
    ArticlesGridModule,
    NgxPaginationModule
  ],
  exports: [
    NavbarModule,
    FooterModule,
    BoxesModule,
    ArticleLayoutModule,
    ArticlesGridModule,
    Error404Component,
    SectionComponent,
    PageHeaderComponent,
    CategoryGridComponent,
    ContentMakerComponent,
    LoadingComponent,
    DisqusComponent,
    PaginationComponent,
    BottomSheetComponent
  ],
  entryComponents: [BottomSheetComponent]
})

export class ComponentsModule { }
