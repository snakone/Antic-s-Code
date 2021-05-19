import { createReducer, on, Action } from '@ngrx/store';
import * as ArticleActions from './article.actions';
import { Article } from '@shared/interfaces/interfaces';

export interface ArticleState {
  articles: Article[];
  articlesLoaded: boolean;
  byUser: Article[];
  byUserLoaded: boolean;
  byCategory: Article[];
  byCategoryLoaded: boolean;
  byTags: Article[];
  byTagsLoaded: boolean;
  bySlug: Article;
  bySlugLoaded: boolean;
  last: Article[];
  lastLoaded: boolean;
  liked: Article[];
  likedLoaded: boolean;
  viewed: Article[];
  viewedLoaded: boolean;
  count: number;
  countLoaded: boolean;
  categoryCount: object;
  categoryCountLoaded: boolean;
  full: boolean;
  error: string;
}

export const inititalState: ArticleState = {
  articles: [],
  articlesLoaded: false,
  byUser: [],
  byUserLoaded: false,
  byCategory: [],
  byCategoryLoaded: false,
  byTags: [],
  byTagsLoaded: false,
  bySlug: {},
  bySlugLoaded: false,
  last: [],
  lastLoaded: false,
  liked: [],
  likedLoaded: false,
  viewed: null,
  viewedLoaded: false,
  count: 0,
  countLoaded: false,
  categoryCount: {},
  categoryCountLoaded: false,
  full: false,
  error: null,
};

const featureReducer = createReducer(
  inititalState,
  // GET ARTICLES
  on(ArticleActions.get, state => (
    { ...state, articlesLoaded: false, error: null }
  )),
  on(ArticleActions.getSuccess, (state, { articles }) => (
    {
      ...state,
      articlesLoaded: true,
      articles: [...state.articles, ...articles],
      error: null,
      full: completed(articles)
    }
  )),
  on(ArticleActions.getFailure, (state, { error }) => (
    { ...state, articlesLoaded: false, error }
  )),
  // GET ARTICLES DATA
  on(ArticleActions.getData, state => (
    { ...state, error: null }
  )),
  on(ArticleActions.getDataSuccess, (state, { res }) => (
    {
      ...state,
      last: res.lastArticles,
      lastLoaded: true,
      liked: res.likedArticles,
      likedLoaded: true,
      viewed: res.viewedArticles,
      viewedLoaded: true,
      count: res.articlesCount,
      countLoaded: true,
      categoryCount: res.categoryCount,
      categoryCountLoaded: true,
      error: null
    }
  )),
  on(ArticleActions.getFailure, (state, { error }) => (
    { ...state, articlesLoaded: false, error }
  )),
  // ARTICLE BY SLUG
  on(ArticleActions.getBySlug, (state) => (
    { ...state, bySlugLoaded: false, error: null, bySlug: null }
  )),
  on(ArticleActions.getBySlugSuccess, (state, { article }) => (
    {
      ...state,
      bySlugLoaded: true,
      bySlug: article,
      error: null,
    }
  )),
  on(ArticleActions.getBySlugFailure, (state, { error }) => (
    { ...state, bySlugLoaded: false, error }
  )),
  // ARTICLES BY USER
  on(ArticleActions.getByUser, (state) => (
    { ...state, byUserLoaded: false, error: null }
  )),
  on(ArticleActions.getByUserSuccess, (state, { articles }) => (
    {
      ...state,
      byUserLoaded: true,
      byUser: articles,
      error: null,
    }
  )),
  on(ArticleActions.getByUserFailure, (state, { error }) => (
    { ...state, byUserLoaded: false, error }
  )),
  // ARTICLES BY CATEGORY
  on(ArticleActions.getByCategory, state => (
    { ...state, byCategoryLoaded: false, error: null }
  )),
  on(ArticleActions.getByCategorySuccess, (state, { articles }) => (
    {
      ...state,
      byCategoryLoaded: true,
      byCategory: articles,
      error: null,
    }
  )),
  on(ArticleActions.getByCategoryFailure, (state, { error }) => (
    { ...state, byCategoryLoaded: false, error }
  )),
  // ARTICLES BY TAGS
  on(ArticleActions.getByTagsSuccess, (state, { articles }) => (
    {
      ...state,
      byTagsLoaded: true,
      byTags: articles,
      error: null,
    }
  )),
  on(ArticleActions.getByTagsFailure, (state, { error }) => (
    { ...state, byTagsLoaded: false, error }
  )),
  // RESET
  on(ArticleActions.reset, (state) => (
    {
      ...state,
      articlesLoaded: false,
      error: null,
      articles: [],
      full: false
    }
  )),
  on(ArticleActions.resetSlug, (state) => (
    {
      ...state,
      bySlugLoaded: false,
      error: null,
      slug: null,
      byTagsLoaded: false,
      byTags: null
    }
  )),
  on(ArticleActions.resetByUser, (state) => (
    { ...state, byUserLoaded: false, error: null, byUser: null }
  )),
  on(ArticleActions.resetByCategory, (state) => (
    { ...state, byCategoryLoaded: false, error: null, byCategory: null }
  ))
);

export function reducer(state: ArticleState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getArticles = (state: ArticleState) => state.articles;
export const getArticlesLoaded = (state: ArticleState) => state.articlesLoaded;
export const getByUser = (state: ArticleState) => state.byUser;
export const getByUserLoaded = (state: ArticleState) => state.byUserLoaded;
export const getByCategory = (state: ArticleState) => state.byCategory;
export const getByCategoryLoaded = (state: ArticleState) => state.byCategoryLoaded;
export const getByTags = (state: ArticleState) => state.byTags;
export const getByTagsLoaded = (state: ArticleState) => state.byTagsLoaded;
export const getFull = (state: ArticleState) => state.full;
export const getSlug = (state: ArticleState) => state.bySlug;
export const getLast = (state: ArticleState) => state.last;
export const getMostLiked = (state: ArticleState) => state.liked;
export const getMostLikedLoaded = (state: ArticleState) => state.likedLoaded;
export const getMostViewed = (state: ArticleState) => state.viewed;
export const getMostViewedLoaded = (state: ArticleState) => state.viewedLoaded;
export const getCount = (state: ArticleState) => state.count;
export const getCountLoaded = (state: ArticleState) => state.countLoaded;
export const getCategoryCount = (state: ArticleState) => state.categoryCount;
export const getCategoryCountLoaded = (state: ArticleState) => state.categoryCountLoaded;

export const getDataLoaded = (state: ArticleState | undefined): boolean => {
  return state.lastLoaded &&
         state.countLoaded &&
         state.viewedLoaded &&
         state.likedLoaded &&
         state.categoryCountLoaded;
};

function completed(articles: Article[]): boolean {
  return articles.length === 0;
}
