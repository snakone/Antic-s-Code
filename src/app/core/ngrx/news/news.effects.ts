import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as NewsActions from './news.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { NewsService } from '@core/services/news/news.service';

@Injectable()

export class NewsEffects {

  constructor(
    private actions: Actions,
    private newsSrv: NewsService
  ) { }

  // GET NEWS
  getNewsEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(NewsActions.get),
      concatMap(() => this.newsSrv.get()
        .pipe(
          map(news => NewsActions.getSuccess({news})),
          catchError(error =>
              of(NewsActions.getFailure({ error: error.message }))
    ))))
  );

  // GET LAST AND VIEWED
    getLastAndViewedEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(NewsActions.getLastAndViewed),
      concatMap(() => this.newsSrv.getData()
        .pipe(
          map(res => NewsActions.getLastAndViewedSuccess({res})),
          catchError(error =>
              of(NewsActions.getLastAndViewedFailure({ error: error.message }))
    ))))
  );

  // GET NOTICE BY SLUG
  getNewBySlugEffect$ = createEffect(() => this.actions
  .pipe(
    ofType(NewsActions.getBySlug),
    concatMap((action) =>
      this.newsSrv.getBySlug(action.slug)
      .pipe(
        map(notice => NewsActions.getBySlugSuccess({notice})),
        catchError(error =>
            of(NewsActions.getBySlugFailure({ error: error.message }))
    ))))
  );

  // GET NOTICE BY CATEGORY
  getNewByCategoryEffect$ = createEffect(() => this.actions
  .pipe(
    ofType(NewsActions.getByCategory),
    concatMap((action) =>
      this.newsSrv.getByCategory(action.category)
      .pipe(
        map(news => NewsActions.getByCategorySuccess({news})),
        catchError(error =>
            of(NewsActions.getByCategoryFailure({ error: error.message }))
    ))))
  );

}
