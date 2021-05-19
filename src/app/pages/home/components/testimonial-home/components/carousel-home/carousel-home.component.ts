import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TESTIMONIALS } from '@shared/data/carousel';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CarouselHomeComponent {

  testimonials = TESTIMONIALS;

  constructor() { }

}
