import { createAction, props } from '@ngrx/store';
import { ChatMessage } from '@shared/interfaces/interfaces';

// SEND MESSAGE
export const send =
  createAction('[Chat API] Send Message',
  props<{ request: string }>());

export const sendSuccess =
  createAction('[Chat API] Send Message Success',
  props<{ message: string }>());

export const sendFailure =
  createAction('[Chat API] Send Message Failure',
  props<{ error: string }>());

// GET MESSAGES
export const getMessages =
  createAction('[Chat API] Get Messages');

export const getMessagesSuccess =
  createAction('[Chat API] Get Messages Success',
  props<{ message: ChatMessage }>());

export const getMessagesFailure =
  createAction('[Chat API] Get Messages Failure',
  props<{ error: string }>());

// GET FIRST
export const getFirst =
  createAction('[Chat API] Get First');

export const getFirstSuccess =
  createAction('[Chat API] Get First Success',
  props<{ messages: ChatMessage[] }>());

export const getFirstFailure =
  createAction('[Chat API] Get First Failure',
  props<{ error: string }>());

// RESET CHAT
export const resetChat =
  createAction('[Chat API] Reset Chat');
