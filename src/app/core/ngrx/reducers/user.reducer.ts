import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User, Interaction, MostActive } from '@app/shared/interfaces/interfaces';

export interface UserState {
  user: User;
  users: User[];
  mostActive: MostActive[];
  mostActiveLoaded: boolean;
  public: User;
  email: string;
  loaded: boolean;
  publicLoaded: boolean;
  usersLoaded: boolean;
  error: string;
  interaction: Interaction[];
  interactionLoaded: boolean;
}

export const inititalState: UserState = {
  user: null,
  users: null,
  mostActive: null,
  mostActiveLoaded: false,
  public: null,
  email: null,
  loaded: false,
  publicLoaded: false,
  usersLoaded: false,
  error: null,
  interaction: null,
  interactionLoaded: false
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
  // GET ALL USERS
  on(UserActions.getAllUsers, (state) => (
    {
      ...state,
      usersLoaded: false,
      error: null
    }
  )),
  on(UserActions.getAllUsersSuccess, (state, { users }) => (
    {
      ...state,
      usersLoaded: true,
      error: null,
      users
    }
  )),
  on(UserActions.getAllUsersFailure, (state, { error }) => (
    { ...state, usersLoaded: false, error, users: null }
  )),
   // GET USER BY NAME
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
   // GET INTERACTION BY USER
  on(UserActions.getInteractionByUser, (state) => (
  { ...state, interactionLoaded: false, error: null }
  )),
  on(UserActions.getInteractionByUserSuccess, (state, { interaction }) => (
    {
      ...state,
      error: null,
      interaction,
      interactionLoaded: true
    }
  )),
  on(UserActions.getInteractionByUserFailure, (state, { error }) => (
    { ...state, interactionLoaded: true, error }
  )),
  // GET MOST ACTIVE USERS
  on(UserActions.getMostActiveUsers, (state) => (
   { ...state, mostActiveLoaded: false, error: null }
 )),
 on(UserActions.getMostActiveUsersSuccess, (state, { active }) => (
   {
     ...state,
     mostActive: active,
     mostActiveLoaded: true,
     error: null
   }
 )),
 on(UserActions.getMostActiveUsersFailure, (state, { error }) => (
   { ...state, mostActiveLoaded: false, error }
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
  )),
  on(UserActions.resetInteraction, (state) => (
    {
      ...state,
      interactionLoaded: false,
      error: null,
      interaction: null
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
export const getInteractionByUser = (state: UserState) => state.interaction;
export const getAllUsersLoaded = (state: UserState) => state.usersLoaded;
export const getInteractionByUserLoaded = (state: UserState) => state.interactionLoaded;
export const getEmail = (state: UserState) => state.email;
