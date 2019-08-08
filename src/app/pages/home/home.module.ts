import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '@app/shared/components/components.module';

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
    ComponentsModule,
    HomeRoutingModule,
    HeaderHomeModule,
    CategoryHomeModule,
    ArticlesHomeModule,
    BestHomeModule,
    TestimonialHomeModule,
    ContactHomeModule
  ]
})

export class HomeModule { }
