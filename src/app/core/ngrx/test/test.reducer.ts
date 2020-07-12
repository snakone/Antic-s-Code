import { createReducer, on, Action } from '@ngrx/store';
import * as TestActions from './test.actions';
import { Test } from '@shared/interfaces/interfaces';

export interface TestState {
  tests: Test[];
  test: Test;
  loaded: boolean;
  testLoaded: boolean;
  error: string;
}

export const inititalState: TestState = {
  tests: [],
  loaded: false,
  testLoaded: false,
  error: null,
  test: null
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
  // RESET BY CATEGORY
  on(TestActions.reset, (state) => (
    {
      ...state,
      testLoaded: false,
      test: null,
      error: null
    }
  ))
);

export const getTests = (state: TestState) => state.tests;
export const getByCategory = (state: TestState) => state.test;
export const getLoaded = (state: TestState) => state.loaded;


export function reducer(state: TestState | undefined, action: Action) {
  return featureReducer(state, action);
}
