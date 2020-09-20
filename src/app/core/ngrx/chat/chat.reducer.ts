import { createReducer, on, Action } from '@ngrx/store';
import * as ChatActions from './chat.actions';
import { ChatMessage } from '@shared/interfaces/interfaces';

export interface ChatState {
  messages: ChatMessage[];
  lastLoaded: boolean;
  lastMessage: string;
  loaded: boolean;
  error: string;
}

export const inititalState: ChatState = {
  messages: [],
  loaded: false,
  error: null,
  lastLoaded: false,
  lastMessage: ''
};

const featureReducer = createReducer(
  inititalState,
  // SEND MESSAGE
  on(ChatActions.send, (state) => (
    { ...state, error: null, lastMessage: '' }
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
  // LISTEN MESSAGES
  on(ChatActions.listenMessages, (state) => (
    { ...state, error: null }
  )),
  on(ChatActions.listenMessagesSuccess, (state, { message }) => (
    {
      ...state,
      error: null,
      messages: [...state.messages, message],
      loaded: true
    }
  )),
  on(ChatActions.listenMessagesFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // GET MESSAGES
  on(ChatActions.getMessages, (state) => (
    { ...state, error: null }
  )),
  on(ChatActions.getMessagesSuccess, (state, { messages }) => (
    {
      ...state,
      error: null,
      messages: [...messages],
      loaded: true
    }
  )),
  on(ChatActions.getMessagesFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // DELETE MESSAGE BY ID
  on(ChatActions.deleteById, (state) => (
    { ...state, error: null }
  )),
  on(ChatActions.deleteByIdSuccess, (state, { id }) => (
    {
      ...state,
      error: null,
      messages: [...state.messages.filter(m => m._id !== id)]
    }
  )),
  on(ChatActions.deleteByIdFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // RESET
  on(ChatActions.resetChat, (state) => (
    { ...state, messages: [], error: null, loaded: false }
  ))
);

export const getMessages = (state: ChatState) => state.messages;
export const getLoaded = (state: ChatState) => state.loaded;
export const getLastLoaded = (state: ChatState) => state.lastLoaded;

export function reducer(state: ChatState | undefined, action: Action) {
  return featureReducer(state, action);
}
