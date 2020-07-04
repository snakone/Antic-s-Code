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
import { DISQUS_SHORTNAME } from 'ngx-disqus';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleEffects } from './ngrx/effects/article.effects';
import { CategoryEffects } from './ngrx/effects/category.effects';
import { UserEffects } from './ngrx/effects/user.effects';
import { SearchEffects } from './ngrx/effects/search.effects';
import { InteractionEffects } from './ngrx/effects/interaction.effects';
import { reducers } from './ngrx/reducers/reducers.index';

import { ToastrModule } from 'ngx-toastr';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgMarkdownModule } from './markdown/markdown.module';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

const Material = [
  MatSnackBarModule,
  MatBottomSheetModule
];

@NgModule({
  imports: [
    CommonModule,
    StorageModule,
    LoadingBarModule,
    NgMarkdownModule,
    LoadingBarHttpClientModule,
    DeviceDetectorModule.forRoot(),
    NgxWebstorageModule.forRoot(CORE_MODULE_CONSTANTS.WEBSTORAGE_CONFIG),
    StoreModule.forFeature('AppState', reducers),
    EffectsModule.forRoot([
      ArticleEffects,
      CategoryEffects,
      UserEffects,
      SearchEffects,
      InteractionEffects
    ]),
    LanguageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(),
    ...Material
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
      throw new Error('CoreModule is already loaded.');
    }
  }
}
