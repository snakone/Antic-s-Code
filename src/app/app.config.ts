import { InjectionToken } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import * as fromArticles from '@store/articles/article.reducer';
import * as fromUsers from '@store/users/user.reducer';
import * as fromSearch from '@store/search/search.reducer';

export const URI = 'https://anticscode.netlify.com';
const APP_VERSION = '0.9.5';
export const DESKTOP_VERSION = '0.5.3';
export const MOBILE_VERSION = '0.1.2';

export interface AppState {
  articles: fromArticles.ArticleState;
  users: fromUsers.UserState;
  search: fromSearch.SearchState;
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
