import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';

import {
  CORE_MODULE_CONSTANTS,
  CORE_MODULE_CONFIG,
  createTranslateLoader
} from './core.module.config';

import { APP_CONSTANTS } from '../app.config';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LanguageModule } from './language/language.module';
import { ErrorHandlerService } from '@core/error-handler/error-handler.service';

import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/http/jwt.interceptor';

import { StorageModule } from './storage/storage.module';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ServicesModule } from './services/services.module';
import { DISQUS_SHORTNAME } from 'ngx-disqus';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleEffects } from './ngrx/effects/article.effects';
import { CategoryEffects } from './ngrx/effects/category.effects';
import { CodeEffects } from './ngrx/effects/code.effects';
import { UserEffects } from './ngrx/effects/user.effects';
import { SearchEffects } from './ngrx/effects/search.effects';
import { reducers } from './ngrx/reducers/reducers.index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ToastrModule } from 'ngx-toastr';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  imports: [
    CommonModule,
    StorageModule,
    ServicesModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    NgxWebstorageModule.forRoot(CORE_MODULE_CONSTANTS.WEBSTORAGE_CONFIG),
    StoreModule.forFeature('AppState', reducers),
    EffectsModule.forRoot([
      ArticleEffects,
      CategoryEffects,
      CodeEffects,
      UserEffects,
      SearchEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    LanguageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: CORE_MODULE_CONFIG, useValue: CORE_MODULE_CONSTANTS },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    { provide: DISQUS_SHORTNAME, useValue: APP_CONSTANTS.DISQUS }
  ],
  exports: [LoadingBarModule]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
