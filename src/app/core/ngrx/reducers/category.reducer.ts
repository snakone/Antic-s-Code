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
  on(CategoryActions.getByName, (state) => (
    { ...state, loaded: false, error: null, category: null }
  )),
  on(CategoryActions.getByNameSuccess, (state, { category }) => (
    {
      ...state,
      loaded: true,
      category,
      error: null,
    }
  )),
  on(CategoryActions.getByNameFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // RESET
  on(CategoryActions.reset, (state) => (
    { ...state, loaded: false, error: null, category: null }
  )),
);

export const getByName = (state: CategoryState) => state.category;
export const getByNameLoaded = (state: CategoryState) => state.loaded;

export function reducer(state: CategoryState | undefined, action: Action) {
  return featureReducer(state, action);
}
