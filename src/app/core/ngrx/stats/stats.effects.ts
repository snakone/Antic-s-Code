import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as StatsActions from './stats.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
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

}

