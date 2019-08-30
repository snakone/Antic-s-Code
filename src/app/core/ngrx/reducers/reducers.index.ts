import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from './article.reducer';
import * as fromCategories from './category.reducer';
import * as fromCode from './code.reducer';

export const reducers: ActionReducerMap<AppState> = {
  articles: fromArticles.reducer,
  categories: fromCategories.reducer,
  code: fromCode.reducer
};

export const getAppState = createFeatureSelector<AppState>('AppState');


