import { createReducer, on, Action } from '@ngrx/store';
import * as ArticleActions from '../actions/article.actions';
import { Article } from '@app/shared/interfaces/interfaces';

export interface ArticleState {
  articles: Article[];
  last: Article[];
  slug: Article;
  loaded: boolean;
  full: boolean;
  error: string;
  count: number;
}

export const inititalState: ArticleState = {
  articles: [],
  last: [],
  slug: null,
  loaded: false,
  full: false,
  error: null,
  count: 0
};

const featureReducer = createReducer(
  inititalState,
  // GET ARTICLES
  on(ArticleActions.getArticles, state => (
    { ...state, loaded: false, error: null }
  )),
  on(ArticleActions.getArticlesSuccess, (state, { articles }) => (
    {
      ...state,
      loaded: true,
      error: null,
      articles: [...state.articles, ...articles],
      full: completed(articles)
    }
  )),
  on(ArticleActions.GetArticlesFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // GET LAST ARTICLES
  on(ArticleActions.getLastArticles, state => {
    return ({ ...state, loaded: false, error: null });
  }),
  on(ArticleActions.getLastArticlesSuccess, (state, { articles }) => (
    {
      ...state,
      loaded: true,
      error: null,
      last: articles
    }
  )),
  on(ArticleActions.GetLastArticlesFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // ARTICLE BY SLUG
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
  // RESET
  on(ArticleActions.ResetArticles, (state) => (
    { ...state, loaded: true, error: null, articles: [] }
  )),
  on(ArticleActions.ResetSlug, (state) => (
    { ...state, loaded: true, error: null, slug: null }
  )),
);

export function reducer(state: ArticleState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getAll = (state: ArticleState) => state.articles;
export const getLoaded = (state: ArticleState) => state.loaded;
export const getFull = (state: ArticleState) => state.full;
export const getSlug = (state: ArticleState) => state.slug;
export const getLast = (state: ArticleState) => state.last;

function completed(articles: Article[]): boolean {
  return articles.length === 0 ? true : false;
}
