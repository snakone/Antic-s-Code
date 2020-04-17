import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card-badges',
  templateUrl: './article-card-badges.component.html',
  styleUrls: ['./article-card-badges.component.scss']
})

export class ArticleCardBadgesComponent {

  @Input() badges: string[];

  constructor() { }

}
