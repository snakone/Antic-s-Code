import * as fromCategories from './categories/category.reducer';
import * as fromInters from './interactions/interaction.reducer';
import * as fromChat from './chat/chat.reducer';
import * as fromTest from './test/test.reducer';

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
