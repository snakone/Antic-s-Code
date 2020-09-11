import { createSelector } from '@ngrx/store';

import * as fromCategories from './category.reducer';
import { getCategoriesPartialState } from '../ngrx.index';
import { CategoriesPartialState } from '../ngrx.config';

export const getCategoriesState = createSelector(
  getCategoriesPartialState,
  (state: CategoriesPartialState) => state.categories
);

export const getByName = createSelector(
  getCategoriesState, fromCategories.getByName
);

export const getByNameLoaded = createSelector(
  getCategoriesState, fromCategories.getByNameLoaded
);
