import { createSelector } from '@ngrx/store';

import * as fromNews from './news.reducer';
import { getNewsPartialState } from '../ngrx.index';
import { NewsPartialState } from '../ngrx.config';

export const getNewsState = createSelector(
  getNewsPartialState,
  (state: NewsPartialState) => state.news
);

export const getNews = createSelector(
  getNewsState, fromNews.getNews
);

export const getLoaded = createSelector(
  getNewsState, fromNews.getLoaded
);

export const getBySlug = createSelector(
  getNewsState, fromNews.getSlug
);

export const getLast = createSelector(
  getNewsState, fromNews.getLast
);

export const getLastLoaded = createSelector(
  getNewsState, fromNews.getLastLoaded
);

export const getViewed = createSelector(
  getNewsState, fromNews.getViewed
);

export const getViewedLoaded = createSelector(
  getNewsState, fromNews.getViewedLoaded
);

export const getFull = createSelector(
  getNewsState, fromNews.getFull
);

export const dataLoaded = createSelector(
  getNewsState, fromNews.dataLoaded
);

