import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { AppState } from '@app/app.config';
import { Article } from '@app/shared/interfaces/interfaces';
import * as fromCode from '@core/ngrx/selectors/code.selectors';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';


@Component({
  selector: 'app-articles-grid',
  templateUrl: './articles-grid.component.html',
  styleUrls: ['./articles-grid.component.scss']
})

export class ArticlesGridComponent implements OnInit, OnDestroy {

  articles$: Observable<Article[]>;
  total$: Observable<number>;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.articles$ = this.getLastArticles();
    this.total$ = this.getTotalPost();
  }

  getLastArticles(): Observable<Article[]> {
    return this.store.select(fromArticles.getLastArticles)
      .pipe(takeUntil(this.unsubscribe$));
  }

  getTotalPost(): Observable<number> {
    return this.store.select(fromCode.getArticlesCount)
     .pipe(takeUntil(this.unsubscribe$));
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
