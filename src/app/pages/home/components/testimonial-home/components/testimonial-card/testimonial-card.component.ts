import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CarouselSlide } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TestimonialCardComponent {

  @Input() t: CarouselSlide;

  constructor() { }

}
