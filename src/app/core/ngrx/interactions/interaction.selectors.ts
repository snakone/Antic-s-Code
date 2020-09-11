import { createSelector } from '@ngrx/store';
import * as fromInters from './interaction.reducer';
import { getInterPartialState } from '../ngrx.index';
import { IntersPartialState } from '../ngrx.config';

export const getInterState = createSelector(
  getInterPartialState,
  (state: IntersPartialState) => state.inters
);

export const getByUser = createSelector(
  getInterState, fromInters.getByUser
);

export const getByNameLoaded = createSelector(
  getInterState, fromInters.getByUserLoaded
);
