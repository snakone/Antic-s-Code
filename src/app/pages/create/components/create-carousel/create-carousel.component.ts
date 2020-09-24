import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CREATE_SLIDES } from '@shared/data/carousel';

@Component({
  selector: 'app-create-carousel',
  templateUrl: './create-carousel.component.html',
  styleUrls: ['./create-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateCarouselComponent {

  slides = CREATE_SLIDES;

  constructor() { }

}
