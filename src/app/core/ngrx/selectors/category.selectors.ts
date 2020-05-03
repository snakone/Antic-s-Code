import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromCategories from '../reducers/category.reducer';
import { getAppState } from '../reducers/reducers.index';

export const getCategoriesState = createSelector(
  getAppState,
  (state: AppState) => state.categories
);

export const getByName = createSelector(
  getCategoriesState, fromCategories.getByName
);

export const getByNameLoaded = createSelector(
  getCategoriesState, fromCategories.getByNameLoaded
);
