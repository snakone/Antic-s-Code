import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { News } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-related-news-card',
  templateUrl: './related-news-card.component.html',
  styleUrls: ['./related-news-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RelatedNewsCardComponent {

  @Input() notice: News;
  @Input() last: boolean;

  constructor() { }

}
