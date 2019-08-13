import { createReducer, on, Action } from '@ngrx/store';
import * as ArticleActions from './../actions/article.actions';
import { AppState, State } from '@app/app.config';

const featureReducer = createReducer(
  State,
  on(ArticleActions.getArticles, state => (
    { ...state, loading: true, error: null }
  )),
  on(ArticleActions.getArticlesSuccess, (state, { articles }) => (
    { ...state, loading: false, error: null, articles }
  )),
  on(ArticleActions.GetArticlesFailure, (state, { error }) => (
    { ...state, loading: false, error }
  )),
  on(ArticleActions.SeachArticles, (state, { value }) => (
    { ...state, loading: false, error: null, search: value }
  ))
);

export function reducer(state: AppState | undefined, action: Action) {
  return featureReducer(state, action);
}
