// APP_CONFIG: Injection token to hold application-wide configuration properties that can be injected into other
// application elements such as components or services.

import { InjectionToken } from '@angular/core';

export interface ModuleConfig {
  NAVIGATION?: any;
}

export interface AppConfig extends ModuleConfig {
  TITLE: string;
  DEFAULT_LANGUAGE: string;
}

export const APP_CONSTANTS: AppConfig = {
  TITLE: 'Angular 8 Seed',
  DEFAULT_LANGUAGE: 'en',
  NAVIGATION: {
    EMPTY: '',
    ROOT: '',
    HOME: 'Home'
  }
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
