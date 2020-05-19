import { createReducer, on, Action } from '@ngrx/store';
import * as InterActions from '../actions/interaction.actions';
import { Interaction } from '@shared/interfaces/interfaces';

export interface InteractionState {
  interaction: Interaction[];
  loaded: boolean;
  error: string;
}

export const inititalState: InteractionState = {
  interaction: [],
  loaded: false,
  error: null,
};

const featureReducer = createReducer(
  inititalState,
 // GET INTERACTION BY USER
 on(InterActions.getByUser, (state) => (
  { ...state, loaded: false, error: null }
  )),
  on(InterActions.getByUserSuccess, (state, { interaction }) => (
    {
      ...state,
      error: null,
      interaction,
      loaded: true
    }
  )),
  on(InterActions.getByUserFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  on(InterActions.reset, (state) => (
    {
      ...state,
      loaded: false,
      interaction: null,
      error: null
    }
  ))
);

export const getByUser = (state: InteractionState) => state.interaction;
export const getByUserLoaded = (state: InteractionState) => state.loaded;

export function reducer(state: InteractionState | undefined, action: Action) {
  return featureReducer(state, action);
}
