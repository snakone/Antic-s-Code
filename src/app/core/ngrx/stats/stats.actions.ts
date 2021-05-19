import { props, createAction } from '@ngrx/store';
import { UserStats } from '@shared/interfaces/interfaces';

// GET STATS
export const get =
  createAction('[Stats API] Get Stats');

export const getSuccess =
  createAction('[Stats API] Get Stats Success',
  props<{ stats: UserStats[] }>());

export const getFailure =
  createAction('[Stats API] Get Stats Failure',
  props<{ error: string }>());

// RESET STATS
export const reset =
  createAction('[Stats API] Reset Stats');

