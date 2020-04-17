import { Component, Input } from '@angular/core';
import { CarouselSlide } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})

export class TestimonialCardComponent {

  @Input() t: CarouselSlide;

  constructor() { }

}
