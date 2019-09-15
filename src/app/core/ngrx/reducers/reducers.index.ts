import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from './article.reducer';
import * as fromCategories from './category.reducer';
import * as fromCode from './code.reducer';
import * as fromUser from './user.reducer';

export const reducers: ActionReducerMap<AppState> = {
  articles: fromArticles.reducer,
  categories: fromCategories.reducer,
  code: fromCode.reducer,
  user: fromUser.reducer
};

export const getAppState = createFeatureSelector<AppState>('AppState');


