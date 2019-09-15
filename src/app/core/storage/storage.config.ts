import { InjectionToken } from '@angular/core';

export interface ModuleConfig {
  KEY: string;
}

export interface StorageConfig extends ModuleConfig {
  LANGUAGE: string;
}

export const STORAGE_CONSTANTS: StorageConfig = {
  KEY: 'storage',
  LANGUAGE: 'es'
};

export class Storage {
// tslint:disable-next-line: no-inferrable-types
  lang: string = 'es';
  token = null;
  user = null;
  remember = false;
}

export let STORAGE_CONFIG = new InjectionToken<StorageConfig>('storage.config');
