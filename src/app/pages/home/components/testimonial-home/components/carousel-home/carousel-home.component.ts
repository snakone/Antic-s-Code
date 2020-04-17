import { Component } from '@angular/core';
import { TESTIMONIALS } from '@shared/shared.data';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss']
})

export class CarouselHomeComponent {

  testimonials = TESTIMONIALS;

  constructor() { }

}
