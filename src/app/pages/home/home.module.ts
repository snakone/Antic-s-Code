import { NgModule } from '@angular/core';
import { HomeRouting } from './home.routing';
import { HomeComponent } from './home.component';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';

import { ArticlesHomeComponent } from './components/articles-home/articles-home.component';
import { CategoryHomeComponent } from './components/category-home/category-home.component';

import {
  HeaderHomeModule,
  LikedHomeModule,
  TestimonialHomeModule,
  ContactHomeModule
} from './home.index';

@NgModule({
  declarations: [
    HomeComponent,
    ArticlesHomeComponent,
    CategoryHomeComponent
  ],
  imports: [
    LayoutModule,
    HomeRouting,
    HeaderHomeModule,
    LikedHomeModule,
    TestimonialHomeModule,
    ContactHomeModule,
    SharedModule
  ]
})

export class HomeModule { }
