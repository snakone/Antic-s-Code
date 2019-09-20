import { Component, OnInit, OnDestroy } from '@angular/core';
import { MAIN_CATEGORIES } from '@app/shared/shared.data';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import { CategoryCount } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.scss']
})

export class CategoryGridComponent implements OnInit, OnDestroy {

  categories = MAIN_CATEGORIES;
  count: CategoryCount;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkData();
    this.getCount();
  }

  private checkData(): void {
    this.store.select(fromArticles.getCategoryCountLoaded)
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: boolean) => {
       if (!res) {
         this.store.dispatch(ArticleActions.getArticlesByCategoryCount());
       }
    });
  }

  private getCount(): void {
    this.store.select(fromArticles.getArticlesByCategoryCount)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: CategoryCount) => {
        this.count = res;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
