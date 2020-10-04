import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User, MostActive } from '@shared/interfaces/interfaces';

export interface UserState {
  user: User;
  users: User[];
  filtered: User[];
  loaded: boolean;
  mostActive: MostActive[];
  mostActiveLoaded: boolean;
  public: User;
  publicLoaded: boolean;
  last: User;
  lastLoaded: boolean;
  email: string;
  error: string;
}

export const inititalState: UserState = {
  user: null,
  users: [],
  filtered: [],
  loaded: false,
  mostActive: null,
  mostActiveLoaded: false,
  public: null,
  publicLoaded: false,
  last: null,
  lastLoaded: false,
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
      users,
      filtered: users
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
    // GET LAST USER
   on(UserActions.getLast, (state) => (
    { ...state, error: null }
  )),
  on(UserActions.getLastSuccess, (state, { user }) => (
    {
      ...state,
      last: user,
      lastLoaded: true,
      error: null
    }
  )),
  on(UserActions.getLastFailure, (state, { error }) => (
    { ...state, lastLoaded: false, error }
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
  // FILTER USERS
  on(UserActions.search, (state, { value }) => (
    {
      ...state,
      filtered: [...[...state.users].filter(u => u.name.match(new RegExp(value, 'i')))],
      error: null
    }
  )),
  // SORT USERS
  on(UserActions.sort, (state, { rol }) => (
    {
      ...state,
      filtered: [...[...state.users].filter(u => u.account.match(new RegExp(rol, 'i')))],
      error: null
    }
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
export const getUsers = (state: UserState) => state.users;
export const getUsersLoaded = (state: UserState) => state.loaded;
export const getMostActive = (state: UserState) => state.mostActive;
export const getMostActiveLoaded = (state: UserState) => state.mostActiveLoaded;
export const getUserByName = (state: UserState) => state.public;
export const getUserByNameLoaded = (state: UserState) => state.publicLoaded;
export const getLastUser = (state: UserState) => state.last;
export const getLastUserLoaded = (state: UserState) => state.lastLoaded;
export const getEmail = (state: UserState) => state.email;
export const getFiltered = (state: UserState) => state.filtered;
