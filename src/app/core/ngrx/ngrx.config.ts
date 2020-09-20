import * as fromCategories from './categories/category.reducer';
import * as fromInters from './interactions/interaction.reducer';
import * as fromChat from './chat/chat.reducer';
import * as fromTest from './test/test.reducer';
import * as fromNews from './news/news.reducer';

export interface CategoriesPartialState {
  categories: fromCategories.CategoryState;
}

export interface IntersPartialState {
  inters: fromInters.InterState;
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
