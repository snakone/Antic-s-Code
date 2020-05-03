import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromInteractions from '../reducers/interaction.reducer';
import { getAppState } from '../reducers/reducers.index';

export const getInteractionState = createSelector(
  getAppState,
  (state: AppState) => state.interaction
);

export const getByUser = createSelector(
  getInteractionState, fromInteractions.getByUser
);

export const getByNameLoaded = createSelector(
  getInteractionState, fromInteractions.getByUserLoaded
);
