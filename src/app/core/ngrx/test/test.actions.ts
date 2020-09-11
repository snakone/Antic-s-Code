import { props, createAction } from '@ngrx/store';
import { Test, TestEntry, TestRequest, TestRequestResult } from '@shared/interfaces/interfaces';

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

// GET ENTRIES BY USER
export const getEntriesByUser =
  createAction('[Test API] Get Entries by User');

export const getEntriesByUserSuccess =
  createAction('[Test API] Get Entries by User Success',
  props<{ entries: TestEntry[] }>());

export const getEntriesByUserFailure =
  createAction('[Test API] Get Entries by User Failure',
  props<{ error: string }>());

// SET ENTRY
export const setEntry =
  createAction('[Test API] Set Entry Test Success',
  props<{ entry: TestEntry }>());

export const setEntryFailure =
  createAction('[Test API] Set Entry Test Failure',
  props<{ error: string }>());

// SAVE TEST REQUEST
export const saveRequest =
  createAction('[Test API] Save Test Request',
  props<{ request: TestRequest }>());

export const saveRequestSuccess =
  createAction('[Test API] Save Test Request Success',
  props<{ result: TestRequestResult }>());

export const saveRequestFailure =
  createAction('[Test API] Save Test Request Failure',
  props<{ error: string }>());

// RESET BY CATEGORY
export const reset =
  createAction('[Test API] Reset Test');

// RESET ENTRY
export const resetEntry =
  createAction('[Test API] Reset Entry');

// RESET ENTRIES BY USER
export const resetEntriesByUser =
  createAction('[Test API] Reset Entries by User');


