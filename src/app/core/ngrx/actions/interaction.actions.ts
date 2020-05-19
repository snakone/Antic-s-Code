import { props, createAction } from '@ngrx/store';
import { Interaction } from '@app/shared/interfaces/interfaces';

// GET INTERACTION BY USER
export const getByUser =
  createAction('[Interaction API] Get Interaction By User');

export const getByUserSuccess =
  createAction('[Interaction API] Get Interaction By User Success',
  props<{ interaction: Interaction[] }>());

export const getByUserFailure =
  createAction('[Interaction API] Get Interaction By User Failure',
  props<{ error: string }>());

// RESET INTERACTION
export const reset =
  createAction('[Interaction API] Reset Interaction');
