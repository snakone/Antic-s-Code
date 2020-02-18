// APP_CONFIG: Injection token to hold application-wide configuration properties that can be injected into other
// application elements such as components or services.

import { InjectionToken } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import * as fromArticles from '@core/ngrx/reducers/article.reducer';
import * as fromCategories from '@core/ngrx/reducers/category.reducer';
import * as fromCode from '@core/ngrx/reducers/code.reducer';
import * as fromUsers from '@core/ngrx/reducers/user.reducer';
import * as fromSearch from '@core/ngrx/reducers/search.reducer';

const DEV = 'http://localhost:3000/';
const PRE = 'http://192.168.1.97:3000/';
const PROD = 'https://antics-code.herokuapp.com/';
const APP_VERSION = '0.5.1';
export const URI = 'https://anticscode.netlify.com';

export interface AppState {
  articles: fromArticles.ArticleState;
  categories: fromCategories.CategoryState;
  code: fromCode.CodeState;
  user: fromUsers.UserState;
  search: fromSearch.SearchState;
}

export interface AppConfig {
  TITLE: string;
  DEFAULT_LANGUAGE: string;
  END_POINT: string;
  APP_VERSION: string;
  DISQUS: string;
  THEME: string;
  PLATFORM: string;
  MAINTENANCE: boolean;
}

export const APP_CONSTANTS: AppConfig = {
  TITLE: 'Antic\'s Code',
  DEFAULT_LANGUAGE: 'es',
  END_POINT: PROD,
  APP_VERSION,
  DISQUS: 'antics-code',
  THEME: 'default',
  PLATFORM: 'Angular',
  MAINTENANCE: false
};

export const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1,
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
