import { props, createAction } from '@ngrx/store';
import { Category } from '@app/shared/interfaces/interfaces';

// GET CATEGORY BY Name
export const getCategoryByName =
  createAction('[Categories API] Get Category By Name',
  props<{ name: string }>());

export const getCategoryByNameSuccess =
  createAction('[Categories API] Get Category By Name Success',
  props<{ category: Category }>());

export const getCategoryByNameFailure =
  createAction('[Categories API] Get Category By Name Failure',
  props<{ error: string }>());

// RESET CATEGORY
export const resetCategory =
  createAction('[Categories API] Reset Category');


