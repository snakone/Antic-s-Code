import { createSelector } from '@ngrx/store';

import * as fromChat from './chat.reducer';
import { getChatPartialState } from '../ngrx.index';
import { ChatPartialState } from '../ngrx.config';

export const getChatState = createSelector(
  getChatPartialState,
  (state: ChatPartialState) => state.chat
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
