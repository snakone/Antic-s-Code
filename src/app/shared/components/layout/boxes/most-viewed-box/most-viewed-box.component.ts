import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Article } from '@shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { filter, takeUntil } from 'rxjs/operators';

import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as ArticleActions from '@core/ngrx/actions/article.actions';

@Component({
  selector: 'app-most-viewed-box',
  templateUrl: './most-viewed-box.component.html',
  styleUrls: ['./most-viewed-box.component.scss']
})

export class MostViewedBoxComponent implements OnInit, OnDestroy {

  @Input() sidebar: boolean;
  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkData();
    this.articles$ = this.store.select(fromArticles.getMostViewed);
  }

  private checkData(): void {
    this.store.select(fromArticles.getMostViewedLoaded)
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ =>
         this.store.dispatch(ArticleActions.getMostViewed())
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
