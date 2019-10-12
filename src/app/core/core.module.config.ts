import { InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export interface CoreModuleConfig {
  WEBSTORAGE_CONFIG: IWebstorageConfig;
  TRANSLATE_CONFIG: {
    I18N_PATH: string,
    SUFFIX_FILE: string
  };
}

export const CORE_MODULE_CONSTANTS: CoreModuleConfig = {
  WEBSTORAGE_CONFIG: {
    prefix: 'anticscode',
    separator: '.',
    caseSensitive: false
  },
  TRANSLATE_CONFIG: {
    I18N_PATH: 'assets/i18n/',
    SUFFIX_FILE: '-lang.json'
  }
};

interface IWebstorageConfig {
  prefix: string;
  separator: string;
  caseSensitive: boolean;
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, CORE_MODULE_CONSTANTS.TRANSLATE_CONFIG.I18N_PATH,
                                 CORE_MODULE_CONSTANTS.TRANSLATE_CONFIG.SUFFIX_FILE);
}

export let CORE_MODULE_CONFIG = new InjectionToken<CoreModuleConfig>('core.module.config');
