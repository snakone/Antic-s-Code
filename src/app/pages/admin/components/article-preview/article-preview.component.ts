import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { AppState } from '@app/app.config';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Article, ArticleResponse } from '@app/shared/interfaces/interfaces';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import { ArticleService, CrafterService } from '@app/core/services/services.index';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit, OnDestroy {

  article: Article;
  private unsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>,
              private articleService: ArticleService,
              private crafter: CrafterService,
              private router: Router) { }

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

  publish(id: string): void {
    this.articleService.publishArticle(id, false)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.crafter.toaster('success', 'article.published', 'info');
          this.router.navigateByUrl('/admin');
        }
    }, (err: HttpErrorResponse) => {
      err.status === 0 ?
      this.handleError('server') : this.handleError();
    });
  }

  private handleError(type?: string): void {
    if (type === 'server') {
      this.crafter.toaster('server.error',
                           'server.bad',
                           'error');
    } else {
      this.crafter.toaster('update.error',
                           'server.bad',
                           'error');
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(ArticleActions.resetSlug());
  }

}
