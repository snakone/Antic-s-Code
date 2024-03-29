import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-articles-sidebar',
  templateUrl: './articles-sidebar.component.html',
  styleUrls: ['./articles-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArticlesSidebarComponent {

  @Input() block: boolean;
  @Input() viewed: boolean;

  constructor() { }

}
