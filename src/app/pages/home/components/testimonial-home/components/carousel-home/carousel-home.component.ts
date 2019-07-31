import { Component, OnInit } from '@angular/core';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
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

  constructor() { }

  ngOnInit() { }

  navigate(value: number): void {
    const i = this.index + value;
    const n = this.testimonials.length - 1;

    if (i >= n) {
      this.index = n;
      return;
    }

    if (i <= 0) {
      this.index = 0;
      return;
    }

    this.index = this.index + value;
  }

}
