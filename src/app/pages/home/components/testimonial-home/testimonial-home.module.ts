import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { LayoutModule } from '@app/shared/components/layout/layout.module';

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
    LayoutModule,
    SharedModule
  ],
  exports: [
    TestimonialHomeComponent
  ]
})

export class TestimonialHomeModule { }
