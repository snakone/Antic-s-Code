import { props, createAction } from '@ngrx/store';
import { Code } from '@app/shared/interfaces/interfaces';

export const getCode =
  createAction('[App Init] Get Code');

export const getCodeSuccess =
  createAction('[App Init] Get Code Success',
  props<{ code: Code[], count: number }>());

export const GetCodeFailure =
  createAction('[App Init] Get Code Failure',
  props<{ error: string }>());



