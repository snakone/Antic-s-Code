import { props, createAction } from '@ngrx/store';
import { Test, TestEntry, TestResult } from '@shared/interfaces/interfaces';

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

// GET ENTRY BY UID
export const getEntryByUid =
  createAction('[Test API] Get Entry by UID',
  props<{ uid: string }>());

export const getEntryByUidSuccess =
  createAction('[Test API] Get Entry by UID Success',
  props<{ entry: TestEntry }>());

export const getEntryByUidFailure =
  createAction('[Test API] Get Entry by UID Failure',
  props<{ error: string }>());

// GET RESULT BY UID
export const getResultByUid =
  createAction('[Test API] Get Result by UID',
  props<{ uid: string }>());

export const getResultByUidSuccess =
  createAction('[Test API] Get Result by UID Success',
  props<{ result: TestResult }>());

export const getResultByUidFailure =
  createAction('[Test API] Get Result by UID Failure',
  props<{ error: string }>());

// SAVE TEST REQUEST
export const saveRequest =
  createAction('[Test API] Save Test Request',
  props<{ request: TestResult }>());

export const saveRequestSuccess =
  createAction('[Test API] Save Test Request Success',
  props<{ result: TestResult }>());

export const saveRequestFailure =
  createAction('[Test API] Save Test Request Failure',
  props<{ error: string }>());

// RESET BY CATEGORY
export const reset =
  createAction('[Test API] Reset Test');

// RESET BY CATEGORY
export const resetResult =
  createAction('[Test API] Reset Test Result');

// RESET ENTRY
export const resetEntry =
  createAction('[Test API] Reset Test Entry');



