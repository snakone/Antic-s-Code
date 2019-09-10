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

export const getArticlesCount = createSelector(
  getArticlesState, fromArticles.getCount
);

export const getLoadedArticles = createSelector(
  getArticlesState, fromArticles.getLoaded
);

export const getFullArticles = createSelector(
  getArticlesState, fromArticles.getFull
);

export const getArticleBySlug = createSelector(
  getArticlesState, fromArticles.getSlug
);

export const getLastArticles = createSelector(
  getArticlesState, fromArticles.getLast
);

export const getMostLikedArticles = createSelector(
  getArticlesState, fromArticles.getMostLiked
);

