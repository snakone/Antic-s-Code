import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '@app/shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { map } from 'rxjs/operators';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as ArticleActions from '@core/ngrx/actions/article.actions';

@Component({
  selector: 'app-last-articles-box',
  templateUrl: './last-articles-box.component.html',
  styleUrls: ['./last-articles-box.component.scss']
})
export class LastArticlesBoxComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.articles$ = this.getLastArticles();
  }

  private getLastArticles(): Observable<Article[]> {
    return this.store.select(fromArticles.getLastArticles)
    .pipe(map((res: Article[]) => {
      if (res.length === 0) {
        this.store.dispatch(ArticleActions.getLastArticles());
        return res;
      }
      return res.slice(0, 4);
    }));
  }

}
