import { createReducer, on, Action } from '@ngrx/store';
import * as ArticleActions from '../actions/article.actions';
import { Article } from '@app/shared/interfaces/interfaces';

export interface ArticleState {
  articles: Article[];
  articlesLoaded: boolean;
  articlesByUser: Article[];
  articlesByUserLoaded: boolean;
  categoryCount: object;
  categoryCountLoaded: boolean;
  last: Article[];
  lastLoaded: boolean;
  liked: Article[];
  likedLoaded: boolean;
  count: number;
  countLoaded: boolean;
  slug: Article;
  slugLoaded: boolean;
  full: boolean;
  error: string;
}

export const inititalState: ArticleState = {
  articles: [],
  articlesLoaded: false,
  articlesByUser: null,
  articlesByUserLoaded: false,
  categoryCount: {},
  categoryCountLoaded: false,
  last: [],
  lastLoaded: false,
  liked: [],
  likedLoaded: false,
  count: 0,
  countLoaded: false,
  slug: null,
  slugLoaded: false,
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
    { ...state, slugLoaded: false, error: null }
  )),
  on(ArticleActions.getArticleBySlugSuccess, (state, { article }) => (
    {
      ...state,
      slugLoaded: true,
      error: null,
      slug: article
    }
  )),
  on(ArticleActions.getArticleBySlugFailure, (state, { error }) => (
    { ...state, slugLoaded: false, error }
  )),
  // ARTICLE BY USER
  on(ArticleActions.getArticlesByUser, (state, { id }) => (
    { ...state, articlesByUserLoaded: false, error: null }
  )),
  on(ArticleActions.getArticlesByUserSuccess, (state, { articles }) => (
    {
      ...state,
      articlesByUserLoaded: true,
      error: null,
      articlesByUser: articles
    }
  )),
  on(ArticleActions.getArticlesByUserFailure, (state, { error }) => (
    { ...state, articlesByUserLoaded: false, error }
  )),
  // ARTICLES BY CATEGORY COUNT
  on(ArticleActions.getArticlesByCategoryCount, state => (
    { ...state, categoryCountLoaded: false, error: null }
  )),
  on(ArticleActions.getArticlesByCategoryCountSuccess, (state, { count }) => (
    {
      ...state,
      categoryCountLoaded: true,
      error: null,
      categoryCount: count
    }
  )),
  on(ArticleActions.getArticlesByCategoryCountFailure, (state, { error }) => (
    { ...state, categoryCountLoaded: false, error }
  )),
  // RESET
  on(ArticleActions.resetArticles, (state) => (
    {
      ...state,
      articlesLoaded: false,
      error: null,
      articles: [],
      full: false
    }
  )),
  on(ArticleActions.resetSlug, (state) => (
    { ...state, slugLoaded: false, error: null, slug: null }
  )),
  on(ArticleActions.resetArticlesByUser, (state) => (
    { ...state, articlesByUserLoaded: false, error: null, articlesByUser: null }
  ))
);

export function reducer(state: ArticleState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getArticles = (state: ArticleState) => state.articles;
export const getArticlesLoaded = (state: ArticleState) => state.articlesLoaded;
export const getArticlesByUser = (state: ArticleState) => state.articlesByUser;
export const getArticlesByUserLoaded = (state: ArticleState) => state.articlesByUserLoaded;
export const getFull = (state: ArticleState) => state.full;
export const getSlug = (state: ArticleState) => state.slug;
export const getLast = (state: ArticleState) => state.last;
export const getMostLiked = (state: ArticleState) => state.liked;
export const getMostLikedLoaded = (state: ArticleState) => state.likedLoaded;
export const getCount = (state: ArticleState) => state.count;
export const getCountLoaded = (state: ArticleState) => state.countLoaded;
export const getCategoryCount = (state: ArticleState) => state.categoryCount;
export const getCategoryCountLoaded = (state: ArticleState) => state.categoryCountLoaded;

export const getLastAndCountLoaded = (state: ArticleState) => {
  return state.lastLoaded &&
         state.countLoaded ? true : false;
};

function completed(articles: Article[]): boolean {
  return articles.length === 0 ? true : false;
}
