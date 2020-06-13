import { InjectionToken } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import * as fromArticles from '@core/ngrx/reducers/article.reducer';
import * as fromCategories from '@core/ngrx/reducers/category.reducer';
import * as fromUsers from '@core/ngrx/reducers/user.reducer';
import * as fromSearch from '@core/ngrx/reducers/search.reducer';
import * as fromInteractions from '@core/ngrx/reducers/interaction.reducer';

export const URI = 'https://anticscode.netlify.com';
const APP_VERSION = '0.9.1';
export const DESKTOP_VERSION = '0.5.2';

export interface AppState {
  articles: fromArticles.ArticleState;
  categories: fromCategories.CategoryState;
  user: fromUsers.UserState;
  search: fromSearch.SearchState;
  interaction: fromInteractions.InteractionState
}

export interface AppConfig {
  TITLE: string;
  DEFAULT_LANGUAGE: string;
  APP_VERSION: string;
  DISQUS: string;
  THEME: string;
  PLATFORM: string;
}

export const APP_CONSTANTS: AppConfig = {
  TITLE: 'Antic\'s Code',
  DEFAULT_LANGUAGE: 'es',
  APP_VERSION,
  DISQUS: 'antics-code',
  THEME: 'default',
  PLATFORM: 'Frontend',
};

export const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
