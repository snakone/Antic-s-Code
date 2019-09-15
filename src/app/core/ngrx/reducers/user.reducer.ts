import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from '@app/shared/interfaces/interfaces';

export interface UserState {
  user: User;
  loaded: boolean;
  error: string;
}

export const inititalState: UserState = {
  user: null,
  loaded: false,
  error: null
};

const featureReducer = createReducer(
  inititalState,
  // SET USER
  on(UserActions.setUser, (state, { user }) => (
    {
      ...state,
      loaded: false,
      error: null,
      user
    }
  )),
  on(UserActions.setUserSuccess, (state) => (
    {
      ...state,
      loaded: true,
      error: null
    }
  )),
  on(UserActions.setUserFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // VERIFY TOKEN
  on(UserActions.verifyToken, (state) => (
    {
      ...state,
      loaded: false,
      error: null
    }
  )),
  on(UserActions.verifyTokenSuccess, (state, { user }) => (
    {
      ...state,
      loaded: true,
      error: null,
      user
    }
  )),
  on(UserActions.verifyTokenFailure, (state, { error }) => (
    { ...state, loaded: false, error, user: null }
  )),
  // REFRESH TOKEN
  on(UserActions.refreshToken, (state, { id }) => (
    {
      ...state,
      loaded: false,
      error: null
    }
  )),
  on(UserActions.refreshTokenSuccess, (state, { user }) => (
    {
      ...state,
      loaded: true,
      error: null,
      user
    }
  )),
  on(UserActions.refreshTokenFailure, (state, { error }) => (
    { ...state, loaded: false, error, user: null }
  )),
  // USER LOG OUT
  on(UserActions.userLogOut, (state) => (
    {
      ...state,
      loaded: true,
      error: null,
      user: null
    }
  ))
);

export function reducer(state: UserState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getUser = (state: UserState) => state.user;
