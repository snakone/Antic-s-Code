import { Component, OnInit, Input } from '@angular/core';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() array: any[];
  index = 0;
  config = SWIPER_CONFIG;

  constructor() { }

  ngOnInit() { }

  navigate(value: number): void {
    const i = this.index + value;
    const n = this.array.length - 1;

    if (i >= n) {
      this.index = n;
      return;
    }

    if (i <= 0) {
      this.index = 0;
      return;
    }

    this.index = i;
  }

}
