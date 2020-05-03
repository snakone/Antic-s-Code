import { Component } from '@angular/core';
import { CREATE_SLIDES } from '@shared/shared.data';

@Component({
  selector: 'app-create-carousel',
  templateUrl: './create-carousel.component.html',
  styleUrls: ['./create-carousel.component.scss']
})

export class CreateCarouselComponent {

  slides = CREATE_SLIDES;

  constructor() { }

}
