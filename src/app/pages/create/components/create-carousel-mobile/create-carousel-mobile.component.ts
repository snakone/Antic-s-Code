import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CREATE_SLIDES_MOBILE } from '@shared/data/carousel';

@Component({
  selector: 'app-create-carousel-mobile',
  templateUrl: './create-carousel-mobile.component.html',
  styleUrls: ['./create-carousel-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateCarouselMobileComponent implements OnInit {

  slides = CREATE_SLIDES_MOBILE;

  constructor() { }

  ngOnInit(): void { }

}
