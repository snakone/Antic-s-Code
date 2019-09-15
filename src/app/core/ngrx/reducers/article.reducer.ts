import { createReducer, on, Action } from '@ngrx/store';
import * as ArticleActions from '../actions/article.actions';
import { Article } from '@app/shared/interfaces/interfaces';

export interface ArticleState {
  articles: Article[];
  articlesLoaded: boolean;
  last: Article[];
  lastLoaded: boolean;
  liked: Article[];
  likedLoaded: boolean;
  count: number;
  countLoaded: boolean;
  slug: Article;
  full: boolean;
  error: string;
}

export const inititalState: ArticleState = {
  articles: [],
  articlesLoaded: false,
  last: [],
  lastLoaded: false,
  liked: [],
  likedLoaded: false,
  count: 0,
  countLoaded: false,
  slug: null,
  full: false,
  error: null,
};

const featureReducer = createReducer(
  inititalState,
  // GET ARTICLES
  on(ArticleActions.getArticles, state => (
    { ...state, articlesLoaded: false, error: null }
  )),
  on(ArticleActions.getArticlesSuccess, (state, { articles }) => (
    {
      ...state,
      articlesLoaded: true,
      error: null,
      articles: [...state.articles, ...articles],
      full: completed(articles)
    }
  )),
  on(ArticleActions.getArticlesFailure, (state, { error }) => (
    { ...state, articlesLoaded: false, error }
  )),
  // GET ARTICLES COUNT
  on(ArticleActions.getArticlesCount, state => (
    { ...state, countLoaded: false, error: null }
  )),
  on(ArticleActions.getArticlesCountSuccess, (state, { count }) => (
    {
      ...state,
      countLoaded: true,
      error: null,
      count
    }
  )),
  on(ArticleActions.getArticlesCountFailure, (state, { error }) => (
    { ...state, countLoaded: false, error }
  )),
  // GET LAST ARTICLES
  on(ArticleActions.getLastArticles, state => (
    { ...state, lastLoaded: false, error: null }
  )),
  on(ArticleActions.getLastArticlesSuccess, (state, { articles }) => (
    {
      ...state,
      lastLoaded: true,
      error: null,
      last: articles
    }
  )),
  on(ArticleActions.getLastArticlesFailure, state => (
    { ...state, lastLoaded: false, error: null }
  )),
  // GET MOST LIKED ARTICLES
  on(ArticleActions.getMostLikedArticles, state => (
    { ...state, likedLoaded: false, error: null }
  )),
  on(ArticleActions.getMostLikedArticlesSuccess, (state, { articles }) => (
    {
      ...state,
      likedLoaded: true,
      error: null,
      liked: articles
    }
  )),
  on(ArticleActions.getMostLikedArticlesFailure, (state, { error }) => (
    { ...state, likedLoaded: false, error }
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
  on(ArticleActions.resetArticles, (state) => (
    { ...state, loaded: true, error: null, articles: [] }
  )),
  on(ArticleActions.resetSlug, (state) => (
    { ...state, loaded: true, error: null, slug: null }
  )),
);

export function reducer(state: ArticleState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getArticles = (state: ArticleState) => state.articles;
export const getArticlesLoaded = (state: ArticleState) => state.articlesLoaded;
export const getFull = (state: ArticleState) => state.full;
export const getSlug = (state: ArticleState) => state.slug;
export const getLast = (state: ArticleState) => state.last;
export const getLastLoaded = (state: ArticleState) => state.lastLoaded;
export const getMostLiked = (state: ArticleState) => state.liked;
export const getMostLikedLoaded = (state: ArticleState) => state.liked;
export const getCount = (state: ArticleState) => state.count;
export const getCountLoaded = (state: ArticleState) => state.count;
export const getHomeLoaded = (state: ArticleState) => {
  return state.lastLoaded && state.likedLoaded && state.countLoaded ? true : false;
};

function completed(articles: Article[]): boolean {
  return articles.length === 0 ? true : false;
}
