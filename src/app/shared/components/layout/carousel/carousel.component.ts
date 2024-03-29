import { Component, Input } from '@angular/core';
import { DEFAULT_SWIPER_CONFIG } from '@app/app.config';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {

  @Input() array: any[];
  index = 0;
  config = DEFAULT_SWIPER_CONFIG;

  constructor() { }

  public navigate(value: number): void {
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

  public swiperInit(): void {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));  // Temporally fix
    }, 2000);
  }

}
