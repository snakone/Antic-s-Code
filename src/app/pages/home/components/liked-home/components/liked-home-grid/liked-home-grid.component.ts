import { Component, Input } from '@angular/core';
import { Article } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-liked-home-grid',
  templateUrl: './liked-home-grid.component.html',
  styleUrls: ['./liked-home-grid.component.scss']
})

export class LikedHomeGridComponent {

  @Input() articles: Article[];

  constructor() { }

}
