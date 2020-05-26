import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';

import * as SearchActions from '@core/ngrx/actions/search.actions';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as ArticleActions from '@core/ngrx/actions/article.actions';

@Component({
  selector: 'app-related-tags-box',
  templateUrl: './related-tags-box.component.html',
  styleUrls: ['./related-tags-box.component.scss']
})

export class RelatedTagsBoxComponent implements OnInit, OnDestroy {

  @Input() article: Article;
  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkData();
    this.articles$ = this.store.select(fromArticles.getByTags);
  }

  private checkData(): void {
    this.store.select(fromArticles.getByTagsLoaded)
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => {
         this.store.dispatch(
           ArticleActions.getByTags({
            request: {
              id: this.article._id,
              tags: this.article.tags
            }
          })
        );
    });
  }

  public seeMore(): void {
    this.store.dispatch(SearchActions
      .searchContent({
        request: {
          value: '',
          tags: this.article.tags
        }
      }));
    this.router.navigateByUrl('/search');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(ArticleActions.resetByTags());
  }

}
