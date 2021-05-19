import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CREATE_SLIDES } from '@shared/data/carousel';

@Component({
  selector: 'app-create-carousel-desktop',
  templateUrl: './create-carousel-desktop.component.html',
  styleUrls: ['./create-carousel-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateCarouselDesktopComponent {

  slides = CREATE_SLIDES;

  constructor() { }

}
