import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromUsers from '../reducers/user.reducer';
import { getAppState } from '../reducers/reducers.index';

export const getUserState = createSelector(
  getAppState,
  (state: AppState) => state.user
);

export const get = createSelector(
  getUserState, fromUsers.getUser
);

export const getAll = createSelector(
  getUserState, fromUsers.getAllUsers
);

export const getAllLoaded = createSelector(
  getUserState, fromUsers.getAllUsersLoaded
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


