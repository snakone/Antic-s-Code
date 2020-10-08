import { props, createAction } from '@ngrx/store';
import { Inbox, InboxMessage } from '@shared/interfaces/interfaces';

// GET INBOX
export const get =
  createAction('[Inbox API] Get Inbox');

export const getSuccess =
  createAction('[Inbox API] Get Inbox Success',
  props<{ inbox: Inbox[] }>());

export const getFailure =
  createAction('[Inbox API] Get Inbox Failure',
  props<{ error: string }>());

// SEND MESSAGE
export const send =
  createAction('[Inbox API] Send Inbox',
  props<{ message: InboxMessage }>());

export const sendSuccess =
  createAction('[Inbox API] Send Inbox Success',
  props<{ result: InboxMessage }>());

export const sendFailure =
  createAction('[Inbox API] Send Inbox Failure',
  props<{ error: string }>());

// SET INBOX
export const set =
  createAction('[Inbox API] Set Inbox Message',
  props<{ inbox: Inbox }>());

export const setSuccess =
  createAction('[Inbox API] Set Inbox Success',
  props<{ selected: Inbox }>());

export const setFailure =
  createAction('[Inbox API] Set Inbox Failure',
  props<{ error: string }>());

// SET MESSAGE
export const setMessage =
  createAction('[Inbox API] Set Single Message',
  props<{ message: string }>());

// FILTER INBOX
export const filter =
  createAction('[Inbox API] Filter Inbox Message',
  props<{ value: string }>());

// MARK UNREAD
export const markUnread =
  createAction('[Inbox API] Mark Unread Message',
  props<{ id: string, mark: boolean }>());

export const markUnreadSuccess =
  createAction('[Inbox API] Mark Unread Message Success');

export const markUnreadFailure =
  createAction('[Inbox API] Mark Unread Message Failure',
  props<{ error: string }>());

// RELOAD INBOX
export const reload =
  createAction('[Inbox API] Reload Inbox');

// RESET INBOX
export const reset =
  createAction('[Inbox API] Reset Inbox');

// RESET MESSAGE
export const resetMessage =
  createAction('[Inbox API] Reset Single Message');
