import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as StatsActions from './stats.actions';
import { map, concatMap, catchError, tap } from 'rxjs/operators';
import { UserService } from '@core/services/user/user.service';

@Injectable()

export class StatsEffects {

  constructor(
    private actions: Actions,
    private userSrv: UserService
  ) { }

  // GET STATS
  getStatsEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(StatsActions.get),
      concatMap(() =>
      this.userSrv.getStats()
        .pipe(
          map(stats => StatsActions.getSuccess({ stats })),
          catchError(error =>
              of(StatsActions.getFailure({ error: error.message }))
    ))))
  );

  // GET USER STATS
  getStatsbyUserEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(StatsActions.getByUser),
      concatMap((action) =>
      this.userSrv.getStatsByUser(action.id)
        .pipe(
          map(stats => StatsActions.getByUserSuccess({ stats })),
          catchError(error =>
              of(StatsActions.getByUserFailure({ error: error.message }))
    ))))
  );

  // GET USER STATS PUBLIC
  getStatsbyUserPublicEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(StatsActions.getByUserPublic),
      concatMap((action) =>
      this.userSrv.getStatsByUser(action.id)
        .pipe(
          map(stats => StatsActions.getByUserPublicSuccess({ stats })),
          catchError(error =>
              of(StatsActions.getByUserPublicFailure({ error: error.message }))
    ))))
  );

}

