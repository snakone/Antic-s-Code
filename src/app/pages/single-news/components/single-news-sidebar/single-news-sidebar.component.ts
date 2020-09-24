import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { News } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-single-news-sidebar',
  templateUrl: './single-news-sidebar.component.html',
  styleUrls: ['./single-news-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SingleNewsSidebarComponent {

  @Input() notice: News;

  constructor() { }

}
