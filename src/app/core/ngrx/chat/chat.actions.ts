import { createAction, props } from '@ngrx/store';
import { ChatMessage } from '@shared/interfaces/interfaces';

// SEND MESSAGE
export const send =
  createAction('[Chat API] Send Message',
  props<{ message: string }>());

export const sendSuccess =
  createAction('[Chat API] Send Message Success',
  props<{ message: string }>());

export const sendFailure =
  createAction('[Chat API] Send Message Failure',
  props<{ error: string }>());

// LISTEN MESSAGES
export const listenMessages =
  createAction('[Chat API] Listen Messages');

export const listenMessagesSuccess =
  createAction('[Chat API] Listen Messages Success',
  props<{ message: ChatMessage }>());

export const listenMessagesFailure =
  createAction('[Chat API] Listen Messages Failure',
  props<{ error: string }>());

// GET MESSAGES
export const getMessages =
  createAction('[Chat API] Get Messages');

export const getMessagesSuccess =
  createAction('[Chat API] Get Messages Success',
  props<{ messages: ChatMessage[] }>());

export const getMessagesFailure =
  createAction('[Chat API] Get Messages Failure',
  props<{ error: string }>());

// DELETE MESSAGE BY ID
export const deleteById =
  createAction('[Chat API] Delete Message By ID',
  props<{ id: string }>());

export const deleteByIdSuccess =
  createAction('[Chat API] Delete Message By ID Success',
  props<{ id: string }>());

export const deleteByIdFailure =
  createAction('[Chat API] Delete Message By ID Failure',
  props<{ error: string }>());

// RESET CHAT
export const resetChat =
  createAction('[Chat API] Reset Chat');
