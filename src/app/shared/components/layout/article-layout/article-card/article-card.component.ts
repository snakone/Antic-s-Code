import { Component, Input } from '@angular/core';
import { Article } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})

export class ArticleCardComponent {

  @Input() article: Article;
  @Input() shadow: boolean;
  @Input() single: boolean;  // Single or GRID

  noImage = 'assets/img/no-image.png';

  constructor() { }

}
