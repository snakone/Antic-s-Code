import { createSelector } from '@ngrx/store';

import * as fromInbox from './inbox.reducer';
import { getInboxPartialState } from '../ngrx.index';
import { InboxPartialState } from '../ngrx.config';

export const getInboxState = createSelector(
  getInboxPartialState,
  (state: InboxPartialState) => state.inbox
);

export const getInbox = createSelector(
  getInboxState, fromInbox.getInbox
);

export const getLoaded = createSelector(
  getInboxState, fromInbox.getInboxLoaded
);

export const getFiltered = createSelector(
  getInboxState, fromInbox.getFiltered
);

export const getSelected = createSelector(
  getInboxState, fromInbox.getSelected
);

export const getMessage = createSelector(
  getInboxState, fromInbox.getMessage
);

export const getUnread = createSelector(
  getInboxState, fromInbox.getUnread
);
