import { InjectionToken } from '@angular/core';
import { APP_CONSTANTS } from '../../app.config';

export interface ModuleConfig {
  KEY: string;
}

export interface StorageConfig extends ModuleConfig {
  LANGUAGE: string;
  THEME: string;
  REMEMBER: boolean;
  WELCOME: boolean;
  CHAT: boolean;
}

export const STORAGE_CONSTANTS: StorageConfig = {
  KEY: 'storage',
  THEME: 'default',
  LANGUAGE: APP_CONSTANTS.DEFAULT_LANGUAGE,
  REMEMBER: false,
  WELCOME: false,
  CHAT: true
};

export class Storage {
  lang = APP_CONSTANTS.DEFAULT_LANGUAGE;
  token = null;
  user = null;
  remember = STORAGE_CONSTANTS.REMEMBER;
  // tslint:disable-next-line:variable-name
  user_lang = false;
  theme = STORAGE_CONSTANTS.THEME;
  welcome = STORAGE_CONSTANTS.WELCOME;
  chat = STORAGE_CONSTANTS.CHAT;
}

export let STORAGE_CONFIG = new InjectionToken<StorageConfig>('storage.config');
