import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { AppState } from '@app/app.config';

import { Article } from '@app/shared/interfaces/interfaces';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import { takeUntil, debounceTime } from 'rxjs/operators';

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
    this.getArticles();
  }

  private checkData(): void {
    this.store.select(fromArticles.getLastArticlesAndCountLoaded)
     .pipe(takeUntil(this.unsubscribe$), debounceTime(2000))
      .subscribe((res: boolean) => {
       if (!res) {
         this.store.dispatch(ArticleActions.getLastArticles());
         this.store.dispatch(ArticleActions.getArticlesCount());
       }
    });
  }

  private getArticles(): void {
    this.articles$ = this.store.select(fromArticles.getLastArticles).pipe(debounceTime(2000));
    this.count$ = this.store.select(fromArticles.getArticlesCount);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
