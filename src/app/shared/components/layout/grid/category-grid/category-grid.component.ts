import { Component, OnInit, OnDestroy } from '@angular/core';
import { MAIN_CATEGORIES } from '@shared/shared.data';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Subject, Observable } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as ArticleActions from '@core/ngrx/actions/article.actions';

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.scss']
})

export class CategoryGridComponent implements OnInit, OnDestroy {

  categories = MAIN_CATEGORIES;
  count: object = {};
  count$: Observable<object>;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkData();
    this.count$ = this.store.select(fromArticles.getByCategoryCount);
  }

  private checkData(): void {
    this.store.select(fromArticles.getCategoryCountLoaded)
     .pipe(
       takeUntil(this.unsubscribe$),
       filter(res => !res)
      )
     .subscribe(_ =>
         this.store.dispatch(
           ArticleActions.getByCategoryCount()
        )
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
