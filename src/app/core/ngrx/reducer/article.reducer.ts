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
  on(ArticleActions.getArticleBySlug, (state, { slug }) => (
    { ...state, error: null, selected: state.articles.filter(x => x.slug === slug)[0] }))
);

export function reducer(state: AppState | undefined, action: Action) {
  console.log('State ', state);
  console.log('Action ', action);
  return featureReducer(state, action);
}
