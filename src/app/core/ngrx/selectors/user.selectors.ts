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

export const getUserEmail = createSelector(
  getUserState, fromUsers.getEmail
);

export const getUserByName = createSelector(
  getUserState, fromUsers.getUserByName
);

export const getUserByNameLoaded = createSelector(
  getUserState, fromUsers.getUserByNameLoaded
);


