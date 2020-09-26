import { createReducer, on, Action } from '@ngrx/store';
import * as TestActions from './test.actions';
import { Test, TestEntry, TestResult } from '@shared/interfaces/interfaces';

export interface TestState {
  tests: Test[];
  test: Test;
  loaded: boolean;
  testLoaded: boolean;
  entry: TestEntry;
  entryLoaded: boolean;
  result: TestResult;
  error: string;
}

export const inititalState: TestState = {
  tests: [],
  test: null,
  loaded: false,
  testLoaded: false,
  entry: null,
  entryLoaded: false,
  result: null,
  error: null
};

const featureReducer = createReducer(
  inititalState,
 // GET TEST
  on(TestActions.get, (state) => (
   { ...state, loaded: false, error: null }
  )),
  on(TestActions.getSuccess, (state, { tests }) => (
    {
      ...state,
      error: null,
      tests,
      loaded: true
    }
  )),
  on(TestActions.getFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
    // GET BY CATEGORY
  on(TestActions.getByCategory, (state) => (
    { ...state, testLoaded: false, error: null }
  )),
  on(TestActions.getByCategorySuccess, (state, { test }) => (
    {
      ...state,
      error: null,
      test,
      testLoaded: true
    }
  )),
  on(TestActions.getByCategoryFailure, (state, { error }) => (
    { ...state, testLoaded: false, error }
  )),
  // GET ENTRY BY UID
  on(TestActions.getEntryByUid, (state) => (
    { ...state, entryLoaded: false, error: null }
  )),
  on(TestActions.getEntryByUidSuccess, (state, { entry }) => (
    {
      ...state,
      error: null,
      entry,
      entryLoaded: true
    }
  )),
  on(TestActions.getEntryByUidFailure, (state, { error }) => (
    { ...state, entryLoaded: false, error }
  )),
  // SAVE TEST REQUEST
  on(TestActions.saveRequest, (state) => (
    { ...state, resultLoaded: false, error: null, result: null }
  )),
  on(TestActions.saveRequestSuccess, (state, { result }) => (
    {
      ...state,
      error: null,
      result
    }
  )),
  on(TestActions.saveRequestFailure, (state, { error }) => (
    { ...state, resultLoaded: false, error }
  )),
  // RESET
  on(TestActions.reset, (state) => (
    {
      ...state,
      tests: [],
      loaded: false,
      testLoaded: false,
      test: null
    }
  )),
  // RESET ENTRY
  on(TestActions.resetEntry, (state) => (
    {
      ...state,
      entry: null,
      entryLoaded: false
    }
  )),
);

export const getTests = (state: TestState) => state.tests;
export const getByCategory = (state: TestState) => state.test;
export const getLoaded = (state: TestState) => state.loaded;
export const getEntry = (state: TestState) => state.entry;
export const getEntryLoaded = (state: TestState) => state.entryLoaded;
export const getResult = (state: TestState) => state.result;

export function reducer(state: TestState | undefined, action: Action) {
  return featureReducer(state, action);
}
