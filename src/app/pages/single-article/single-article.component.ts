import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as ArticleActions from '@core/ngrx/actions/article.actions';

import { Article } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { takeUntil} from 'rxjs/operators';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';

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
    this.getArticlyBySlug();
  }

  private getArticlyBySlug(): void {
    this.route.params
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe(params => {
        this.store.dispatch(ArticleActions.getArticleBySlug({ slug: params.slug }));
     });

    this.store.select(fromArticles.getArticleBySlug)
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: Article) => {
        this.article = null;
        setTimeout(() => { this.article = res; }, 200);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
