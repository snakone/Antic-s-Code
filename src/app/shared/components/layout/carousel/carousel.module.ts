import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { MatIconModule } from '@angular/material/icon';

import { CarouselComponent } from './carousel.component';

const Material = [
  MatIconModule
];

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    ...Material
  ],
  exports: [
    CarouselComponent
  ]
})

export class CarouselModule { }
