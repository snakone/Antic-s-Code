import { createReducer, on, Action } from '@ngrx/store';
import * as ArticleActions from '../actions/article.actions';
import { Article } from '@app/shared/interfaces/interfaces';

export interface ArticleState {
  articles: Article[];
  last: Article[];
  liked: Article[];
  slug: Article;
  loaded: boolean;
  full: boolean;
  error: string;
  count: number;
}

export const inititalState: ArticleState = {
  articles: [],
  last: [],
  liked: [],
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
  on(ArticleActions.getArticlesFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // GET ARTICLES COUNT
  on(ArticleActions.getArticlesCount, state => (
    { ...state, loaded: false, error: null }
  )),
  on(ArticleActions.getArticlesCountSuccess, (state, { count }) => (
    {
      ...state,
      loaded: true,
      error: null,
      count
    }
  )),
  on(ArticleActions.getArticlesCountFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // GET LAST ARTICLES
  on(ArticleActions.getLastArticles, state => (
    { ...state, loaded: false, error: null }
  )),
  on(ArticleActions.getLastArticlesSuccess, (state, { articles }) => (
    {
      ...state,
      loaded: true,
      error: null,
      last: articles
    }
  )),
  on(ArticleActions.getLastArticlesFailure, state => (
    { ...state, loaded: false, error: null }
  )),
  // GET MOST LIKED ARTICLES
  on(ArticleActions.getMostLikedArticles, state => (
    { ...state, loaded: false, error: null }
  )),
  on(ArticleActions.getMostLikedArticlesSuccess, (state, { articles }) => (
    {
      ...state,
      loaded: true,
      error: null,
      liked: articles
    }
  )),
  on(ArticleActions.getMostLikedArticlesFailure, (state, { error }) => (
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
  on(ArticleActions.getArticleBySlugFailure, (state, { error }) => (
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

export const getArticles = (state: ArticleState) => state.articles;
export const getLoaded = (state: ArticleState) => state.loaded;
export const getFull = (state: ArticleState) => state.full;
export const getSlug = (state: ArticleState) => state.slug;
export const getLast = (state: ArticleState) => state.last;
export const getMostLiked = (state: ArticleState) => state.liked;
export const getCount = (state: ArticleState) => state.count;

function completed(articles: Article[]): boolean {
  return articles.length === 0 ? true : false;
}
