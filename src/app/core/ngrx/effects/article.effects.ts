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
  // GET ARTICLES
  loadArticlesEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getArticles),
      concatMap(() =>
      this.articleService.getArticles()
        .pipe(
          map(res => ArticleActions.getArticlesSuccess({articles: res.articles})),
          catchError(error =>
              of(ArticleActions.getArticlesFailure({ error: error.message }))
          )
        )
      )
    )
  );
  // GET ARTICLES COUNT
  loadArticlesCountEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getArticlesCount),
      concatMap(() =>
      this.articleService.getArticlesCount()
        .pipe(
          map(res => ArticleActions.getArticlesCountSuccess({count: res.count})),
          catchError(error =>
              of(ArticleActions.getArticlesCountFailure({ error: error.message }))
          )
        )
      )
    )
  );
  // GET ARTICLE BY SLUG
  loadArticleBySlugEffect$ = createEffect(() => this.actions
  .pipe(
    ofType(ArticleActions.getArticleBySlug),
    concatMap((action) =>
    this.articleService.getArticleBySlug(action.slug)
      .pipe(
        map(res => ArticleActions.getArticleBySlugSuccess({article: res.articles[0]})),
        catchError(error =>
            of(ArticleActions.getArticleBySlugFailure({ error: error.message }))
          )
        )
      )
    )
  );
  // GET LAST ARTICLES
  loadLastArticlesEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getLastArticles),
      concatMap(() =>
        this.articleService.getLastArticles()
          .pipe(
            map(res => ArticleActions.getLastArticlesSuccess({ articles: res.articles })),
            catchError(error =>
              of(ArticleActions.getLastArticlesFailure({ error: error.message }))
          )
        )
      )
    )
  );
  // GET MOST LIKED ARTICLES
  loadMostLikedEffect$ = createEffect(() => this.actions
  .pipe(
    ofType(ArticleActions.getMostLikedArticles),
    concatMap(() =>
      this.articleService.getMostLikedArticles()
        .pipe(
          map(res => ArticleActions.getMostLikedArticlesSuccess({ articles: res.articles })),
          catchError(error =>
            of(ArticleActions.getMostLikedArticlesFailure({ error: error.message }))
        )
      )
    )
  )
);

}
