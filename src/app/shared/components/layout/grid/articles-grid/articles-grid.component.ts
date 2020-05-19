import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { AppState } from '@app/app.config';
import { Article } from '@shared/interfaces/interfaces';
import { takeUntil, filter } from 'rxjs/operators';

import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as ArticleActions from '@core/ngrx/actions/article.actions';

@Component({
  selector: 'app-articles-grid',
  templateUrl: './articles-grid.component.html',
  styleUrls: ['./articles-grid.component.scss']
})

export class ArticlesGridComponent implements OnInit, OnDestroy {

  articles$: Observable<Article[]>;
  count$: Observable<number>;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkData();
    this.count$ = this.store.select(fromArticles.getCount);
    this.articles$ = this.store.select(fromArticles.getLast);
  }

  private checkData(): void {
    this.store.select(fromArticles.getLastAndCountLoaded)
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => {
         this.store.dispatch(ArticleActions.getLast());
         this.store.dispatch(ArticleActions.getCount());
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
