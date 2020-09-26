import { Component, OnInit } from '@angular/core';

import { ArticlesFacade } from '@store/articles/article.facade';
import { Observable } from 'rxjs';
import { Article } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-articles-grid',
  templateUrl: './articles-grid.component.html',
  styleUrls: ['./articles-grid.component.scss']
})

export class ArticlesGridComponent implements OnInit {

  articles$: Observable<Article[]>;
  count$: Observable<number>;

  constructor(private articlesFacade: ArticlesFacade) { }

  ngOnInit() {
    this.count$ = this.articlesFacade.count$;
    this.articles$ = this.articlesFacade.last$;
  }

}
