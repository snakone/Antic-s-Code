import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as AppActions from './../actions/app.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { DataService } from '@app/core/services/services.index';

@Injectable()

export class AppEffects {
  constructor(private actions: Actions,
              private service: DataService) { }

  loadRequestEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(AppActions.getData),
      concatMap(() =>
      this.service.getData()
        .pipe(
          map(res => AppActions.getDataSuccess({data: res})),
          catchError(error =>
              of(AppActions.GetDataFailure({ error: error.message }))
            )
          )
      )
    )
);
}
