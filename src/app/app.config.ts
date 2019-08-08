// APP_CONFIG: Injection token to hold application-wide configuration properties that can be injected into other
// application elements such as components or services.

import { InjectionToken } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEV = 'http://localhost:3000/';
const PRE = 'http://192.168.1.97:3000/';
const PROD = 'https://antics-space.herokuapp.com/';
const APP_VERSION = '0.0.2';

export interface ModuleConfig {
  NAVIGATION?: any;
}

export interface AppConfig extends ModuleConfig {
  TITLE: string;
  DEFAULT_LANGUAGE: string;
  END_POINT: string;
  APP_VERSION: string;
}

export const APP_CONSTANTS: AppConfig = {
  TITLE: 'Antic\'s Code',
  DEFAULT_LANGUAGE: 'es',
  END_POINT: PROD,
  APP_VERSION,
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
