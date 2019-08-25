import { createReducer, on, Action } from '@ngrx/store';
import * as ArticleActions from '../actions/article.actions';
import { Article } from '@app/shared/interfaces/interfaces';

export interface ArticleState {
  articles: Article[];
  slug: Article;
  loaded: boolean;
  full: boolean;
  error: string;
  search: Article[];
}

export const inititalState: ArticleState = {
  articles: [],
  slug: null,
  loaded: false,
  full: false,
  error: null,
  search: []
};

const featureReducer = createReducer(
  inititalState,
  on(ArticleActions.getArticles, state => (
    { ...state, loaded: false, error: null }
  )),
  on(ArticleActions.getArticlesSuccess, (state, { articles }) => (
    {
      ...state,
      loaded: true,
      error: null,
      articles: [...state.articles, ...articles],
      search: [...state.articles, ...articles],
      full: completed(articles)
    }
  )),
  on(ArticleActions.GetArticlesFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),


  on(ArticleActions.getArticleBySlug, (state, { slug }) => (
    { ...state, loaded: false, error: null }
  )),
  on(ArticleActions.getArticleBySlugSuccess, (state, { article }) => (
    {
      ...state,
      loaded: true,
      error: null,
      slug: article
    }
  )),
  on(ArticleActions.GetArticlesFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),


  on(ArticleActions.SeachArticles, (state, { value }) => (
    { ...state, loaded: false, error: null }
  )),
  on(ArticleActions.SeachArticlesSuccess, (state, { articles }) => (
    {
      ...state,
      loaded: true,
      error: null,
      search: articles
    }
  )),
  on(ArticleActions.SeachArticlesFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  ))
);

export function reducer(state: ArticleState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getAll = (state: ArticleState) => state.articles;
export const getLoaded = (state: ArticleState) => state.loaded;
export const getSearch = (state: ArticleState) => state.search;
export const getFull = (state: ArticleState) => state.full;
export const getSlug = (state: ArticleState) => state.slug;

function completed(articles: Article[]): boolean {
  return articles.length === 0 ? true : false;
}
