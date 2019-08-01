import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@app/shared/shared.module';
import { DEFAULT_SWIPER_CONFIG } from '@app/app.config';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';

import { TestimonialHomeComponent } from './testimonial-home.component';
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';

@NgModule({
  declarations: [
    TestimonialHomeComponent,
    CarouselHomeComponent,
    TestimonialCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    SwiperModule
  ],
  exports: [
    TestimonialHomeComponent
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})

export class TestimonialHomeModule { }
