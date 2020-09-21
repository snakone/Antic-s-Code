import { Component, Input } from '@angular/core';
import { News } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-news-grid-card',
  templateUrl: './news-grid-card.component.html',
  styleUrls: ['./news-grid-card.component.scss']
})

export class NewsGridCardComponent {

  @Input() first: boolean;
  @Input() notice: News;

  constructor() { }

}
