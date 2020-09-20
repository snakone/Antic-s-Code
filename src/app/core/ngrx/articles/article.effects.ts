import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as ArticleActions from './article.actions';
import * as NewsActions from '../news/news.actions';
import { map, concatMap, catchError, tap } from 'rxjs/operators';
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

  // GET ARTICLES DATA
  getArticlesDataEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getData),
      concatMap(() =>
      this.articleSrv.getData()
        .pipe(
          map(res => ArticleActions.getDataSuccess({ res })),
          catchError(error =>
              of(ArticleActions.getDataFailure({ error: error.message }))
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

  // GET ARTICLES BY TAGS
  loadArticlesByTagsEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(ArticleActions.getByTags),
      concatMap((action) =>
        this.articleSrv.getByTags(action.request)
          .pipe(
            map(articles => ArticleActions.getByTagsSuccess({ articles })),
            catchError(error =>
              of(ArticleActions.getByTagsFailure({ error: error.message }))
    ))))
  );

}
