import { InjectionToken } from '@angular/core';

export interface ModuleConfig {
  KEY: string;
}

export interface StorageConfig extends ModuleConfig {
  LANGUAGE: string;
}

export const STORAGE_CONSTANTS: StorageConfig = {
  KEY: 'settings',
  LANGUAGE: 'en'
};

export class LocalSettings {
// tslint:disable-next-line: no-inferrable-types
  lang: string = 'en';
}

export let STORAGE_CONFIG = new InjectionToken<StorageConfig>('storage.config');
