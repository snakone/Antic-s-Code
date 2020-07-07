import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SectionModule } from '@layout/section/section.module';
import { CarouselModule } from '@layout/carousel/carousel.module';

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
    SwiperModule,
    SectionModule,
    SharedModule,
    CarouselModule
  ],
  exports: [
    TestimonialHomeComponent
  ]
})

export class TestimonialHomeModule { }
