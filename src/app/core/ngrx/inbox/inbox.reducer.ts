import { createReducer, on, Action } from '@ngrx/store';
import * as InboxActions from './inbox.actions';
import { Inbox, InboxMessage } from '@shared/interfaces/interfaces';

export interface InboxState {
  inbox: InboxMessage[];
  inboxLoaded: boolean;
  filtered: InboxMessage[];
  selected: InboxMessage;
  message: string;
  new: Inbox[];
}

export const inititalState: InboxState = {
  inbox: [],
  inboxLoaded: false,
  filtered: [],
  selected: null,
  message: null,
  new: []
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
      inbox: [...state.inbox, ...inbox],
      inboxLoaded: true,
      filtered: inbox
    }
  )),
  on(InboxActions.getFailure, (state, { error }) => (
    { ...state, inboxLoaded: false, error }
  )),
  // GET INBOX
  on(InboxActions.getNew, (state) => (
    { ...state, error: null }
  )),
  on(InboxActions.getNewSuccess, (state, { inbox }) => (
    {
      ...state,
      error: null,
      new: inbox
    }
  )),
  on(InboxActions.getNewFailure, (state, { error }) => (
    { ...state, error }
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
      inbox: [...state.inbox].map(i => i._id === id ? (i.read = mark, i) : i),
      error: null
    }
  )),
  // FILTER INBOX
  on(InboxActions.filter, (state, { value }) => (
    {
      ...state,
      filtered: [...[...state.inbox].filter(i => i.subject.match(new RegExp(value, 'i')))],
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
export const getNew = (state: InboxState) => state.new;

export function reducer(state: InboxState | undefined, action: Action) {
  return featureReducer(state, action);
}



