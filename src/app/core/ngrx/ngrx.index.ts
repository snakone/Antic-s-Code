import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';

import {
  CategoriesPartialState,
  ChatPartialState,
  TestPartialState,
  NewsPartialState,
  InboxPartialState
} from './ngrx.config';

import * as fromArticles from './articles/article.reducer';
import * as fromUsers from './users/user.reducer';

import * as fromCategories from './categories/category.reducer';
import * as fromSearch from './search/search.reducer';
import * as fromChat from './chat/chat.reducer';
import * as fromTest from './test/test.reducer';
import * as fromNews from './news/news.reducer';
import * as fromInbox from './inbox/inbox.reducer';

export const reducers: ActionReducerMap<AppState> = {
  articles: fromArticles.reducer,
  users: fromUsers.reducer,
  search: fromSearch.reducer
};

export const categoryReducers:
  ActionReducerMap<CategoriesPartialState> = {
    categories: fromCategories.reducer
};

export const chatReducers:
  ActionReducerMap<ChatPartialState> = {
    chat: fromChat.reducer
};

export const testReducers:
  ActionReducerMap<TestPartialState> = {
    test: fromTest.reducer
};

export const newsReducers:
  ActionReducerMap<NewsPartialState> = {
    news: fromNews.reducer
};

export const inboxReducers:
  ActionReducerMap<InboxPartialState> = {
    inbox: fromInbox.reducer
};

export const getAppState = createFeatureSelector<AppState>('AppState');

export const getCategoriesPartialState =
  createFeatureSelector<CategoriesPartialState>('CategoryState');

export const getChatPartialState =
  createFeatureSelector<ChatPartialState>('ChatState');

export const getTestPartialState =
  createFeatureSelector<TestPartialState>('TestState');

export const getNewsPartialState =
  createFeatureSelector<NewsPartialState>('NewsState');

export const getInboxPartialState =
  createFeatureSelector<InboxPartialState>('InboxState');
