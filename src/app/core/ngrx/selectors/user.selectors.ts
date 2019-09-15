import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromUser from '../reducers/user.reducer';
import { getAppState } from '../reducers/reducers.index';

export const getUserState = createSelector(
  getAppState,
  (state: AppState) => state.user
);

export const getUser = createSelector(
  getUserState, fromUser.getUser
);
