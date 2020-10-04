import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromUsers from './user.reducer';
import { getAppState } from '../ngrx.index';

export const getUserState = createSelector(
  getAppState,
  (state: AppState) => state.users
);

export const get = createSelector(
  getUserState, fromUsers.getUser
);

export const getUsers = createSelector(
  getUserState, fromUsers.getUsers
);

export const getUsersLoaded = createSelector(
  getUserState, fromUsers.getUsersLoaded
);

export const getMostActive = createSelector(
  getUserState, fromUsers.getMostActive
);

export const getMostActiveLoaded = createSelector(
  getUserState, fromUsers.getMostActiveLoaded
);

export const getEmail = createSelector(
  getUserState, fromUsers.getEmail
);

export const getByName = createSelector(
  getUserState, fromUsers.getUserByName
);

export const getByNameLoaded = createSelector(
  getUserState, fromUsers.getUserByNameLoaded
);

export const getLast = createSelector(
  getUserState, fromUsers.getLastUser
);

export const getLastLoaded = createSelector(
  getUserState, fromUsers.getLastUserLoaded
);

export const getFiltered = createSelector(
  getUserState, fromUsers.getFiltered
);


