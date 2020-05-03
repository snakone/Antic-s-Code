import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@app/app.config';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '@core/storage/storage.service';

@Injectable()

export class LanguageService {

  constructor(
    private translateSrv: TranslateService,
    private ls: StorageService,
    @Inject(APP_CONFIG) private appConfig: AppConfig
  ) {
    this.setDefault();
  }

  private setDefault() {
    if (!this.translateSrv.getDefaultLang()) {
      this.translateSrv
      .setDefaultLang(this.appConfig.DEFAULT_LANGUAGE);
    }
    this.translateSrv.use(
      this.ls.get('lang') ||
      this.appConfig.DEFAULT_LANGUAGE
    );
  }

  public change(lang: string): void {
    this.translateSrv.use(lang);
    this.ls.setKey('lang', lang);
  }

  public getCurrent(): string {
    return this.translateSrv.currentLang;
  }
}
