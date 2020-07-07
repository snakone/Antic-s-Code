import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromChat from '../reducers/chat.reducer';
import { getAppState } from '../reducers/reducers.index';

export const getChatState = createSelector(
  getAppState,
  (state: AppState) => state.chat
);

export const getMessages = createSelector(
  getChatState, fromChat.getMessages
);

export const getLoaded = createSelector(
  getChatState, fromChat.getLastLoaded
);

export const getLastLoaded = createSelector(
  getChatState, fromChat.getLastLoaded
);
