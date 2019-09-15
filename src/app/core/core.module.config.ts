import { ModuleConfig } from '@app/app.config';
import { InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';

export interface CoreModuleConfig extends ModuleConfig {
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

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'javascript', func: javascript },
    {name: 'css', func: css},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

export let CORE_MODULE_CONFIG = new InjectionToken<CoreModuleConfig>('core.module.config');
