import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromSearch from '../reducers/search.reducer';
import { getAppState } from '../reducers/reducers.index';

export const getSearchState = createSelector(
  getAppState,
  (state: AppState) => state.search
);

export const getSearchResult = createSelector(
  getSearchState, fromSearch.getResult
);

export const getSearchResultLoaded = createSelector(
  getSearchState, fromSearch.getResultLoaded
);

export const getResultSearched = createSelector(
  getSearchState, fromSearch.getResultSearched
);

export const getResultCount = createSelector(
  getSearchState, fromSearch.getResultCount
);

export const getRequest = createSelector(
  getSearchState, fromSearch.getRequest
);
