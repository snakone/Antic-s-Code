import { createReducer, on, Action } from '@ngrx/store';
import * as CodeActions from '../actions/code.actions';
import { Code } from '@app/shared/interfaces/interfaces';

export interface CodeState {
  code: Code[];
  loaded: boolean;
  error: string;
  count: number;
}

export const inititalState: CodeState = {
  code: [],
  loaded: false,
  error: null,
  count: 0
};

const featureReducer = createReducer(
  inititalState,
  on(CodeActions.getCode, state => (
    { ...state, loaded: false, error: null }
  )),
  on(CodeActions.getCodeSuccess, (state, { code, count }) => (
    {
      ...state,
      loaded: true,
      error: null,
      code,
      count
    }
  )),
  on(CodeActions.GetCodeFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  ))
);

export function reducer(state: CodeState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getAll = (state: CodeState) => state.code;
export const getCount = (state: CodeState) => state.count;

