import { createReducer, on, Action } from '@ngrx/store';
import * as InboxActions from './inbox.actions';
import { Inbox } from '@shared/interfaces/interfaces';

export interface InboxState {
  inbox: Inbox[];
  inboxLoaded: boolean;
  filtered: Inbox[];
  selected: Inbox;
  message: string;
  unread: number;
}

export const inititalState: InboxState = {
  inbox: [],
  inboxLoaded: false,
  filtered: [],
  selected: null,
  message: null,
  unread: 0
};

const featureReducer = createReducer(
  inititalState,
  // GET INBOX
  on(InboxActions.get, (state) => (
    { ...state, error: null }
  )),
  on(InboxActions.getSuccess, (state, { inbox }) => (
    {
      ...state,
      error: null,
      inbox,
      filtered: inbox,
      inboxLoaded: true,
      unread: [...inbox].reduce((acc, curr) => acc + (curr.last.read ? 0 : 1), 0)
    }
  )),
  on(InboxActions.getFailure, (state, { error }) => (
    { ...state, inboxLoaded: false, error }
  )),
  // SET INBOX MESSAGE
  on(InboxActions.set, (state) => (
    { ...state, error: null, selected: null }
  )),
  on(InboxActions.setSuccess, (state, { selected }) => (
    {
      ...state,
      error: null,
      selected
    }
  )),
  on(InboxActions.setFailure, (state, { error }) => (
    { ...state, selected: null, error }
  )),
  // SET SINGLE MESSAGE
  on(InboxActions.setMessage, (state, { message }) => (
    {
      ...state,
      error: null,
      message
    }
  )),
  // MARK UNREAD
  on(InboxActions.markUnread, (state, { id, mark }) => (
    {
      ...state,
      inbox: [...state.inbox].map(i => i.last._id === id ? (i.last.read = mark, i) : i),
      error: null
    }
  )),
  // FILTER INBOX
  on(InboxActions.filter, (state, { value }) => (
    {
      ...state,
      filtered: [...[...state.inbox]
                  .filter(i => i.last.subject.match(new RegExp(value, 'i')))],
      error: null
    }
  )),
  // RESET INBOX
  on(InboxActions.reset, (state) => (
    {
      ...state,
      inbox: [],
      filtered: [],
      error: null,
      selected: null,
      inboxLoaded: false
    }
  )),
  // RESET SINGLE MESSAGE
  on(InboxActions.resetMessage, (state) => (
    {
      ...state,
      message: null
    }
  ))
);

export const getInbox = (state: InboxState) => state.inbox;
export const getInboxLoaded = (state: InboxState) => state.inboxLoaded;
export const getFiltered = (state: InboxState) => state.filtered;
export const getSelected = (state: InboxState) => state.selected;
export const getMessage = (state: InboxState) => state.message;
export const getUnread = (state: InboxState) => state.unread;

export function reducer(state: InboxState | undefined, action: Action) {
  return featureReducer(state, action);
}




