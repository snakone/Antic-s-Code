import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from '@app/shared/interfaces/interfaces';

export interface UserState {
  user: User;
  public: User;
  email: string;
  loaded: boolean;
  publicLoaded: boolean;
  error: string;
}

export const inititalState: UserState = {
  user: null,
  public: null,
  email: null,
  loaded: false,
  publicLoaded: false,
  error: null
};

const featureReducer = createReducer(
  inititalState,
  // SET USER
  on(UserActions.setUser, (state, { user }) => {
    if (!user.profile) { user.profile = {}; }
    return (
      {
        ...state,
        loaded: false,
        error: null,
        user
      }
    ); }),
  on(UserActions.setUserSuccess, (state) => (
    {
      ...state,
      loaded: true,
      error: null
    }
  )),
   // USER BY NAME
   on(UserActions.getUserByName, (state, { name }) => (
    { ...state, publicLoaded: false, error: null }
  )),
  on(UserActions.getUserByNameSuccess, (state, { user }) => (
    {
      ...state,
      publicLoaded: true,
      error: null,
      public: user
    }
  )),
  on(UserActions.getUserByNameFailure, (state, { error }) => (
    { ...state, publicLoaded: false, error }
  )),
  // SET USER EMAIL
  on(UserActions.setUserEmail, (state, { email }) => (
    {
      ...state,
      loaded: false,
      error: null
    }
  )),
  on(UserActions.setUserEmailSuccess, (state, { email }) => (
    {
      ...state,
      loaded: true,
      error: null,
      email
    }
  )),
  on(UserActions.setUserEmailFailure, (state, { error }) => (
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
  )),
  // RESET
  on(UserActions.resetUserName, (state) => (
    {
      ...state,
      loaded: false,
      error: null,
      public: null
    }
  ))
);

export function reducer(state: UserState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getUser = (state: UserState) => state.user;
export const getUserByName = (state: UserState) => state.public;
export const getUserByNameLoaded = (state: UserState) => state.publicLoaded;
export const getEmail = (state: UserState) => state.email;
