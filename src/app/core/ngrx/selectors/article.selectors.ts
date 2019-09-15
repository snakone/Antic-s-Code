import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from '../reducers/article.reducer';
import { getAppState } from '../reducers/reducers.index';

export const getArticlesState = createSelector(
  getAppState,
  (state: AppState) => state.articles
);

export const getArticles = createSelector(
  getArticlesState, fromArticles.getArticles
);

export const getArticlesLoaded = createSelector(
  getArticlesState, fromArticles.getArticlesLoaded
);

export const getArticleBySlug = createSelector(
  getArticlesState, fromArticles.getSlug
);

export const getLastArticles = createSelector(
  getArticlesState, fromArticles.getLast
);

export const getMostLiked = createSelector(
  getArticlesState, fromArticles.getMostLiked
);

export const getFullArticles = createSelector(
  getArticlesState, fromArticles.getFull
);

export const getArticlesCount = createSelector(
  getArticlesState, fromArticles.getCount
);

export const getHomeLoaded = createSelector(
  getArticlesState, fromArticles.getHomeLoaded
);


