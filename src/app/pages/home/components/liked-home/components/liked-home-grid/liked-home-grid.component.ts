import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-liked-home-grid',
  templateUrl: './liked-home-grid.component.html',
  styleUrls: ['./liked-home-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LikedHomeGridComponent {

  @Input() articles: Article[];

  constructor() { }

}
