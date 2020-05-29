import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as UserActions from '../actions/user.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { StorageService } from '@core/storage/storage.service';
import { UserService } from '@core/services/user/user.service';

@Injectable()

export class UserEffects {

  constructor(
    private actions: Actions,
    private userSrv: UserService,
    private ls: StorageService
  ) { }

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

  // GET MOST ACTIVE USERS
  getMostActiveUsersEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.getMostActive),
      concatMap(() =>
      this.userSrv.getMostActive()
        .pipe(
          map(users => UserActions.getMostActiveSuccess({ active: users })),
          catchError(error =>
              of(UserActions.getMostActiveFailure({ error: error.message }))
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
          map(res => UserActions.refreshTokenSuccess({ user: res.user })),
          catchError(error =>
              of(UserActions.refreshTokenFailure({ error: error.message }))
    ))))
  );

}
