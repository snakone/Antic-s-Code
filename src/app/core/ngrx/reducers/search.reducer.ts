import { createReducer, on, Action } from '@ngrx/store';
import * as SearchActions from '../actions/search.actions';
import { SearchResponse, SearchRequest } from '@shared/interfaces/interfaces';

export interface SearchState {
  result: SearchResponse;
  request: SearchRequest;
  loaded: boolean;
  error: string;
  searched: boolean;
  count: number;
}

export const inititalState: SearchState = {
  result: null,
  request: null,
  loaded: false,
  error: null,
  searched: false,
  count: 0
};

const featureReducer = createReducer(
  inititalState,
  // SEARCH CONTENT
  on(SearchActions.searchContent, (state, { request }) => (
    {
      ...state,
      loaded: false,
      error: null,
      result: { ok: false },
      searched: true,
      request
    }
  )),
  on(SearchActions.searchContentSuccess, (state, { result }) => (
    {
      ...state,
      loaded: true,
      error: null,
      result,
      count: result.articles.length
    }
  )),
  on(SearchActions.searchContentFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // RESET
  on(SearchActions.resetSearch, (state) => (
    {
      ...state,
      loaded: false,
      error: null,
      result: { ok: false },
      count: 0,
      searched: false,
      request: null
    }
  )),
);

export const getResult = (state: SearchState) => state.result;
export const getResultLoaded = (state: SearchState) => state.loaded;
export const getResultSearched = (state: SearchState) => state.searched;
export const getResultCount = (state: SearchState) => state.count;
export const getRequest = (state: SearchState) => state.request;

export function reducer(state: SearchState | undefined, action: Action) {
  return featureReducer(state, action);
}
