import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromSearch from '../reducers/search.reducer';
import { getAppState } from '../reducers/reducers.index';

export const getSearchState = createSelector(
  getAppState,
  (state: AppState) => state.search
);

export const getResult = createSelector(
  getSearchState, fromSearch.getResult
);

export const getResultLoaded = createSelector(
  getSearchState, fromSearch.getResultLoaded
);

export const getCount = createSelector(
  getSearchState, fromSearch.getResultCount
);

export const getRequest = createSelector(
  getSearchState, fromSearch.getRequest
);

export const getSearched = createSelector(
  getSearchState, fromSearch.getResultSearched
);
