import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as ArticleActions from './../actions/article.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { ArticleService } from '@app/core/services/article/article.service';

@Injectable()

export class ArticleEffects {
  constructor(private actions: Actions,
              private articleService: ArticleService) { }

  loadArticlesEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getArticles),
      concatMap(() =>
      this.articleService.getArticles()
        .pipe(
          map(res => ArticleActions.getArticlesSuccess({articles: res.articles})),
          catchError(error =>
              of(ArticleActions.GetArticlesFailure({ error: error.message }))
            )
          )
        )
      )
  );

  loadArticleBySlugEffect$ = createEffect(() => this.actions
  .pipe(
    ofType(ArticleActions.getArticleBySlug),
    concatMap((action) =>
    this.articleService.getArticleBySlug(action.slug)
      .pipe(
        map(res => ArticleActions.getArticleBySlugSuccess({article: res.articles[0]})),
        catchError(error =>
            of(ArticleActions.GetArticleBySlugFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadLastArticlesEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getLastArticles),
      concatMap(() =>
        this.articleService.getLastArticles()
          .pipe(
            map(res => ArticleActions.getLastArticlesSuccess({ articles: res.articles })),
            catchError(error =>
              of(ArticleActions.GetLastArticlesFailure({ error: error.message }))
            )
          )
      )
    )
  );

}
