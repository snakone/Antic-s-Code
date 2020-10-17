import { createSelector } from '@ngrx/store';
import * as fromStats from './stats.reducer';
import { getAppState } from '../ngrx.index';
import { AppState } from '@app/app.config';

export const getStatsState = createSelector(
  getAppState,
  (state: AppState) => state.stats
);

export const getStats = createSelector(
  getStatsState, fromStats.getStats
);

export const getStatsLoaded = createSelector(
  getStatsState, fromStats.getStatsLoaded
);

export const getTest = createSelector(
  getStatsState, fromStats.getTest
);

export const getByUser = createSelector(
  getStatsState, fromStats.getByUser
);

export const getByUserPublic = createSelector(
  getStatsState, fromStats.getByUserPublic
);

export const getPublicLoaded = createSelector(
  getStatsState, fromStats.getPublicLoaded
);


