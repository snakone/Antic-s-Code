import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';

import { Article } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})

export class SingleArticleComponent implements OnInit, OnDestroy {

  article: Article;
  private unsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.article = null;
    this.getArticlyBySlug();
  }

  private getArticlyBySlug(): void {
    this.route.params
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
        this.store.dispatch(ArticleActions.getArticleBySlug({ slug: params.slug }));
    });

    this.store.select(fromArticles.getArticleBySlug)
      .pipe(
        takeUntil(this.unsubscribe$),
        distinctUntilChanged())
      .subscribe((res: Article) => {
        if (res) {
          this.article = null;
          setTimeout(() => { this.article = res; }, 400);
        }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(ArticleActions.ResetSlug());
  }

}
