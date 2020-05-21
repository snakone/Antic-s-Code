import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as ArticleActions from './../actions/article.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { ArticleService } from '@core/services/article/article.service';

@Injectable()

export class ArticleEffects {

  constructor(
    private actions: Actions,
    private articleSrv: ArticleService
  ) { }

  // GET ARTICLES
  loadArticlesEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.get),
      concatMap(() =>
      this.articleSrv.get()
        .pipe(
          map(articles => ArticleActions.getSuccess({ articles })),
          catchError(error =>
              of(ArticleActions.getFailure({ error: error.message }))
    ))))
  );

  // GET ARTICLES COUNT
  loadArticlesCountEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getCount),
      concatMap(() =>
      this.articleSrv.getCount()
        .pipe(
          map(count => ArticleActions.getCountSuccess({ count })),
          catchError(error =>
              of(ArticleActions.getCountFailure({ error: error.message }))
    ))))
  );

  // GET ARTICLE BY SLUG
  loadArticleBySlugEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getBySlug),
      concatMap((action) =>
      this.articleSrv.getBySlug(action.slug)
        .pipe(
          map(article => ArticleActions.getBySlugSuccess({ article })),
          catchError(error =>
              of(ArticleActions.getBySlugFailure({ error: error.message }))
    ))))
  );

  // GET ARTICLES BY USER
  getArticlesByUserEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getByUser),
      concatMap((action) =>
      this.articleSrv.getByUser(action.id)
        .pipe(
          map(articles => ArticleActions.getByUserSuccess({ articles })),
          catchError(error =>
              of(ArticleActions.getByUserFailure({ error: error.message }))
    ))))
  );

  // GET LAST ARTICLES
  loadLastArticlesEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getLast),
      concatMap(() =>
        this.articleSrv.getLast()
          .pipe(
            map(articles => ArticleActions.getLastSuccess({ articles })),
            catchError(error =>
              of(ArticleActions.getLastFailure({ error: error.message }))
    ))))
  );

  // GET MOST LIKED ARTICLES
  loadMostLikedEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getMostLiked),
      concatMap(() =>
        this.articleSrv.getMostLiked()
          .pipe(
            map(articles => ArticleActions.getMostLikedSuccess({ articles })),
            catchError(error =>
              of(ArticleActions.getMostLikedFailure({ error: error.message }))
    ))))
  );

  // GET MOST VIEWED ARTICLES
  loadMostViewedEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getMostViewed),
      concatMap(() =>
        this.articleSrv.getMostViewed()
          .pipe(
            map(articles => ArticleActions.getMostViewedSuccess({ articles })),
            catchError(error =>
              of(ArticleActions.getMostViewedFailure({ error: error.message }))
    ))))
  );

  // GET ARTICLES BY CATEGORY
  loadArticlesByCategoryEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getByCategory),
      concatMap((action) =>
        this.articleSrv.getByCategory(action.category)
          .pipe(
            map(articles => ArticleActions.getByCategorySuccess({ articles })),
            catchError(error =>
              of(ArticleActions.getByCategoryFailure({ error: error.message }))
    ))))
  );

  // GET ARTICLES BY CATEGORY COUNT
  loadArticlesByCategoryCountEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getByCategoryCount),
      concatMap(() =>
        this.articleSrv.getByCategoryCount()
          .pipe(
            map(count => ArticleActions.getByCategoryCountSuccess({ count })),
            catchError(error =>
              of(ArticleActions.getByCategoryCountFailure({ error: error.message }))
    ))))
  );

}
