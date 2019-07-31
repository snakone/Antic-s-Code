import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './home.routing';

import { HomeComponent } from './home.component';
import { HeaderHomeModule } from './components/header-home/header-home.module';
import { CategoryHomeModule } from './components/category-home/category-home.module';
import { ArticlesHomeModule } from './components/articles-home/articles-home.module';
import { FeaturesHomeModule } from './components/features-home/features-home.module';
import { BestHomeModule } from './components/best-home/best-home.module';
import { TestimonialHomeModule } from './components/testimonial-home/testimonial-home.module';

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
    FeaturesHomeModule,
    BestHomeModule,
    TestimonialHomeModule
  ]
})

export class HomeModule { }
