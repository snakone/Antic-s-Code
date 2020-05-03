import { createReducer, on, Action } from '@ngrx/store';
import * as SearchActions from '../actions/search.actions';
import { SearchRequest, Article } from '@shared/interfaces/interfaces';

export interface SearchState {
  result: Article[];
  request: SearchRequest;
  loaded: boolean;
  error: string;
  count: number;
  searched: boolean;
}

export const inititalState: SearchState = {
  result: [],
  request: null,
  loaded: false,
  error: null,
  count: 0,
  searched: false
};

const featureReducer = createReducer(
  inititalState,
  // SEARCH CONTENT
  on(SearchActions.searchContent, (state, { request }) => (
    {
      ...state,
      error: null,
      result: null,
      request,
      searched: true
    }
  )),
  on(SearchActions.searchContentSuccess, (state, { result }) => (
    {
      ...state,
      loaded: true,
      error: null,
      result,
      count: result.length
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
      result: null,
      count: 0,
      request: null,
      searched: false
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
