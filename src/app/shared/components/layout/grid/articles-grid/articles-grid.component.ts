import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@app/app.config';

import { Article } from '@app/shared/interfaces/interfaces';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';

@Component({
  selector: 'app-articles-grid',
  templateUrl: './articles-grid.component.html',
  styleUrls: ['./articles-grid.component.scss']
})

export class ArticlesGridComponent implements OnInit {

  articles$: Observable<Article[]>;
  count$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.articles$ = this.store.select(fromArticles.getLastArticles);
    this.count$ = this.store.select(fromArticles.getArticlesCount);
  }

}
