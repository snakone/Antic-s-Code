import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as InterActions from './interaction.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { InteractionService } from '@core/services/interaction/interaction.service';

@Injectable()

export class InterEffects {

  constructor(
    private actions: Actions,
    private interactionSrv: InteractionService
  ) { }

  // GET INTERACTION BY USER
  getInteractionByUserEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(InterActions.getByUser),
      concatMap(() =>
      this.interactionSrv.getByUser()
        .pipe(
          map(interaction => InterActions.getByUserSuccess({ interaction })),
          catchError(error =>
              of(InterActions.getByUserFailure({ error: error.message }))
    ))))
  );

}
