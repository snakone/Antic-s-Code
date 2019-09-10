import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-article-grid-card',
  templateUrl: './article-grid-card.component.html',
  styleUrls: ['./article-grid-card.component.scss']
})

export class ArticleGridCardComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() { }

}
