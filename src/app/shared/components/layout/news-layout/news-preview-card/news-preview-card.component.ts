import { Component, Input } from '@angular/core';
import { News } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-news-preview-card',
  templateUrl: './news-preview-card.component.html',
  styleUrls: ['./news-preview-card.component.scss']
})

export class NewsPreviewCardComponent {

  @Input() notice: News;

  constructor() { }

}
