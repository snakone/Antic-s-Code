import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './home.routing';

import { HomeComponent } from './home.component';

import {
  HeaderHomeModule,
  CategoryHomeModule,
  ArticlesHomeModule,
  BestHomeModule,
  TestimonialHomeModule,
  ContactHomeModule
} from './home.index';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HeaderHomeModule,
    CategoryHomeModule,
    ArticlesHomeModule,
    BestHomeModule,
    TestimonialHomeModule,
    ContactHomeModule
  ]
})

export class HomeModule { }
