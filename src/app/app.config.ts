// APP_CONFIG: Injection token to hold application-wide configuration properties that can be injected into other
// application elements such as components or services.

import { InjectionToken } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import * as fromArticles from '@core/ngrx/reducers/article.reducer';
import * as fromCategories from '@core/ngrx/reducers/category.reducer';
import * as fromCode from '@core/ngrx/reducers/code.reducer';
import * as fromUser from '@core/ngrx/reducers/user.reducer';

const DEV = 'http://localhost:3000/';
const PRE = 'http://192.168.1.97:3000/';
const PROD = 'https://antics-code.herokuapp.com/';
const APP_VERSION = '0.2.3';

export interface AppState {
  articles: fromArticles.ArticleState;
  categories: fromCategories.CategoryState;
  code: fromCode.CodeState;
  user: fromUser.UserState;
}

export interface ModuleConfig {
  NAVIGATION?: any;
}

export interface AppConfig extends ModuleConfig {
  TITLE: string;
  DEFAULT_LANGUAGE: string;
  END_POINT: string;
  APP_VERSION: string;
  DISQUS: string;
}

export const APP_CONSTANTS: AppConfig = {
  TITLE: 'Antic\'s Code',
  DEFAULT_LANGUAGE: 'es',
  END_POINT: PROD,
  APP_VERSION,
  DISQUS: 'antics-code',
  NAVIGATION: {
    EMPTY: '',
    ROOT: 'Home',
    HOME: 'Home'
  }
};

export const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1,
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
