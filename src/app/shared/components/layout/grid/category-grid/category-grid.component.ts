import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { ArticlesFacade } from '@core/ngrx/facade/article.facade';

import { MAIN_CATEGORIES } from '@shared/data/categories';

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.scss']
})

export class CategoryGridComponent implements OnInit, OnDestroy {

  @Input() isHome = false;
  categories = MAIN_CATEGORIES;
  count: object = {};
  count$: Observable<object>;
  private unsubscribe$ = new Subject<void>();

  constructor(private articlesFacade: ArticlesFacade) { }

  ngOnInit() {
    this.checkData();
    this.count$ = this.articlesFacade.byCategoryCount$;
  }

  private checkData(): void {
    this.articlesFacade.byCategoryCountLoaded$
     .pipe(
       takeUntil(this.unsubscribe$),
       filter(res => !res)
      )
     .subscribe(_ => this.articlesFacade.getByCategoryCount());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
