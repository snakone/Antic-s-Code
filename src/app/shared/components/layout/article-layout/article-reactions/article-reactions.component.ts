import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-article-reactions',
  templateUrl: './article-reactions.component.html',
  styleUrls: ['./article-reactions.component.scss']
})

export class ArticleReactionsComponent implements OnInit {

  @Input() article: Article;
  @Input() box: boolean;
  @Input() single: boolean;

  constructor() { }

  ngOnInit() { }

}
