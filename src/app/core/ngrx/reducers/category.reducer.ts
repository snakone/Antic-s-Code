import { createReducer, on, Action } from '@ngrx/store';
import * as CategoryActions from '../actions/category.actions';
import { Category } from '@app/shared/interfaces/interfaces';

export interface CategoryState {
  category: Category;
  loaded: boolean;
  error: string;
}

export const inititalState: CategoryState = {
  category: null,
  loaded: false,
  error: null
};

const featureReducer = createReducer(
  inititalState,
  // GET CATEGORY BY NAME
  on(CategoryActions.getCategoryByName, (state, { name }) => (
    { ...state, loaded: false, error: null }
  )),
  on(CategoryActions.getCategoryByNameSuccess, (state, { category }) => (
    {
      ...state,
      loaded: true,
      error: null,
      category
    }
  )),
  on(CategoryActions.getCategoryByNameFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // RESET
  on(CategoryActions.resetCategory, (state) => (
    { ...state, loaded: true, error: null, category: null }
  )),
);

export const getByName = (state: CategoryState) => state.category;

export function reducer(state: CategoryState | undefined, action: Action) {
  return featureReducer(state, action);
}
