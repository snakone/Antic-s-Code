import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { News } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-news-home-grid',
  templateUrl: './news-home-grid.component.html',
  styleUrls: ['./news-home-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewsHomeGridComponent {

  @Input() news: News[];

  constructor() { }

}
