import * as fromCategories from './categories/category.reducer';
import * as fromChat from './chat/chat.reducer';
import * as fromTest from './test/test.reducer';
import * as fromNews from './news/news.reducer';
import * as fromInbox from './inbox/inbox.reducer';

export interface CategoriesPartialState {
  categories: fromCategories.CategoryState;
}

export interface ChatPartialState {
  chat: fromChat.ChatState;
}

export interface TestPartialState {
  test: fromTest.TestState;
}

export interface NewsPartialState {
  news: fromNews.NewsState;
}

export interface InboxPartialState {
  inbox: fromInbox.InboxState;
}
