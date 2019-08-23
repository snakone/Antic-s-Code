import { createReducer, on, Action } from '@ngrx/store';
import * as AppActions from './../actions/app.actions';
import { AppState, State } from '@app/app.config';

const featureReducer = createReducer(
  State,
  on(AppActions.getData, state => (
    { ...state, loaded: false, error: null }
  )),
  on(AppActions.getDataSuccess, (state, { data }) => (
    { ...state, loaded: true, error: null, articles: data.articles, categories: data.categories }
  )),
  on(AppActions.GetDataFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  on(AppActions.SeachArticles, (state, { value }) => (
    { ...state, loaded: true, error: null, search: value }
  ))
);

export function reducer(state: AppState | undefined, action: Action) {
  return featureReducer(state, action);
}
