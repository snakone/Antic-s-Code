import { createReducer, on, Action } from '@ngrx/store';
import * as ArticleActions from './../actions/article.actions';
import { AppState, State } from '@app/app.config';

const featureReducer = createReducer(
  State,
  on(ArticleActions.getArticles, state => (
    { ...state, loaded: false, error: null }
  )),
  on(ArticleActions.getArticlesSuccess, (state, { articles }) => (
    { ...state, loaded: true, error: null, articles }
  )),
  on(ArticleActions.GetArticlesFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  on(ArticleActions.SeachArticles, (state, { value }) => (
    { ...state, loaded: true, error: null, search: value }
  ))
);

export function reducer(state: AppState | undefined, action: Action) {
  return featureReducer(state, action);
}
