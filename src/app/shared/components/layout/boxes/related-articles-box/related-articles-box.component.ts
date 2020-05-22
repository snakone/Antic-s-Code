import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Category, Article } from '@shared/interfaces/interfaces';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Router } from '@angular/router';

import * as SearchActions from '@core/ngrx/actions/search.actions';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as ArticleActions from '@core/ngrx/actions/article.actions';

@Component({
  selector: 'app-related-articles-box',
  templateUrl: './related-articles-box.component.html',
  styleUrls: ['./related-articles-box.component.scss']
})

export class RelatedArticlesBoxComponent implements OnInit, OnDestroy {

  @Input() category: Category;
  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkData();
    this.articles$ = this.store.select(fromArticles.getByCategory);
  }

  private checkData(): void {
    this.store.select(fromArticles.getByCategoryLoaded)
     .pipe(
       filter(res => !res && !!this.category),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => {
         this.store.dispatch(
           ArticleActions.getByCategory(
             {category: this.category.category}
          )
        );
    });
  }

  public seeMore(): void {
    this.store.dispatch(SearchActions
      .searchContent({
        request: {
          value: this.category.category
        }
      }));
    this.router.navigateByUrl('/search');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(ArticleActions.resetByCategory());
  }

}
