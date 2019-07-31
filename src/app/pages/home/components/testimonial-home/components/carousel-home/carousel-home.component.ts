import { Component, OnInit, ViewChild } from '@angular/core';
import { SWIPER_CONFIG, SwiperDirective } from 'ngx-swiper-wrapper';
import { TESTIMONIALS } from '@shared/shared.data';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss']
})

export class CarouselHomeComponent implements OnInit {

  index = 0;
  config = SWIPER_CONFIG;
  testimonials = TESTIMONIALS;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
  first = true;
  last = false;

  constructor() { }

  ngOnInit() {
  }

  navigate(value: number): void {
    const i = this.index + value;

    if (i >= (this.testimonials.length - 1)) {
      this.index = this.testimonials.length - 1;
      return;
    }

    if (i <= 0) {
      this.index = 0;
      return;
    }

    this.index = this.index + value;
  }

}
