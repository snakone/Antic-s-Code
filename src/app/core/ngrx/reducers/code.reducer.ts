import { createReducer, on, Action } from '@ngrx/store';
import * as CodeActions from '../actions/code.actions';
import { Code } from '@app/shared/interfaces/interfaces';

export interface CodeState {
  code: Code[];
  loaded: boolean;
  error: string;
}

export const inititalState: CodeState = {
  code: [],
  loaded: false,
  error: null
};

const featureReducer = createReducer(
  inititalState,
  on(CodeActions.getCode, state => (
    { ...state, loaded: false, error: null }
  )),
  on(CodeActions.getCodeSuccess, (state, { code }) => (
    {
      ...state,
      loaded: true,
      error: null,
      code
    }
  )),
  on(CodeActions.getCodeFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  ))
);

export function reducer(state: CodeState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getCode = (state: CodeState) => state.code;

