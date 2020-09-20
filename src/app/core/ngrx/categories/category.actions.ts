import { props, createAction } from '@ngrx/store';
import { Category } from '@shared/interfaces/interfaces';

// GET CATEGORY BY Name
export const getByName =
  createAction('[Categories API] Get Category By Name',
  props<{ name: string }>());

export const getByNameSuccess =
  createAction('[Categories API] Get Category By Name Success',
  props<{ category: Category }>());

export const getByNameFailure =
  createAction('[Categories API] Get Category By Name Failure',
  props<{ error: string }>());

// RESET CATEGORY
export const reset =
  createAction('[Categories API] Reset Category');


