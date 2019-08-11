import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from '@core/services/http/http.service';
import { ErrorHandlerService } from '@core/error-handler/error-handler.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageModule } from './language/language.module';
import { CORE_MODULE_CONSTANTS, CORE_MODULE_CONFIG } from './core.module.config';
import { LanguageService } from './language/services/language.service';
import { JwtInterceptor } from './services/http/jwt.interceptor';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { StorageModule } from './services/storage/storage.module';
import { ServicesModule } from './services/services.module';

import { HighlightModule } from 'ngx-highlightjs';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleEffects } from './ngrx/effects/article.effects';

import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';
import { reducer } from './ngrx/reducer/article.reducer';

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

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StorageModule,
    ServicesModule,
    NgxWebstorageModule.forRoot(CORE_MODULE_CONSTANTS.WEBSTORAGE_CONFIG),
    EffectsModule.forRoot([ArticleEffects]),
    StoreModule.forRoot({articles: reducer}),
    LanguageModule.forRoot(),
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    HttpService,
    LanguageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: CORE_MODULE_CONFIG, useValue: CORE_MODULE_CONSTANTS },
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
