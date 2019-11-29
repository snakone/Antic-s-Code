import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})

export class ArticleCardComponent implements OnInit {

  @Input() article: Article;
  @Input() shadow: boolean;
  @Input() single: boolean;  // Single or GRID

  constructor() { }

  ngOnInit() { }

}
