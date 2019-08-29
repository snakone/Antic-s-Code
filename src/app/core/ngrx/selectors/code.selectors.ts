import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromCode from '../reducers/code.reducer';
import { getAppState } from '../reducers/reducers.index';

export const getCodeState = createSelector(
  getAppState,
  (state: AppState) => state.code
);

export const getAllCode = createSelector(
  getCodeState, fromCode.getAll
);

export const getArticlesCount = createSelector(
  getCodeState, fromCode.getCount
);


