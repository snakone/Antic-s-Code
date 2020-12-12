import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as UserActions from './user.actions';
import * as StatsActions from '../stats/stats.actions';
import { map, concatMap, catchError, tap } from 'rxjs/operators';
import { UserService } from '@core/services/user/user.service';

@Injectable()

export class UserEffects {

  constructor(
    private actions: Actions,
    private userSrv: UserService
  ) { }

  // GET ALL USER
  getUsersEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.get),
      concatMap(() =>
      this.userSrv.getUsers()
      .pipe(
        map(users => UserActions.getSuccess({ users })),
          catchError(error =>
              of(UserActions.getFailure({ error: error.message }))
    ))))
  );

  // SET USER
  setUserEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.set),
      concatMap((action) =>
         of(UserActions.setSuccess({user: action.user}))),
          catchError(error =>
              of(UserActions.setFailure({ error: error.message }))
    ))
  );

  // GET USER BY NAME
  getUserByNameEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.getByName),
      concatMap((action) =>
      this.userSrv.getByName(action.name)
        .pipe(
          map(user => UserActions.getByNameSuccess({ user })),
          catchError(error =>
              of(UserActions.getByNameFailure({ error: error.message }))
    ))))
  );

  // GET ALL USER
  getLastUserEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.getLast),
      concatMap(() =>
      this.userSrv.getLast()
      .pipe(
        map(user => UserActions.getLastSuccess({ user })),
          catchError(error =>
              of(UserActions.getLastFailure({ error: error.message }))
    ))))
  );

  // SET USER EMAIL
  setUserEmailEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.setEmail),
      concatMap((action) =>
         of(UserActions.setEmailSuccess({email: action.email}))),
          catchError(error =>
              of(UserActions.setEmailFailure({ error: error.message }))
    ))
  );

  // VERIFY TOKEN
  verifyTokenEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.verifyToken),
      concatMap(() =>
      this.userSrv.verifyToken()
        .pipe(
          map(user => UserActions.verifyTokenSuccess({ user })),
          catchError(error =>
              of(UserActions.verifyTokenFailure({ error: error.message }))
    ))))
  );

  // REFRESH TOKEN
  refreshTokenEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.refreshToken),
      concatMap((action) =>
      this.userSrv.refreshToken(action.id)
        .pipe(
          map(user => UserActions.refreshTokenSuccess({ user })),
          catchError(error =>
              of(UserActions.refreshTokenFailure({ error: error.message }))
    ))))
  );

  // RESET STAT ON LOGOUT
  resetStatsEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.userLogOut),
      concatMap(_ => of(StatsActions.reset()))
    )
  );

  // GET STATS
  getStatsOnVerifyEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(
        UserActions.verifyTokenSuccess,
        UserActions.refreshTokenSuccess
      ),
      concatMap((action) =>
       of(StatsActions.getByUser({id: action.user._id}))
      )
    )
  );

  // GET PUBLIC STATS
  getStatsPublicEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.getByNameSuccess),
      concatMap((action) =>
       of(StatsActions.getByUserPublic({id: action.user._id}))
      )
    )
  );

  // RESET STAT PUBLIC
  resetStatsPublicEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.resetUserName),
      concatMap(_ => of(StatsActions.resetPublic()))
    )
  );

}
