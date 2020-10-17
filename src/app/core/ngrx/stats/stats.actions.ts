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

// GET STATS BY USER
export const getByUser =
  createAction('[Stats API] Get Stats by User',
  props<{ id: string }>());

export const getByUserSuccess =
  createAction('[Stats API] Get Stats by User Success',
  props<{ stats: UserStats }>());

export const getByUserFailure =
  createAction('[Stats API] Get Stats by User Failure',
  props<{ error: string }>());

// GET STATS BY USER PUBLIC
export const getByUserPublic =
  createAction('[Stats API] Get Stats by User Public',
  props<{ id: string }>());

export const getByUserPublicSuccess =
  createAction('[Stats API] Get Stats by User Public Success',
  props<{ stats: UserStats }>());

export const getByUserPublicFailure =
  createAction('[Stats API] Get Stats by User Public Failure',
  props<{ error: string }>());

// RESET STATS
export const reset =
  createAction('[Stats API] Reset Stats');

// RESET PUBLIC
export const resetPublic =
  createAction('[Stats API] Reset Public Stats');
