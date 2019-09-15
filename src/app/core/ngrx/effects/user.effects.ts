import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as UserActions from '../actions/user.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user/user.service';
import { StorageService } from '@app/core/storage/storage.service';

@Injectable()

export class UserEffects {
  constructor(private actions: Actions,
              private user: UserService,
              private ls: StorageService) { }
  // SET USER
  setUserEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.setUser),
      concatMap((action) =>
         of(UserActions.setUserSuccess({user: action.user}))),
          catchError(error =>
              of(UserActions.setUserFailure({ error: error.message }))
        )
      )
  );

  // VERIFY TOKEN
  verifyTokenEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.verifyToken),
      concatMap(() =>
      this.user.verifyToken()
        .pipe(
          map(res => UserActions.verifyTokenSuccess({user: res.user})),
          catchError(error =>
              of(UserActions.verifyTokenFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // REFRESH TOKEN
  refreshTokenEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.refreshToken),
      concatMap((action) =>
      this.user.refreshToken(action.id)
        .pipe(
          map(res => {
            if (res.ok) {
              this.ls.setKey('token', res.token);
              return UserActions.refreshTokenSuccess({ user: res.user });
            }
          }),
          catchError(error =>
              of(UserActions.refreshTokenFailure({ error: error.message }))
          )
        )
      )
    )
  );

}
