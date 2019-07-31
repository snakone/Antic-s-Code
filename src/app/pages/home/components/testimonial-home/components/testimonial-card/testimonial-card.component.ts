import { Component, OnInit, Input } from '@angular/core';
import { Testimonial } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})

export class TestimonialCardComponent implements OnInit {

  @Input() t: Testimonial;

  constructor() { }

  ngOnInit() { }

}
