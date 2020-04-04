import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromUsers from '../reducers/user.reducer';
import { getAppState } from '../reducers/reducers.index';

export const getUserState = createSelector(
  getAppState,
  (state: AppState) => state.user
);

export const getUser = createSelector(
  getUserState, fromUsers.getUser
);

export const getAllUsers = createSelector(
  getUserState, fromUsers.getAllUsers
);

export const getAllUsersLoaded = createSelector(
  getUserState, fromUsers.getAllUsersLoaded
);

export const getMostActive = createSelector(
  getUserState, fromUsers.getMostActive
);

export const getMostActiveLoaded = createSelector(
  getUserState, fromUsers.getMostActiveLoaded
);

export const getUserEmail = createSelector(
  getUserState, fromUsers.getEmail
);

export const getUserByName = createSelector(
  getUserState, fromUsers.getUserByName
);

export const getUserByNameLoaded = createSelector(
  getUserState, fromUsers.getUserByNameLoaded
);

export const getInteractionByUser = createSelector(
  getUserState, fromUsers.getInteractionByUser
);

export const getInteractionByUserLoaded = createSelector(
  getUserState, fromUsers.getInteractionByUserLoaded
);


