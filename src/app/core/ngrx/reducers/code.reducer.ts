import { createReducer, on, Action } from '@ngrx/store';
import * as CodeActions from '../actions/code.actions';
import { Code } from '@app/shared/interfaces/interfaces';

export interface CodeState {
  code: Code[];
  codeLoaded: boolean;
  error: string;
}

export const inititalState: CodeState = {
  code: [],
  codeLoaded: false,
  error: null
};

const featureReducer = createReducer(
  inititalState,
  on(CodeActions.getCode, state => (
    { ...state, codeLoaded: false, error: null }
  )),
  on(CodeActions.getCodeSuccess, (state, { code }) => (
    {
      ...state,
      codeLoaded: true,
      error: null,
      code
    }
  )),
  on(CodeActions.getCodeFailure, (state, { error }) => (
    { ...state, codeLoaded: false, error }
  ))
);

export function reducer(state: CodeState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getCode = (state: CodeState) => state.code;
export const getCodeLoaded = (state: CodeState) => state.codeLoaded;

