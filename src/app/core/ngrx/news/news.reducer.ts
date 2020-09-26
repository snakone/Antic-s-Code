import { createReducer, on, Action } from '@ngrx/store';
import * as NewsActions from './news.actions';
import { News } from '@shared/interfaces/interfaces';

export interface NewsState {
  news: News[];
  newsLoaded: boolean;
  last: News[];
  lastLoaded: boolean;
  viewed: News[];
  viewedLoaded: boolean;
  bySlug: News;
  bySlugLoaded: boolean;
  error: string;
  full: boolean;
}

export const inititalState: NewsState = {
  news: [],
  newsLoaded: false,
  last: [],
  lastLoaded: false,
  viewed: [],
  viewedLoaded: false,
  bySlug: null,
  bySlugLoaded: false,
  error: null,
  full: false
};

const featureReducer = createReducer(
  inititalState,
  // GET NEWS
  on(NewsActions.get, (state) => (
    { ...state, error: null }
  )),
  on(NewsActions.getSuccess, (state, { news }) => (
    {
      ...state,
      error: null,
      news: [...state.news, ...news],
      newsLoaded: true,
      full: completed(news)
    }
  )),
  on(NewsActions.getFailure, (state, { error }) => (
    { ...state, newsLoaded: false, error }
  )),
  // GET LAST AND VIEWED
  on(NewsActions.getLastAndViewed, (state) => (
    { ...state, error: null }
  )),
  on(NewsActions.getLastAndViewedSuccess, (state, { res }) => (
    {
      ...state,
      error: null,
      last: res.last,
      lastLoaded: true,
      viewed: res.viewed,
      viewedLoaded: true
    }
  )),
  on(NewsActions.getLastAndViewedFailure, (state, { error }) => (
    { ...state, lastLoaded: false, viewedLoaded: false, error }
  )),
  // GET NOTICE BY SLUG
  on(NewsActions.getBySlug, (state) => (
    { ...state, error: null }
  )),
  on(NewsActions.getBySlugSuccess, (state, { notice }) => (
    {
      ...state,
      error: null,
      bySlug: notice,
      bySlugLoaded: true
    }
  )),
  on(NewsActions.getBySlugFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // RESET BY SLUG
  on(NewsActions.resetSlug, (state) => (
    { ...state, bySlug: null, error: null, bySlugLoaded: false }
  ))
);

export const getNews = (state: NewsState) => state.news;
export const getLoaded = (state: NewsState) => state.newsLoaded;
export const getLast = (state: NewsState) => state.last;
export const getLastLoaded = (state: NewsState) => state.lastLoaded;
export const getViewed = (state: NewsState) => state.viewed;
export const getViewedLoaded = (state: NewsState) => state.viewedLoaded;
export const getFull = (state: NewsState) => state.full;
export const getSlug = (state: NewsState) => state.bySlug;

export function reducer(state: NewsState | undefined, action: Action) {
  return featureReducer(state, action);
}

function completed(news: News[]): boolean {
  return news.length === 0 ? true : false;
}

export const dataLoaded = (state: NewsState | undefined): boolean => {
  return state.lastLoaded && state.viewedLoaded && state.newsLoaded;
};

export const getViewedAndLastLoaded = (state: NewsState | undefined): boolean => {
  return state.lastLoaded && state.viewedLoaded;
};



