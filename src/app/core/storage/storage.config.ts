import { InjectionToken } from '@angular/core';
import { APP_CONSTANTS } from '../../app.config';

export interface ModuleConfig {
  KEY: string;
}

export interface StorageConfig extends ModuleConfig {
  LANGUAGE: string;
  THEME: string;
  REMEMBER: boolean;  // Remember Email on Login
}

export const STORAGE_CONSTANTS: StorageConfig = {
  KEY: 'storage',
  THEME: 'default',
  LANGUAGE: APP_CONSTANTS.DEFAULT_LANGUAGE,
  REMEMBER: false
};

export class Storage {
// tslint:disable: no-inferrable-types
// tslint:disable: variable-name
  lang: string = APP_CONSTANTS.DEFAULT_LANGUAGE;
  token: string = null;
  user: string = null;
  remember: boolean = STORAGE_CONSTANTS.REMEMBER;
  user_lang: boolean = false;
  theme: string = STORAGE_CONSTANTS.THEME;
}

export let STORAGE_CONFIG = new InjectionToken<StorageConfig>('storage.config');
