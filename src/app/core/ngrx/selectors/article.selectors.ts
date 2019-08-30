import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from '../reducers/article.reducer';
import { getAppState } from '../reducers/reducers.index';

export const getArticlesState = createSelector(
  getAppState,
  (state: AppState) => state.articles
);

export const getAllArticles = createSelector(
  getArticlesState, fromArticles.getAll
);

export const getLoadedArticles = createSelector(
  getArticlesState, fromArticles.getLoaded
);

export const getFullLoaded = createSelector(
  getArticlesState, fromArticles.getFull
);

export const getArticleBySlug = createSelector(
  getArticlesState, fromArticles.getSlug
);

export const getLastArticles = createSelector(
  getArticlesState, fromArticles.getLast
);

