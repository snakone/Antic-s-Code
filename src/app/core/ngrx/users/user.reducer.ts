import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User, MostActive } from '@shared/interfaces/interfaces';

export interface UserState {
  user: User;
  users: User[];
  loaded: boolean;
  mostActive: MostActive[];
  mostActiveLoaded: boolean;
  public: User;
  publicLoaded: boolean;
  email: string;
  error: string;
}

export const inititalState: UserState = {
  user: null,
  users: [],
  loaded: false,
  mostActive: null,
  mostActiveLoaded: false,
  public: null,
  publicLoaded: false,
  email: null,
  error: null
};

const featureReducer = createReducer(
  inititalState,
  // SET USER
  on(UserActions.set, (state) => (
      { ...state, error: null }
  )),
  on(UserActions.setSuccess, (state, { user }) => (
    {...state, error: null, user }
  )),
  on(UserActions.setFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // GET ALL USERS
  on(UserActions.get, (state) => (
    { ...state, loaded: false, error: null }
  )),
  on(UserActions.getSuccess, (state, { users }) => (
    {
      ...state,
      loaded: true,
      error: null,
      users
    }
  )),
  on(UserActions.getFailure, (state, { error }) => (
    { ...state, loaded: false, error, users: null }
  )),
   // GET USER BY NAME
   on(UserActions.getByName, (state, { name }) => (
    { ...state, publicLoaded: false, error: null }
  )),
  on(UserActions.getByNameSuccess, (state, { user }) => (
    {
      ...state,
      publicLoaded: true,
      error: null,
      public: user
    }
  )),
  on(UserActions.getByNameFailure, (state, { error }) => (
    { ...state, publicLoaded: false, error }
  )),
  // GET MOST ACTIVE USERS
  on(UserActions.getMostActive, (state) => (
   { ...state, mostActiveLoaded: false, error: null }
 )),
 on(UserActions.getMostActiveSuccess, (state, { active }) => (
   {
     ...state,
     mostActive: active,
     mostActiveLoaded: true,
     error: null
   }
 )),
 on(UserActions.getMostActiveFailure, (state, { error }) => (
   { ...state, mostActiveLoaded: false, error }
 )),
  // SET USER EMAIL
  on(UserActions.setEmail, (state) => (
    { ...state, error: null }
  )),
  on(UserActions.setEmailSuccess, (state, { email }) => (
    { ...state, error: null, email }
  )),
  on(UserActions.setEmailFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // VERIFY TOKEN
  on(UserActions.verifyToken, (state) => (
    { ...state, error: null }
  )),
  on(UserActions.verifyTokenSuccess, (state, { user }) => (
    { ...state, error: null, user }
  )),
  on(UserActions.verifyTokenFailure, (state, { error }) => (
    { ...state, error, user: null }
  )),
  // REFRESH TOKEN
  on(UserActions.refreshToken, (state) => (
    { ...state, loaded: false, error: null }
  )),
  on(UserActions.refreshTokenSuccess, (state, { user }) => (
    { ...state, error: null, user }
  )),
  on(UserActions.refreshTokenFailure, (state, { error }) => (
    { ...state, loaded: false, error, user: null }
  )),
  // USER LOG OUT
  on(UserActions.userLogOut, (state) => (
    { ...state, error: null, user: null }
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
export const getAllUsers = (state: UserState) => state.users;
export const getMostActive = (state: UserState) => state.mostActive;
export const getMostActiveLoaded = (state: UserState) => state.mostActiveLoaded;
export const getUserByName = (state: UserState) => state.public;
export const getUserByNameLoaded = (state: UserState) => state.publicLoaded;
export const getAllUsersLoaded = (state: UserState) => state.loaded;
export const getEmail = (state: UserState) => state.email;
