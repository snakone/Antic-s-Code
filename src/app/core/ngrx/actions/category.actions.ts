import { props, createAction } from '@ngrx/store';
import { Category } from '@app/shared/interfaces/interfaces';

export const getCategories =
  createAction('[Categories API] Get Categories');

export const getCategoriesSuccess =
  createAction('[Categories API] Get Categories Success',
  props<{ categories: Category[] }>());

export const GetCategoriesFailure =
  createAction('[Categories API] Get Categories Failure',
  props<{ error: string }>());



