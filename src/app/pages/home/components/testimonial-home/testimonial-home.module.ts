import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialHomeComponent } from './testimonial-home.component';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@app/shared/shared.module';

import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1,
};

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
