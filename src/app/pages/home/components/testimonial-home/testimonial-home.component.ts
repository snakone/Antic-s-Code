import { Component, OnInit } from '@angular/core';

import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-testimonial-home',
  templateUrl: './testimonial-home.component.html',
  styleUrls: ['./testimonial-home.component.scss']
})

export class TestimonialHomeComponent implements OnInit {

  images: any;

  constructor() { }

  ngOnInit() {
    this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  }

}
