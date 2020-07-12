import { props, createAction } from '@ngrx/store';
import { Test } from '@shared/interfaces/interfaces';

// GET TEST
export const get =
  createAction('[Test API] Get Test');

export const getSuccess =
  createAction('[Test API] Get Test Success',
  props<{ tests: Test[] }>());

export const getFailure =
  createAction('[Test API] Get Test Failure',
  props<{ error: string }>());

// GET BY CATEGORY
export const getByCategory =
  createAction('[Test API] Get Test by Category',
  props<{ category: string }>());

export const getByCategorySuccess =
  createAction('[Test API] Get Test by Category Success',
  props<{ test: Test }>());

export const getByCategoryFailure =
  createAction('[Test API] Get Test by Category Failure',
  props<{ error: string }>());

// RESET BY CATEGORY
export const reset =
  createAction('[Test API] Reset Test');
