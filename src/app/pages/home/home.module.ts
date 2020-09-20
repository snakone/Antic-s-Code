import { NgModule } from '@angular/core';
import { HomeRouting } from './home.routing';
import { HomeComponent } from './home.component';
import { SharedModule } from '@shared/shared.module';

import { ArticlesHomeComponent } from './components/articles-home/articles-home.component';
import { CategoryHomeComponent } from './components/category-home/category-home.component';

import {
  HeaderHomeModule,
  LikedHomeModule,
  TestimonialHomeModule,
  ContactHomeModule
} from './home.index';

import { GridModule } from '@layout/grid/grid.module';
import { SectionModule } from '@layout/section/section.module';
import { NewsHomeComponent } from './components/news-home/news-home.component';
import { CommonModule } from '@angular/common';
import { NewsAccessModule } from '@core/ngrx/news/data-access/news-access.module';

@NgModule({
  declarations: [
    HomeComponent,
    ArticlesHomeComponent,
    CategoryHomeComponent,
    NewsHomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRouting,
    HeaderHomeModule,
    LikedHomeModule,
    TestimonialHomeModule,
    ContactHomeModule,
    SharedModule,
    GridModule,
    SectionModule,
    NewsAccessModule
  ]
})

export class HomeModule { }
