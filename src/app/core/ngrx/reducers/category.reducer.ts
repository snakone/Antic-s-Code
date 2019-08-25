import { createReducer, on, Action } from '@ngrx/store';
import * as CategoryActions from '../actions/category.actions';
import { Category } from '@app/shared/interfaces/interfaces';

export interface CategoryState {
  categories: Category[];
  loaded: boolean;
  error: string;
}

export const inititalState: CategoryState = {
  categories: [],
  loaded: false,
  error: null
};

const featureReducer = createReducer(
  inititalState,
  on(CategoryActions.getCategories, state => (
    { ...state, loaded: false, error: null }
  )),
  on(CategoryActions.getCategoriesSuccess, (state, { categories }) => (
    {
      ...state,
      loaded: true,
      error: null,
      categories
    }
  )),
  on(CategoryActions.GetCategoriesFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  ))
);

export const getAll = (state: CategoryState) => state.categories;

export function reducer(state: CategoryState | undefined, action: Action) {
  return featureReducer(state, action);
}
