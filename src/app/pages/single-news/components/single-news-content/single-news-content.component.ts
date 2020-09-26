import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { News } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-single-news-content',
  templateUrl: './single-news-content.component.html',
  styleUrls: ['./single-news-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SingleNewsContentComponent {

  @Input() notice: News;

  constructor() { }

}