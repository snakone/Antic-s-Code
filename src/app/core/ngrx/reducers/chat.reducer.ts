import { createReducer, on, Action } from '@ngrx/store';
import * as ChatActions from '../actions/chat.actions';
import { ChatMessage } from '@shared/interfaces/interfaces';

export interface ChatState {
  messages: ChatMessage[];
  last: ChatMessage;
  lastLoaded: boolean;
  lastMessage: string;
  loaded: boolean;
  error: string;
}

export const inititalState: ChatState = {
  messages: [],
  loaded: false,
  error: null,
  last: null,
  lastLoaded: false,
  lastMessage: ''
};

const featureReducer = createReducer(
  inititalState,
  // SEND MESSAGE
  on(ChatActions.send, (state) => (
    { ...state, loaded: false, error: null, lastMessage: '' }
  )),
  on(ChatActions.sendSuccess, (state, { message }) => (
    {
      ...state,
      error: null,
      lastMessage: message,
      lastLoaded: true
    }
  )),
  on(ChatActions.sendFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // GET MESSAGES
  on(ChatActions.getMessages, (state) => (
    { ...state, loaded: false, error: null }
  )),
  on(ChatActions.getMessagesSuccess, (state, { message }) => (
    {
      ...state,
      error: null,
      messages: [message, ...state.messages],
      loaded: true
    }
  )),
  on(ChatActions.getMessagesFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // GET FIRST
  on(ChatActions.getFirst, (state) => (
    { ...state, error: null }
  )),
  on(ChatActions.getFirstSuccess, (state, { messages }) => (
    {
      ...state,
      error: null,
      messages: [...messages],
      loaded: true
    }
  )),
  on(ChatActions.getFirstFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  on(ChatActions.resetChat, (state) => (
    { ...state, messages: [], error: null, loaded: false }
  ))
);

export const getMessages = (state: ChatState) => state.messages;
export const getLoaded = (state: ChatState) => state.loaded;
export const getLast = (state: ChatState) => state.last;
export const getLastLoaded = (state: ChatState) => state.lastLoaded;

export function reducer(state: ChatState | undefined, action: Action) {
  return featureReducer(state, action);
}
