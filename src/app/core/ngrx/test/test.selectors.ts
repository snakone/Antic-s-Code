import { createSelector } from '@ngrx/store';
import * as fromTest from './test.reducer';
import { getTestPartialState } from '../ngrx.index';
import { TestPartialState } from '../ngrx.config';

export const getTestState = createSelector(
  getTestPartialState,
  (state: TestPartialState) => state.test
);

export const getTests = createSelector(
  getTestState, fromTest.getTests
);

export const getByCategory = createSelector(
  getTestState, fromTest.getByCategory
);

export const getLoaded = createSelector(
  getTestState, fromTest.getLoaded
);
